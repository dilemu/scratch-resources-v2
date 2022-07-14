/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.matrixScreen_showText = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a,b] = pinList.split('-');
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.fullIncludes = `#include <Matrix.h>`;
        Blockly.Arduino.definitions_[`matrix_${a}`] = `Matrix matrix_${a}(${a},${b});`;
        Blockly.Arduino.setups_[`matrix_${a}`] = `matrix_${a}.begin(0x70);`;
        const code = `matrix_${a}.drawStr(String(${text}));\n`;
        return code;
    }

    Blockly.Arduino.matrixScreen_clear = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a,b] = pinList.split('-');
        Blockly.Arduino.includes_.fullIncludes = `#include <Matrix.h>`;
        Blockly.Arduino.definitions_[`matrix_${a}`] = `Matrix matrix_${a}(${a},${b});`;
        Blockly.Arduino.setups_[`matrix_${a}`] = `matrix_${a}.begin(0x70);`;
        const code = `matrix_${a}.clear();\nmatrix_${a}.writeDisplay();\n`;
        return code;
    }

    Blockly.Arduino.matrixScreen_rotate = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a,b] = pinList.split('-');
        const degree = Blockly.Arduino.valueToCode(block, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.fullIncludes = `#include <Matrix.h>`;
        Blockly.Arduino.definitions_[`matrix_${a}`] = `Matrix matrix_${a}(${a},${b});`;
        Blockly.Arduino.setups_[`matrix_${a}`] = `matrix_${a}.begin(0x70);`;
        const code = `matrix_${a}.setRotation(${degree});\n`;
        return code;
    }

    Blockly.Arduino.matrixScreen_setPixel = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a,b] = pinList.split('-');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const state = Blockly.Arduino.valueToCode(block, 'STATE', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.fullIncludes = `#include <Matrix.h>`;
        Blockly.Arduino.definitions_[`matrix_${a}`] = `Matrix matrix_${a}(${a},${b});`;
        Blockly.Arduino.setups_[`matrix_${a}`] = `matrix_${a}.begin(0x70);`;
        const code = `matrix_${a}.drawPixel(${x},${y},${state});\nmatrix_${a}.writeDisplay();\n`;
        return code;
    }
    return Blockly;
}

exports = addGenerator;
