/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MOTOR}" id="MOTOR" colour="#BBBB00" secondaryColour="#888800">
    <block type="DBitMotor_drive" id="DBitMotor_drive">
        <field name="PIN">5-6</field>
        <value name="SPEED">
            <shadow type="math_uint8_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <field name="DIRECTION">5</field>
    </block>
</category>`;
}

exports = addToolbox;
