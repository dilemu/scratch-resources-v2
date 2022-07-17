/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.passiveBuzzer_toneSetPlay = function (block) {
        const pinList = block.getFieldValue('PIN');
        const tone = block.getFieldValue('TONE');
        const beat = block.getFieldValue('BEAT');
        const [a, b] = pinList.split('-');
        Blockly.Arduino.includes_[`passiveBuzzer${a}_init`] = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.passiveBuzzer_init = `Buzzer my_buzzer${a}(${a});\n` +
            `float beatTime = 60.0 / 120;`;
        const code = `my_buzzer${a}.tone(${tone}, ${beat} * 1000 * beatTime);\n`;
        return code;
    }

    Blockly.Arduino.passiveBuzzer_toneNormalPlay = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a, b] = pinList.split('-');
        Blockly.Arduino.includes_[`passiveBuzzer${a}_init`] = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.passiveBuzzer_init = `Buzzer my_buzzer${a}(${a});\n` +
            `float beatTime = 60.0 / 120;`;
        const frequency = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        const code = `_Tone(${pinList}, ${frequency}, ${time});\n`;
        return code;
    }
    // Blockly.Arduino.passiveBuzzer_init = function (block) {
    //     const pin = block.getFieldValue('PIN');

    //     Blockly.Arduino.includes_.passiveBuzzer_init = `#include <Buzzer.h>`;
    //     Blockly.Arduino.definitions_.passiveBuzzer_init = `Buzzer my_buzzer(${pin});\n` +
    //         `float beatTime = 60.0 / 120;`;

    //     return ``;
    // };

    // Blockly.Arduino.passiveBuzzer_playToneForBeat = function () {
    //     const freq = this.getFieldValue('FREQ');
    //     const time = this.getFieldValue('TIME');

    //     return `my_buzzer.tone(${freq}, ${time} * 1000 * beatTime);\n`;
    // };

    // Blockly.Arduino.passiveBuzzer_setTempo = function (block) {
    //     const bpm = Blockly.Arduino.valueToCode(block, 'BPM', Blockly.Arduino.ORDER_ATOMIC);

    //     return `beatTime = 60.0 / ${bpm};\n`;
    // };

    // Blockly.Arduino.passiveBuzzer_playRingtone = function () {
    //     const no = this.getFieldValue('NO');

    //     return `my_buzzer.playRingtone(${no});\n`;
    // };

    return Blockly;
}

exports = addGenerator;
