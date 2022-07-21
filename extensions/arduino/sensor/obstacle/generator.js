/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitObstacle_boolean = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [PIN, b] = pinList.split('-');
        return [`digitalRead(${PIN})`, Blockly.Arduino.ORDER_ATOMIC];
    }
    return Blockly;
}

exports = addGenerator;
