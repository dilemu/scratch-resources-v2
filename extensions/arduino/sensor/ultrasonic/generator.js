/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ultrasonic_readDistance = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a, b] = pinList.split('-');

        Blockly.Arduino.includes_.ultrasonic_readDistance = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`ultrasonic_readDistance_${a}_${b}`] =
            `Ultrasonic ultrasonic_${a}_${b}(${a}, ${b});`;
        return [`ultrasonic_${a}_${b}.read(CM)`, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
