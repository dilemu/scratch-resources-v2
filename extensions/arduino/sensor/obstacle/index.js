const matrixScreen = formatMessage => ({
    name: "避障传感器",
    extensionId: 'DBitObstacle',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/matrixScreen.png`,
    description: formatMessage({
        id: 'DBitObstacle.description',
        default: '按下输出高电平，松开输出低电平，有抖动'
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
