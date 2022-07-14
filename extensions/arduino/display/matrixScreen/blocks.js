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
    const coordinates = [
        ["1", 1],
        ["2", 2],
        ["3", 3],
        ["4", 4],
        ["5", 5],
        ["6", 6],
        ["7", 7],
        ["8", 8]
    ]

    Blockly.Blocks.matrixScreen_showText = {
        init: function () {
            this.jsonInit({
                message0: "设置 点阵屏 管脚 %1 显示 %2",
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
            })
        }
    };

    Blockly.Blocks.matrixScreen_clear = {
        init: function () {
            this.jsonInit({
                message0: "设置 点阵屏 管脚 %1 清屏",
                args0: [
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
    };

    Blockly.Blocks.matrixScreen_rotate = {
        init: function () {
            this.jsonInit({
                message0: "设置 点阵屏 管脚 %1 屏幕旋转 %2",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "input_value",
                        name: "DEGREE"
                    }
                ],
                colour: colour,
                extensions: ['shape_statement']
            })
        }
    };

    Blockly.Blocks.matrixScreen_setPixel = {
        init: function () {
            this.jsonInit({
                message0: "设置 点阵屏 管脚 %1 X: %2 Y: %3 单点设为 %4",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "field_dropdown",
                        name: "X",
                        options: coordinates
                    },
                    {
                        type: "field_dropdown",
                        name: "Y",
                        options: coordinates
                    },
                    {
                        type: "field_dropdown",
                        name: "STATE",
                        options: [
                            ["亮", 1],
                            ["灭", 0]
                        ]
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
