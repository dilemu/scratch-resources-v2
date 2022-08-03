/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#32C850';

    
    const fullDigitalPins = [
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

    const lightStatus = [
        ["亮红灯", "1"],
        ["灭红灯", "2"],
        ["亮绿灯", "3"],
        ["灭绿灯", "4"],
        ["亮黄灯", "5"],
        ["灭黄灯", "6"],
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
