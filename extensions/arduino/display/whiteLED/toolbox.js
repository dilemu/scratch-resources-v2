/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITWHITELED}" id="DBITWHITELED" colour="#32C850" secondaryColour="#32C850">
    <block type="DBitWhiteLED_light" id="DBitWhiteLED_light">
        <field name="LEVEL">HIGH</field>
        <field name="PIN">A0-A1</field>
    </block>
</category>`;
}

exports = addToolbox;
