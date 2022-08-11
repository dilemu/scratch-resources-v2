/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitMotor_drive = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a, b] = pinList.split('-');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        const _direction = block.getFieldValue('DIRECTION');
        let direction;
        if(_direction == 0) direction = a;
        if(_direction == 1) direction = b;
        const code = `analogWrite(${direction}, ${speed});\n`;
        return code;
    }
    return Blockly;
}

exports = addGenerator;
