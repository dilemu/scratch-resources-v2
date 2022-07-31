const ironKit = () => ({
    name: 'Iron Kit',
    extensionId: 'ironKit',
    
    supportDevice: ['ironKit_arduinoUno'],
    author: 'ArthurZheng',
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.sxyiqichuang.com'
});

module.exports = ironKit;
