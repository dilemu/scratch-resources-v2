/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#BBBB00';
    const secondaryColour = '#888800';
    const digitalPins = [
        ["A0-A1", "A0"],
        ["A2-A3", "A2"],
        ["A4-A5", "A4"],
        ["0-1", "0"],
        ["2-3", "2"],
        ["5-6", "5"],
        ["4-7", "4"],
        ["10-11", "10"],
        ["12-13", "12"]
    ]

    Blockly.Blocks.matrixScreen_showText = {
        init: function () {
            this.jsonInit({
                message0: "设置 点阵屏 管脚 %1 显示 %2",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "input_value",
                        name: "TEXT"
                    }
                ],
                colour: colour,
                extensions: ['output_string']
            })
        }
    };

    return Blockly;
}

exports = addBlocks;
