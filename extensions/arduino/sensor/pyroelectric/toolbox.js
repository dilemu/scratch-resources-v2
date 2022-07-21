/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITPYROELECTRIC}" id="DBITPYROELECTRIC" colour="#BBBB00" secondaryColour="#888800">
    <block type="DBitPyroelectric_boolean" id="DBitPyroelectric_boolean">
        <field name="PIN">A0-A1</field>
    </block>
</category>`;
}

exports = addToolbox;
