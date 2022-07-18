/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.DBitFanControl_start = function (block) {
        const pinList = block.getFieldValue('PIN');
        const [a, b] = pinList.split('-');
        const deviceName = `FAN_${a}`;
        const direction = block.getFieldValue('DIRECTION');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_[deviceName] = `void FanControl(uint8_t pinA,uint8_t pinB,uint8_t dir,uint8_t Speed) {
	if(dir==2) {
		pinA=0;
		analogWrite(pinB,Speed);
	}
	else if(dir==1) {
		pinB=0;
		analogWrite(pinA,Speed);
	}
}`;
        const code = `FanControl(${a}, ${b}, ${direction}, ${speed});\n`;
        return code;
    }
    return Blockly;
}

exports = addGenerator;
