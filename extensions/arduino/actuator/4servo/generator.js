/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitServo_drive = function (block) {
        const pin = block.getFieldValue('PIN');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_[`servo${pin}_init`] = `#include <servo.h>;`;
        Blockly.Arduino.definitions_[`servo${pin}_init`] = `Servo servo_${pin};`;
        Blockly.Arduino.setups_[`servo${pin}_init`] = `servo_${pin}.attach(${pin});`;
        const code = `servo_${pin}.angle(abs(${speed}));\n`;
        return code;
    }
    return Blockly;
}

exports = addGenerator;
