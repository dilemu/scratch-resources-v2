/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#BBBB00';
    const secondaryColour = '#888800';
    const digitalPins = [
        ["A0-A1", "A0-A1"],
        ["A2-A3", "A2-A3"],
        ["A4-A5", "A4-A5"],
        ["0-1", "0-1"],
        ["2-3", "2-3"],
        ["5-6", "5-6"],
        ["4-7", "4-7"],
        ["10-11", "10-11"],
        ["12-13", "12-13"]
    ]
    const LEDIndex = [
        ["全部", "0"],
        ["第一个", "1"],
        ["第二个", "2"],
        ["第三个", "3"],
        ["第四个", "4"],
    ]

    Blockly.Blocks.DBitRGBLED_display = {
        init: function () {
            this.jsonInit({
                message0: "设置 全彩灯 管脚 %1 %2 灯 颜色为 R %3 G %4 B %5",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "field_dropdown",
                        name: "INDEX",
                        options: LEDIndex
                    },
                    {
                        type: "input_value",
                        name: "RED"
                    },
                    {
                        type: "input_value",
                        name: "GREEN"
                    },
                    {
                        type: "input_value",
                        name: "BLUE"
                    }
                ],
                colour: colour,
                extensions: ['shape_statement']
            })
        }
    };

    return Blockly;
}

exports = addBlocks;
