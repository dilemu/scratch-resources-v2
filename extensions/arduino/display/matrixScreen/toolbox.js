/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MATRIX_CATEGORY}" id="MATRIX_CATEGORY" colour="#32C850" secondaryColour="#32C850">
    <block type="matrixScreen_showText" id="matrixScreen_showText">
        <field name="PIN">A0-A1</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">DBit+</field>
            </shadow>
        </value>
    </block>
    <block type="matrixScreen_clear" id="matrixScreen_clear">
        <field name="PIN">A0-A1</field>
    </block>
    <block type="matrixScreen_rotate" id="matrixScreen_rotate">
        <field name="PIN">A0-A1</field>
        <field name="DEGREE">0</field>
    </block>
    <block type="matrixScreen_setPixel" id="matrixScreen_setPixel">
        <field name="PIN">A0-A1</field>
        <field name="X">1</field>
        <field name="Y">1</field>
        <field name="STATE">1</field>
    </block>
</category>`;
}

exports = addToolbox;
