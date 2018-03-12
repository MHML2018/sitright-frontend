// @flow
import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import { connect } from "react-redux";
import { BleManager } from 'react-native-ble-plx';
import { pushBLEdata } from './actions';

export interface Props {
	pushBLEdata: Function,
//  feedbackBLEdata: Function,
//	bleListener: Function,
	raw_data: Object,
	isBLEConnected: Object,
}

export interface State {}

class BLEContainer extends Component {

   constructor() {
     super()
     this.manager = new BleManager()
     this.state = {info: "", values: {}}
     this.prefixUUID = "c762517"
     this.suffixUUID = "-8599-40f7-b6c6-f2336b53a164"
     this.sensors = { 0: "PressureBottom", 1: "PressureBack", 2: "Acceleration", 5: "Feedback"}

     const subscription = this.manager.onStateChange((state) => {
        if (state === 'PoweredOn') {
            this.scanAndConnect();
            subscription.remove();
        }
    }, true);
   }

   scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
        this.info("Scanning...")
        console.log(device)

        if (error) {
            // Handle error (scanning will be stopped automatically)
            console.error("Cannot connect to Bluetooth LE hardware: %s",error.message);
            return
        }

        // Check if it is a device you are looking for based on advertisement data
        // or other criteria.
        if (device.name === 'SitRight' ||
        device.solicitedServiceUUIDs.includes(this.serviceUUID())) {

              device.connect()
                .then((device) => {
                  this.info("BLE Found - Discovering services and characteristics...")
                    return device.discoverAllServicesAndCharacteristics()
                })
                .then((device) => {
                   // Do work on device with services and characteristics
                   //monitorCharacteristicForService(serviceUUID, characteristicUUID, listener, transactionId)
                   //device.monitorCharacteristicForService, serviceUUID(), pressureeUUID(0), bleListener),

                  this.info("BLE Setting notifications");
                  return this.setupNotifications(device);
                })
                .then(() => {
                  this.info("BLE Listening...");
                  this.prop.isBLEConnected = true;
                })
                .catch((error) => {
                    // Handle errors
                    console.error("Cannot connect to Chair BLE services.",error);
					this.prop.isBLEConnected = false;
                });

            // Stop scanning as it's not necessary if you are scanning for one device.
            this.manager.stopDeviceScan();

            // Proceed with connection.
        }
    });
  }

  async setupNotifications(device) {
      const service = this.serviceUUID(id)
      const fbService = this.fbServiceUUID(id)
      const characteristicW = this.pressureeUUID(id)
      const characteristicN = this.fbWriteUUID(id)
      const characteristic = await device.writeCharacteristicWithoutResponseForService(
        service, characteristicW, "AA==" /* 0x01 in hex */
      )

      device.monitorCharacteristicForService(
        service, characteristicN,
        (error, characteristic) => {
          if (error) {
            this.error(error.message)
            return
          }
          this.info("BLE Rx from "+characteristic.uuid+" : " +characteristic.value);
          this.bleRx(characteristic.uuid, characteristic.value)
      })

    }

  bleRx(uuid: String, data: String){
      const pushUrl = "http://mhml-demo.cmpoon.com:8000/update";
      this.props.pushBLEdata(pushUrl, data);
  }

  serviceUUID() {
     return this.prefixUUID + "0" + this.suffixUUID
   }

  pressureeUUID(num) {
     return this.prefixUUID + "1" + this.suffixUUID
   }

  accelUUID(num) {
     return this.prefixUUID + "2" + this.suffixUUID
   }

  fbServiceUUID(num) {
  return this.prefixUUID + "5" + this.suffixUUID
  }

  fbWriteUUID(num) {
   return this.prefixUUID + "6" + this.suffixUUID
  }

  render() {
    return (
      <View>
        <Text>Connected: {this.probs.isBLEConnected}</Text>
        <Text>Data: {this.probs.raw_data}</Text>
      </View>
    )
  }

}

function bindAction(dispatch) {
	return {
		//bleListener: (error, characteristic) => dispatch(bleListener(error, characteristic)),
		pushBLEdata: blerx => dispatch(pushBLEdata(blerx))//,
    //feedbackBLEdata: bletx => dispatch(feedbackBLEdata(bletx)),
	};
}

const mapStateToProps = state => ({
	raw_data: state.bleReducer.raw_data,
	isBLEConnected: state.bleReducer.isBLEConnected,
});

export default connect(mapStateToProps, bindAction)(BLEContainer);
