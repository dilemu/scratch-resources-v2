const matrixScreen = formatMessage => ({
    name: "乐高舵机（180°）",
    extensionId: 'DBitServo',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/matrixScreen.png`,
    description: formatMessage({
        id: 'DBitServo.description',
        default: '可以在0~180度间转动到指定角度位置'
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
