const matrixScreen = formatMessage => ({
    name: "单按钮模块",
    extensionId: 'DBitSingleButton',
    
    supportDevice: ['arduinoNano'],
    
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitSingleButton.description',
        default: '按下输出高电平，松开输出低电平'
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
