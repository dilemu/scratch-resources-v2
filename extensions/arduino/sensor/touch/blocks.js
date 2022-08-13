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
        
        ["D2-D3", "2-3"],
        ["D4-D7", "4-7"],
        ["D5-D6", "5-6"],
["D8-D9", "8-9"],
        ["D10-D11", "10-11"],
        ["D12-D13", "12-13"]
    ]

    Blockly.Blocks.DBitTouch_boolean = {
        init: function () {
            this.jsonInit({
                message0: "触摸传感器 %1 检测到被触摸？",
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
