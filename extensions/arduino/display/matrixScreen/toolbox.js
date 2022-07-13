/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MATRIX_CATEGORY}" id="MATRIX_CATEGORY" colour="#BBBB00" secondaryColour="#888800">
    <block type="matrixScreen_showText" id="matrixScreen_showText">
        <field name="PIN">A0</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">DBit+</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
