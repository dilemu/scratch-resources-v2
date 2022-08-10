const matrixScreen = formatMessage => ({
    name: "乐高兼容舵机（180°）",
    extensionId: 'DBitServo',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitServo.description',
        default: '可在0~180°间转动到指定角度位置'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcntT58gizMr2M30uoqnpwEsy',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['motion'],
    
});

module.exports = matrixScreen;
