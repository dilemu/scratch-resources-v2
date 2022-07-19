/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITLIGHTSENSOR}" id="DBITLIGHTSENSOR" colour="#BBBB00" secondaryColour="#888800">
    <block type="DBitLightSensor_read" id="DBitLightSensor_read">
        <field name="PIN">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
