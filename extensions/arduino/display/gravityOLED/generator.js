/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    const deviceName = `GRAVITYOLED`;
    Blockly.Arduino.GRAVITYOLED_init = function(block) {
        let text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.GRAVITYOLED_init = `#include <AR_SSD1306_I2C.h>;`
        Blockly.Arduino.definitions_.GRAVITYOLED_define = `AR_SSD1306_I2C ${deviceName};`;
        return `${deviceName}.begin(${text});\n`;
    }

    Blockly.Arduino.GRAVITYOLED_setContent = function(block) {
        let line = Blockly.Arduino.valueToCode(block, 'LINE', Blockly.Arduino.ORDER_ATOMIC);
        let text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.GRAVITYOLED_init = `#include <AR_SSD1306_I2C.h>;`
        Blockly.Arduino.definitions_.GRAVITYOLED_define = `AR_SSD1306_I2C ${deviceName};`;
        return `${deviceName}.setCursorLine(${line});\n${deviceName}.printLine(${text});\n`;
    }

    Blockly.Arduino.GRAVITYOLED_setPlace = function(block) {
        let text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        let xCoor = Blockly.Arduino.valueToCode(block, 'XCOOR', Blockly.Arduino.ORDER_ATOMIC);
        let yCoor = Blockly.Arduino.valueToCode(block, 'YCOOR', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.GRAVITYOLED_init = `#include <AR_SSD1306_I2C.h>;`
        Blockly.Arduino.definitions_.GRAVITYOLED_define = `AR_SSD1306_I2C ${deviceName};`;
        return `${deviceName}.setCursor(${xCoor},${yCoor});\n${deviceName}.print(${text});\n`;
    }

    Blockly.Arduino.GRAVITYOLED_clear = function() {
        Blockly.Arduino.includes_.GRAVITYOLED_init = `#include <AR_SSD1306_I2C.h>;`
        Blockly.Arduino.definitions_.GRAVITYOLED_define = `AR_SSD1306_I2C ${deviceName};`;
        return `${deviceName}.fillScreen(0);\n`;
    }

    return Blockly;
}

exports = addGenerator;
