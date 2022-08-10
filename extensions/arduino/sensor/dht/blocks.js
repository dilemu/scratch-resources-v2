/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    const color = '#A66EFF';
    const secondaryColour = '#00BFFF';

    const digitalPins = [
        ["A0-A1", "A0-A1"],
        ["A2-A3", "A2-A3"],
        ["A4-A5", "A4-A5"],
        
        ["D2-D3", "2-3"],
        ["D5-D6", "5-6"],
        ["D4-D7", "4-7"],
["D8-D9", "8-9"],
        ["D10-D11", "10-11"],
        ["D12-D13", "12-13"]
    ]
    const typeList = [
        ["温度值", "TEMPERATURE"],
        ["湿度值", "HUMIDITY"]
    ]

    Blockly.Blocks.dht_read = {
        init: function () {
            this.jsonInit({
                message0: "读取 %1 的 %2",
                args0: [
                    {
                        type: "field_dropdown",
                        name: "PIN",
                        options: digitalPins
                    },
                    {
                        type: "field_dropdown",
                        name: "TYPE",
                        options: typeList
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            })
        }
    }

    // Blockly.Blocks.dht_init = {
    //     init: function () {
    //         this.jsonInit({
    //             message0: Blockly.Msg.DHT_INIT,
    //             args0: [
    //                 {
    //                     type: 'input_value',
    //                     name: 'NO'
    //                 },
    //                 {
    //                     type: 'field_dropdown',
    //                     name: 'PIN',
    //                     options: digitalPins
    //                 },
    //                 {
    //                     type: 'field_dropdown',
    //                     name: 'MODEL',
    //                     options: [
    //                         ['dht11', '11'],
    //                         ['dht21', '21'],
    //                         ['dht22', '22']]
    //                 }
    //             ],
    //             colour: color,
    //             secondaryColour: secondaryColour,
    //             extensions: ['shape_statement']
    //         });
    //     }
    // };

    // Blockly.Blocks.dht_readHumidity = {
    //     init: function () {
    //         this.jsonInit({
    //             message0: Blockly.Msg.DHT_READ_HUMIDITY,
    //             args0: [
    //                 {
    //                     type: 'input_value',
    //                     name: 'NO'
    //                 }
    //             ],
    //             colour: color,
    //             secondaryColour: secondaryColour,
    //             extensions: ['output_number']
    //         });
    //     }
    // };


    // Blockly.Blocks.dht_readTemperature = {
    //     init: function () {
    //         this.jsonInit({
    //             message0: Blockly.Msg.DHT_READ_TEMPERATURE,
    //             args0: [
    //                 {
    //                     type: 'input_value',
    //                     name: 'NO'
    //                 },
    //                 {
    //                     type: 'field_dropdown',
    //                     name: 'UNIT',
    //                     options: [
    //                         ['℃', 'false'],
    //                         ['℉', 'true']]
    //                 }
    //             ],
    //             colour: color,
    //             secondaryColour: secondaryColour,
    //             extensions: ['output_number']
    //         });
    //     }
    // };

    return Blockly;
}

exports = addBlocks;
