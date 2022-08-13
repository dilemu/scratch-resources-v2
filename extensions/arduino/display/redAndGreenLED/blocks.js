/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#32C850';

    
    const fullDigitalPins = [
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

    const lightStatus = [
        ["红灯亮", "1"],
        ["红灯灭", "2"],
        ["绿灯亮", "3"],
        ["绿灯灭", "4"],
        ["全亮", "5"],
        ["全灭", "6"],
    ]

    Blockly.Blocks.DBitRedAndFGreenLED_light = {
        init: function () {
            this.jsonInit({
                message0: "设置 %1 的 红绿双色灯 %2",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: fullDigitalPins
                    },
                    {
                        type: "field_dropdown",
                        name: "STATUS",
                        options: lightStatus
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
