/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#00AAFF';
    const secondaryColour = '#888800';
    const digitalPins = [
        ["A0", "A0"],
        ["A2", "A2"],
        ["A4", "A4"],
        ["D0", "0"],
        ["D2", "2"],
        ["D4", "4"],
        ["D5", "5"],
        ["D10", "10"],
        ["D12", "12"],
    ]

    Blockly.Blocks.DBitServo_drive = {
        init: function () {
            this.jsonInit({
                message0: "设置 %1 引脚伺服舵机为 %2 度",
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED',
                    }
                ],
                colour: colour,
                extensions: ['shape_statement']
            })
        }
    }

    return Blockly;
}

exports = addBlocks;
