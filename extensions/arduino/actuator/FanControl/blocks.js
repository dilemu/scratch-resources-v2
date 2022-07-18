/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#BBBB00';
    const secondaryColour = '#888800';
    const digitalPins = [
        ["5-6", "5-6"],
        ["10-11", "10-11"]
    ]

    const directionList = [
        ["顺时针", 1],
        ["逆时针", 2]
    ]

    Blockly.Blocks.DBitFanControl_start = {
        init: function () {
            this.jsonInit({
                message0: "设置 风扇 管脚 %1 的方向为 %2 转速为 %3",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "field_dropdown",
                        name: "DIRECTION",
                        options: directionList
                    },
                    {
                        type: "input_value",
                        name: "SPEED",
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
