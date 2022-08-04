/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#00AAFF';
    const secondaryColour = '#888800';
    const digitalPins = [
        ["D5-D6", "5-6"],
        ["D10-D11", "10-11"],
    ]

    const direction = [
        ["正转", 0],
        ["反转", 1],
    ]

    Blockly.Blocks.DBitMotor_drive = {
        init: function () {
            this.jsonInit({
                message0: "电机 %1 以 %2 的速度 %3",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "input_value",
                        name: "SPEED"
                    },
                    {
                        type: "field_dropdown",
                        name: "DIRECTION",
                        options: direction
                    }
                ],
                colour: colour,
                extensions: ['shape_statement'],
            })
        }
    }

    return Blockly;
}

exports = addBlocks;
