/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.matrixScreen_showText = function (block) {
        const pin = block.getFieldValue('PIN');
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        const code = `matrixScreen.showText(${pin}, ${text});\n`;
        return code;
    }
    return Blockly;
}

exports = addGenerator;
