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
    const fullDigitalPins = [
        ["A0", "A0"],
        ["A1", "A1"],
        ["A2", "A2"],
        ["A3", "A3"],
        ["A4", "A4"],
        ["A5", "A5"],
        ["0", "0"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
    ]
    const digitalLevel = [
        ["打开", "HIGH"],
        ["关闭", "LOW"]
    ]

    Blockly.Blocks.DBitLEDButton_light = {
        init: function () {
            this.jsonInit({
                message0: "%1 引脚 %2 LED",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "LEVEL",
                        options: digitalLevel
                    },
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: fullDigitalPins
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
