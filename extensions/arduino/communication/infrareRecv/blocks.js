/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#5867D6';
    const secondaryColour = '#888800';
    const digitalPins = [
        ["D2-D3", "2-3"],
    ]

    const keyList = [
        ["上", "1"],
        ["下", "2"],
        ["左", "3"],
        ["右", "4"],
        ["中", "5"],
    ]

    Blockly.Blocks.DBitInfrareRecv_read = {
        init: function () {
            this.jsonInit({
                message0: "读取 %1 的红外接收值",
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
                message0: "红外接收模块 %1 检测到 %2 按键被按下？",
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
