/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITLEDBUTTON}" id="DBITLEDBUTTON" colour="#BBBB00" secondaryColour="#888800">
    <block type="DBitLEDButton_light" id="DBitLEDButton_light">
        <field name="LEVEL">HIGH</field>
        <field name="PIN">A0-A1</field>
    </block>
</category>`;
}

exports = addToolbox;
