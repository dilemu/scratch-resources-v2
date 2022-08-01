/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITWHITELED}" id="DBITWHITELED" colour="#BBBB00" secondaryColour="#888800">
    <block type="DBitWhiteLED_light" id="DBitWhiteLED_light">
        <field name="LEVEL">HIGH</field>
        <field name="PIN">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
