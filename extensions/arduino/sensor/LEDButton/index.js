const matrixScreen = formatMessage => ({
    name: "指示灯按钮",
    extensionId: 'DBitLEDButton',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitLEDButton.description',
        default: '按钮触发，LED高电平点亮'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor', 'display'],
    
});

module.exports = matrixScreen;
