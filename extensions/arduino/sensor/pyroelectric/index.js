const matrixScreen = formatMessage => ({
    name: "热释电运动传感器",
    extensionId: 'DBitPyroelectric',
    
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
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
    
});

module.exports = matrixScreen;
