/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITRGBLED_CATEGORY}" id="DBITRGBLED_CATEGORY" colour="#32C850" secondaryColour="#32C850">
    <block type="DBitRGBLED_display" id="DBitRGBLED_display">
        <field name="PIN">A0-A1</field>
        <value name="INDEX">
            <shadow type="sensing_keyoptions"/>
        </value>
        <value name="RED">
            <shadow type="math_uint8_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="GREEN">
            <shadow type="math_uint8_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="BLUE">
            <shadow type="math_uint8_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
    <block type="DBitRGBLED_setBrightness" id="DBitRGBLED_setBrightness">
        <field name="PIN">A0-A1</field>
        <value name="BRIGHT">
            <shadow type="math_uint8_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
