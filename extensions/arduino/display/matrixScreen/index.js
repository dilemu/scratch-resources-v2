const matrixScreen = formatMessage => ({
    name: "点阵屏",
    extensionId: 'DBitMatrixScreen',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/matrixScreen.png`,
    description: formatMessage({
        id: 'DBitMatrixScreen.description',
        default: '8x8点阵屏，可以用来显示点阵图案'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    helpLink: 'https://delightmom.com'
});

module.exports = matrixScreen;
