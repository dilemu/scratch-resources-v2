/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#32C850';
    const secondaryColour = '#FF6347';

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

    const dotIndexList = [
        ["1", 0],
        ["2", 1],
        ["3", 2],
        ["4", 3],
    ]

    const dotState = [
        ["亮", true],
        ["暗", false],
    ]

    const controlList = [
        ["开", "displayOn"],
        ["关", "displayOff"],
        ["清屏", "clear"]
    ]

    Blockly.Blocks.DBitFourDigitClockDisplay_showText = {
        init: function () {
            this.jsonInit({
                message0: "设置 数码管 管脚 %1 显示 %2",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "input_value",
                        name: "TEXT"
                    }
                ],
                colour: colour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.DBitFourDigitClockDisplay_showDot = {
        init: function () {
            this.jsonInit({
                message0: "设置 数码管 管脚 %1 第 %2 个小数点 %3",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "field_dropdown",
                        name: "DOT_INDEX",
                        options: dotIndexList
                    },
                    {
                        type: "field_dropdown",
                        name: "DOT_STATE",
                        options: dotState
                    }
                ],
                colour: colour,
                extensions: ['shape_statement']
            })
        }
    }

    Blockly.Blocks.DBitFourDigitClockDisplay_control = {
        init: function () {
            this.jsonInit({
                message0: "设置 数码管 管脚 %1 的 %2",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "field_dropdown",
                        name: "CONTROL",
                        options: controlList
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
