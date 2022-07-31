const matrixScreen = formatMessage => ({
    name: "LED发光模块",
    extensionId: 'DBitLEDButton',
    
    supportDevice: ['arduinoNano'],
    
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
    tags: ['sensor'],
    
});

module.exports = matrixScreen;
