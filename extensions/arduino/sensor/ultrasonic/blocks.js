/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#A66EFF';
    const digitalPins = [
        ["A0-A1", "A0-A1"],
        ["A2-A3", "A2-A3"],
        ["A4-A5", "A4-A5"],
        ["D0-D1", "0-1"],
        ["D2-D3", "2-3"],
        ["D5-D6", "5-6"],
        ["D4-D7", "4-7"],
        ["D10-D11", "10-11"],
        ["D12-D13", "12-13"]
    ]

    Blockly.Blocks.ultrasonic_readDistance = {
        init: function () {
            this.jsonInit({
                message0: '读取 %1 的超声波测距值(cm)',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
