/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitRedAndFGreenLED_light = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a, b] = pinList.split('-');
        const status = block.getFieldValue('STATUS');
        let code = '';
        switch (parseInt(status)) {
            case 1:
                code = `digitalWrite(${a}, HIGH);\n`;
                break;
            case 2:
                code = `digitalWrite(${a}, LOW);\n`;
                break;
            case 3:
                code = `digitalWrite(${b}, HIGH);\n`;
                break;
            case 4:
                code = `digitalWrite(${b}, LOW);\n`;
                break;
            case 5:
                code = `digitalWrite(${a}, HIGH);\n`;
                code += `digitalWrite(${b}, HIGH);\n`;
                break;
            case 6:
                code = `digitalWrite(${a}, LOW);\n`;
                code += `digitalWrite(${b}, LOW);\n`;
                break;
        }
        return code;
    }
    return Blockly;
}

exports = addGenerator;
