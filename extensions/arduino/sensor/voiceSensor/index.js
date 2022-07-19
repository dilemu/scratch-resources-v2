const matrixScreen = formatMessage => ({
    name: "声音传感器",
    extensionId: 'DBitVoiceSensor',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/matrixScreen.png`,
    description: formatMessage({
        id: 'DBitVoiceSensor.description',
        default: '测量环境中的声音强度'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    helpLink: 'https://delightmom.com'
});

module.exports = matrixScreen;
