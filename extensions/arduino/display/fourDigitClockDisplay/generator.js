/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitFourDigitClockDisplay_showText = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a, b] = pinList.split('-');
        const deviceName = `fourDigitClock_${a}_${b}`;
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.DBitFourDigitClockDisplay = `#include <TM1650.h>`;
        Blockly.Arduino.definitions_[deviceName] = `TM1650 ${deviceName}(${a}, ${b});`;
        Blockly.Arduino.setups_[deviceName] = `${deviceName}.init();`;
        const code = `${deviceName}.displayString(String("") + ${text});\n`;
        return code;
    };

    Blockly.Arduino.DBitFourDigitClockDisplay_showDot = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a, b] = pinList.split('-');
        const deviceName = `fourDigitClock_${a}_${b}`;
        const dotIndex = block.getFieldValue('DOT_INDEX');
        const dotState = block.getFieldValue('DOT_STATE');
        Blockly.Arduino.includes_.DBitFourDigitClockDisplay = `#include <TM1650.h>`;
        Blockly.Arduino.definitions_[deviceName] = `TM1650 ${deviceName}(${a}, ${b});`;
        Blockly.Arduino.setups_[deviceName] = `${deviceName}.init();`;
        const code = `${deviceName}.setDot(${dotIndex}, ${dotState});\n`;
        return code;
    }

    Blockly.Arduino.DBitFourDigitClockDisplay_control = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a, b] = pinList.split('-');
        const deviceName = `fourDigitClock_${a}_${b}`;
        const control = block.getFieldValue('CONTROL');
        Blockly.Arduino.includes_.DBitFourDigitClockDisplay = `#include <TM1650.h>`;
        Blockly.Arduino.definitions_[deviceName] = `TM1650 ${deviceName}(${a}, ${b});`;
        Blockly.Arduino.setups_[deviceName] = `${deviceName}.init();`;
        switch (control) {
            case 'displayOn':
                return `${deviceName}.displayOn();\n`;
            case 'displayOff':
                return `${deviceName}.displayOff();\n`;
            case 'clear':
                return `${deviceName}.clear();\n`;
            default:
                return '';
        }
    }

    return Blockly;
}

exports = addGenerator;
