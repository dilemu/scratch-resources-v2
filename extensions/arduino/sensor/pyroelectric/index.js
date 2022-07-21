const matrixScreen = formatMessage => ({
    name: "热释电运动传感器",
    extensionId: 'DBitPyroelectric',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/matrixScreen.png`,
    description: formatMessage({
        id: 'DBitPyroelectric.description',
        default: '检测运动的人、动物发出的热红外线'
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
