/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.GRAVITYOLED_init = function(block) {
        let text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        const deviceName = `RGBLED`;
        Blockly.Arduino.includes_.GRAVITYOLED_init = `#include <DFRobot_SSD1306_I2C.h>;`
        Blockly.Arduino.definitions_[deviceName] = `DFRobot_SSD1306_I2C ${deviceName};`;
        const code = `${deviceName}.begin(${text});\n${deviceName}.begin(${text});\n`;
        return code;
    }

    Blockly.Arduino.DBitRGBLED_setBrightness = function(block) {
        const pinList = block.getFieldValue('PIN');
        const [PIN, b] = pinList.split('-');
        const deviceName = `RGBLED_${PIN}`;
        const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHT', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.DBitRGBLED_display = `#include <ws2812b.h>`
        Blockly.Arduino.definitions_[deviceName] = `Adafruit_NeoPixel ${deviceName} = Adafruit_NeoPixel(4, ${PIN}, NEO_GRB + NEO_KHZ800);`;
        const code = `${deviceName}.setBrightness(${brightness});\n`;
        return code;
    }
    return Blockly;
}

exports = addGenerator;
