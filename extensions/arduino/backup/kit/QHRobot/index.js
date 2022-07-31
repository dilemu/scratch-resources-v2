const QDPRobot = () => ({
    name: 'QDP',
    extensionId: 'QDPRobot',
    
    supportDevice: ['QDPRobot_arduinoUnoUltra'],
    author: 'QDProbot',
    hide: true,
    blocks: `blocks.js`,
    generator: `generator.js`,
    toolbox: `toolbox.js`,
    msg: `msg.js`,
    library: 'lib',
    helpLink: 'https://qdprobot.taobao.com'
});

module.exports = QDPRobot;
