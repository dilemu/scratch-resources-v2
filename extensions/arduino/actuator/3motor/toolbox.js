/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MOTOR}" id="MOTOR" colour="#00AAFF" secondaryColour="#00AAFF">
    <block type="DBitMotor_drive" id="DBitMotor_drive">
        <field name="PIN">5-6</field>
        <field name="DIRECTION">0</field>
        <value name="SPEED">
            <shadow type="math_uint8_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
