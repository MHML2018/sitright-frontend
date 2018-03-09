import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

export default class BLEContainer extends Component {

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
        if (error) {
            // Handle error (scanning will be stopped automatically)
            console.error("Cannot connect to Chair BLE services",error);
            return
        }

        // Check if it is a device you are looking for based on advertisement data
        // or other criteria.
        if (device.name === 'SitRight') {

              device.connect()
                .then((device) => {
                    return device.discoverAllServicesAndCharacteristics()
                })
                .then((device) => {
                   // Do work on device with services and characteristics
                })
                .catch((error) => {
                    // Handle errors
                    console.error("Cannot connect to Chair BLE services",error);
                });

            // Stop scanning as it's not necessary if you are scanning for one device.
            this.manager.stopDeviceScan();

            // Proceed with connection.
        }
    });
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
}
