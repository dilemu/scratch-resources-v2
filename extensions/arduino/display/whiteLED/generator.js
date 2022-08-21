/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitWhiteLED_light = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a, b] = pinList.split('-');
        Blockly.Arduino.setups_[`${a},${b}`] = `pinMode(${a}, OUTPUT);`;
        const level = block.getFieldValue('LEVEL');
        return `digitalWrite(${a}, ${level});\n`;
    }
    return Blockly;
}

exports = addGenerator;
