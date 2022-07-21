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

    Blockly.Blocks.DBitRaindrop_value = {
        init: function () {
            this.jsonInit({
                message0: "读取引脚 %1 雨量大小值",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    }
                ],
                colour: colour,
                extensions: ['output_string']
            })
        }
    }

    return Blockly;
}

exports = addBlocks;
