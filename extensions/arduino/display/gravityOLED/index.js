const matrixScreen = formatMessage => ({
    name: "OLED 12864 屏",
    extensionId: 'GRAVITYOLED',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/img.png`,
    description: formatMessage({
        id: 'GRAVITYOLED.description',
        default: 'OLED 12864 屏'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnj9y71Xex3uX4q2K4vpwYWg', //todo 修改链接
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],

});

module.exports = matrixScreen;
