const matrixScreen = formatMessage => ({
    name: "全彩灯模块",
    extensionId: 'DBitRGBLED',
    
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitRGBLED.description',
        default: 'WS2812 RGB灯（1~10灯珠皆可）'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    
});

module.exports = matrixScreen;
