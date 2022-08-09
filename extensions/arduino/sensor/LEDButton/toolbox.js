/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITLEDBUTTON}" id="DBITLEDBUTTON" colour="#A66EFF" secondaryColour="#A66EFF">
    <block type="DBitLEDButton_light" id="DBitLEDButton_light">
        <field name="LEVEL">HIGH</field>
        <field name="PIN">A0-A1</field>
    </block>
    <block type="DBitLEDButton_button" id="DBitLEDButton_button">
        <field name="PIN">A0-A1</field>
    </block>
</category>`;
}

exports = addToolbox;
