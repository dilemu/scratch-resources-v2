/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.dht_read = function (block) {
        const pinList = block.getFieldValue('PIN');
        const type = block.getFieldValue('TYPE');
        const [PIN, b] = pinList.split('-');
        const deviceName = `DHT_${PIN}`;
        Blockly.Arduino.includes_.DHT_read = `#include <DHT.h>`
        Blockly.Arduino.definitions_[deviceName] = `DHT ${deviceName}(${PIN}, DHT11);`;
        if(type === 'TEMPERATURE') {
            return [`${deviceName}.readTemperature(false)`, Blockly.Arduino.ORDER_ATOMIC];
        } else if(type === 'HUMIDITY') {
            return [`${deviceName}.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
        }
    }
    // Blockly.Arduino.dht_init = function (block) {
    //     const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    //     const pin = block.getFieldValue('PIN');
    //     const model = this.getFieldValue('MODEL');

    //     Blockly.Arduino.includes_.dht_init = `#include <DHT.h>`;
    //     Blockly.Arduino.definitions_[`dht_init_${no}`] = `DHT dht_${no}(${pin}, ${model});`;
    //     return '';
    // };

    // Blockly.Arduino.dht_readHumidity = function (block) {
    //     const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    //     return [`dht_${no}.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
    // };

    // Blockly.Arduino.dht_readTemperature = function (block) {
    //     const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    //     const unit = this.getFieldValue('UNIT');
    //     return [`dht_${no}.readTemperature(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
    // };

    return Blockly;
}

exports = addGenerator;
