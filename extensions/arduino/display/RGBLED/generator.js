/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitRGBLED_display = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [PIN,b] = pinList.split('-');
        const deviceName = `RGBLED_${PIN}`;
        let index = block.getFieldValue('INDEX');
        const red = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
        const green = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
        const blue = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.DBitRGBLED_display = `#include <ws2812b.h>`
        Blockly.Arduino.definitions_[deviceName] = `Adafruit_NeoPixel ${deviceName} = Adafruit_NeoPixel(4, ${PIN}, NEO_GRB + NEO_KHZ800);`;
        if (index=="3") index = "4";
        else if (index=="4") index = "3";
        const code = `${deviceName}.colorWipeSingle(${index}, ${red}, ${green}, ${blue});\n`;
        return code;
    }
    return Blockly;
}

exports = addGenerator;
