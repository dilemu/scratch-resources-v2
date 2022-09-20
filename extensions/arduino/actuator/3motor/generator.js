/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitMotor_drive = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a, b] = pinList.split('-');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        const _direction = block.getFieldValue('DIRECTION');
        let code;
        if (_direction == 0) code = `analogWrite(${a}, ${speed});\nanalogWrite(${b}, 0);\n`;
        if (_direction == 1) code = `analogWrite(${b}, ${speed});\nanalogWrite(${a}, 0);\n`;
        return code;
    }
    return Blockly;
}

exports = addGenerator;
