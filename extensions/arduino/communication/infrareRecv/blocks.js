/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#5867D6';
    const secondaryColour = '#888800';
    const digitalPins = [
        ["A0-A1", "A0-A1"],
        ["A2-A3", "A2-A3"],
        ["A4-A5", "A4-A5"],
        
        ["D2-D3", "2-3"],
        ["D5-D6", "5-6"],
        ["D4-D7", "4-7"],
["D8-D9", "8-9"],
        ["D10-D11", "10-11"],
        ["D12-D13", "12-13"]
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
