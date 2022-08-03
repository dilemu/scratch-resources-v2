/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITREDANDGREENLED}" id="DBITREDANDGREENLED" colour="#BBBB00" secondaryColour="#888800">
    <block type="DBitRedAndFGreenLED_light" id="DBitRedAndFGreenLED_light">
        <field name="PIN">A0-A1</field>
        <field name="STATUS">1</field>
    </block>
</category>`;
}

exports = addToolbox;
