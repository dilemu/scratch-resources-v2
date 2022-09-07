/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SERVO}" id="SERVO" colour="#00AAFF" secondaryColour="#00AAFF">
    <block type="DBitServo_drive" id="DBitServo_drive">
        <field name="PIN">2</field>
        <value name="SPEED">
            <shadow type="math_half_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
