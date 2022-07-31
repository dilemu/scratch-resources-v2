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

    const keyList = [
        ["上", 1],
        ["下", 2],
        ["左", 3],
        ["右", 4],
        ["中", 5],
    ]

    Blockly.Blocks.DBitInfrareRecv_read = {
        init: function () {
            this.jsonInit({
                message0: "读取引脚 %1 红外接收值",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    }
                ],
                colour: colour,
                extensions: ['output_number']
            })
        }
    },

    Blockly.Blocks.DBitInfrareRecv_detect = {
        init: function () {
            this.jsonInit({
                message0: "红外遥控器 管脚 %1 按键 %2 被按下",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "field_dropdown",
                        name: "KEY",
                        options: keyList
                    }
                ],
                colour: colour,
                extensions: ['output_boolean']
            })
        }
    }

    return Blockly;
}

exports = addBlocks;
