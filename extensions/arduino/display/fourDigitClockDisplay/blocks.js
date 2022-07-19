/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#FF7F50';
    const secondaryColour = '#FF6347';

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
                ]
            });
        }
    };

    Blockly.Blocks.DBitFourDigitClockDisplay_showDot = {
        init: function () {
            this.jsonInit({
                message0: "设置 数码管 管脚 %1 第 %2 个小数点 %3",
            })
        }
    }

    return Blockly;
}

exports = addBlocks;
