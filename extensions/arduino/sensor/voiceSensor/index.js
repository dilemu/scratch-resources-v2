const matrixScreen = formatMessage => ({
    name: "声音传感器",
    extensionId: 'DBitVoiceSensor',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitVoiceSensor.description',
        default: '测量环境中声音强度'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcn4hRsYgIeGVLVxm6ptzg67g',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
});

module.exports = matrixScreen;
