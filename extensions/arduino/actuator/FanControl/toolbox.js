/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{轴流式风扇}" id="DBitFanControl_CATEGORY" colour="#BBBB00" secondaryColour="#888800">
    <block type="DBitFanControl_start" id="DBitFanControl_start">
        <field name="PIN">5-6</field>
        <field name="DIRECTION">1</field>
        <value name="SPEED">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
