/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#8c00ed';
    const secondaryColour = '#76ba6f';
    const blockIconURI = 'data:image/png;base64,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';


    Blockly.Blocks.GRAVITYOLED_init = {
        init: function () {
            this.jsonInit({
                message0: "设置 OLED 128*64初始化IIC地址 %1",

                args0: [
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

    Blockly.Blocks.GRAVITYOLED_setContent = {
        init: function() {
            this.jsonInit({
                message0: '设置 OLED 128*64 第 %1 行显示 %2',
                args0: [
                    {
                        type: "input_value",
                        name: "LINE"
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
    }

    Blockly.Blocks.GRAVITYOLED_setPlace = {
        init: function() {
            this.jsonInit({
                "message0": "OLED 屏幕显示文字 %1 在坐标 X：%2 Y：%3 显示",
                "args0": [
                    {
                        type: "input_value",
                        name: "TEXT"
                    },
                    {
                        type: "input_value",
                        name: "XCOOR"
                    },
                    {
                        type: "input_value",
                        name: "YCOOR"
                    }
                ],
                "colour": colour,
                "extensions": ["shape_statement"]
            })
        }
    }
    Blockly.Blocks.GRAVITYOLED_clear = {
        init: function() {
            this.jsonInit({
                "message0": "OLED 128*64 清屏",
                "colour": colour,
                "extensions": ["shape_statement"]
            })
        }
    }

    return Blockly;
}

exports = addBlocks;
