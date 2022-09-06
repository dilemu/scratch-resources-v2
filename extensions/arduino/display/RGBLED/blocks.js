/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#32C850';
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
    const LEDIndex = [
        ["全部", "0"],
        ["第一个", "1"],
        ["第二个", "2"],
        ["第三个", "3"],
        ["第四个", "4"],
    ]

    Blockly.Blocks.DBitRGBLED_display = {
        init: function () {
            this.jsonInit({
                message0: "设置 %1的 全彩灯 %2 灯 颜色为 R %3 G %4 B %5",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "input_value",
                        name: "INDEX"
                    },
                    {
                        type: "input_value",
                        name: "RED"
                    },
                    {
                        type: "input_value",
                        name: "GREEN"
                    },
                    {
                        type: "input_value",
                        name: "BLUE"
                    }
                ],
                colour: colour,
                extensions: ['shape_statement']
            })
        }
    };

    Blockly.Blocks.DBitRGBLED_setBrightness = {
        init: function() {
            this.jsonInit({
                message0: '设置 %1的全彩灯亮度为 %2',
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "input_value",
                        name: "BRIGHT"
                    }
                ],
                colour: colour,
                extensions: ['shape_statement']
            })
        }
    }

    Blockly.Blocks.sensing_keyoptions = {
        init: function() {
            this.jsonInit({
                "message0": "%1",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "INDEX",
                        "options": LEDIndex
                    }
                ],
                "colour": colour,
                "extensions": ["output_string"]
            })
        }
    }

    return Blockly;
}

exports = addBlocks;
