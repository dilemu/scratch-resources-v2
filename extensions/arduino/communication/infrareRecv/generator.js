/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitInfrareRecv_read = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [PIN, b] = pinList.split('-');
        const deviceName = `IR_${PIN}`;
        Blockly.Arduino.includes_.IR_read = `#include <IRremote.h>`
        Blockly.Arduino.definitions_[deviceName] = `IRrecv ${deviceName}(${PIN});`;
        return [`${deviceName}.decode()`, Blockly.Arduino.ORDER_ATOMIC];
    }
    Blockly.Arduino.DBitInfrareRecv_detect = function (block) {
        const pinList = block.getFieldValue('PIN');
        const key = block.getFieldValue('KEY');
        const [PIN, b] = pinList.split('-');
        const deviceName = `IR_${PIN}`;
        Blockly.Arduino.includes_.InfrareRecv_read = `#include <IRremote.h>`
        Blockly.Arduino.definitions_[deviceName] = `IRrecv ${deviceName}(${PIN});`;
        return [`${deviceName}.KEYReturn(${key})`, Blockly.Arduino.ORDER_ATOMIC];
    }
    return Blockly;
}

exports = addGenerator;
