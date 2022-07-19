/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitLEDButton_light = function (block) {
        const pin = block.getFieldValue('PIN');
        const level = block.getFieldValue('LEVEL');
        return `digitalWrite(${pin}, ${level});\n`;
    }
    return Blockly;
}

exports = addGenerator;
