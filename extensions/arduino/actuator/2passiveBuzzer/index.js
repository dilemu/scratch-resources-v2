const passiveBuzzer = formatMessage => ({
    name: formatMessage({
        id: 'DBitPassiveBuzzer.name',
        default: '无源蜂鸣器'
    }),
    extensionId: 'DBitPassiveBuzzer',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitPassiveBuzzer.description',
        default: '可通过音调和节拍控制无源声音输出；可通过频率和使劲按控制有源声音输出'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnIrDbtnK2p7hGzTswiDL5sg',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['motion'],
    
});

module.exports = passiveBuzzer;
