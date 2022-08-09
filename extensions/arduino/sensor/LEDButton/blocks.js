/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#A66EFF';
    const secondaryColour = '#888800';
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

    const digitalLevel = [
        ["打开", "HIGH"],
        ["关闭", "LOW"]
    ]

    Blockly.Blocks.DBitLEDButton_light = {
        init: function () {
            this.jsonInit({
                message0: "%1 %2 的按钮指示灯",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "LEVEL",
                        options: digitalLevel
                    },
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    }
                ],
                colour: colour,
                extensions: ['shape_statement']
            })
        }
    }

    Blockly.Blocks.DBitLEDButton_button = {
        init: function () {
            this.jsonInit({
                message0: '按键 %1 检测到被按下？',
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
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
