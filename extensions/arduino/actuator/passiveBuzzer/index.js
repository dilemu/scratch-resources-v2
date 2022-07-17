const passiveBuzzer = formatMessage => ({
    name: formatMessage({
        id: 'DBitPassiveBuzzer.name',
        default: '有源蜂鸣器'
    }),
    extensionId: 'DBitPassiveBuzzer',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/passiveBuzzer.png`,
    description: formatMessage({
        id: 'DBitPassiveBuzzer.description',
        default: '播放不同的音调和节拍'
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

module.exports = passiveBuzzer;
