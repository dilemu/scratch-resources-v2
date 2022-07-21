const matrixScreen = formatMessage => ({
    name: "电机驱动模块",
    extensionId: 'DBitMotor',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/matrixScreen.png`,
    description: formatMessage({
        id: 'DBitMotor.description',
        default: '驱动电机以特定速度和方向旋转'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['motion'],
    helpLink: 'https://delightmom.com'
});

module.exports = matrixScreen;
