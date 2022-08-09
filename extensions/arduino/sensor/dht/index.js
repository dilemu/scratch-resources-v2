const dht = formatMessage => ({
    name: formatMessage({
        id: 'dht.name',
        default: 'DHT Sensor'
    }),
    extensionId: 'dht',
    insetIconURL: `asset/small.png`,
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnVCDjeL2JI908g1kR6bYO7e',
    iconURL: `asset/large.png`,
    description: "可测量环境温度、湿度",
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    
});

module.exports = dht;
