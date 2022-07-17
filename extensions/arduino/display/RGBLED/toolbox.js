/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBitRGBLED_CATEGORY}" id="DBitRGBLED_CATEGORY" colour="#BBBB00" secondaryColour="#888800">
    <block type="DBitRGBLED_display" id="DBitRGBLED_display">
        <field name="PIN">A0-A1</field>
        <field name="PIN">0</field>
        <value name="INDEX">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="GREEN">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="BLUE">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
