/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitLEDButton_light = function (block) {
        const pinList = block.getFieldValue('PIN');
        const level = block.getFieldValue('LEVEL');
        const [a, b] = pinList.split('-');
        return `digitalWrite(${b}, ${level});\n`;
    }
    return Blockly;
}

exports = addGenerator;
