/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitPyroelectric_boolean = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [PIN, b] = pinList.split('-');
        return [`analogRead(${PIN})`, Blockly.Arduino.ORDER_ATOMIC];
    }
    return Blockly;
}

exports = addGenerator;
