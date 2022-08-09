/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITLIGHTSENSOR}" id="DBITLIGHTSENSOR" colour="#A66EFF" secondaryColour="#A66EFF">
    <block type="DBitLightSensor_read" id="DBitLightSensor_read">
        <field name="PIN">A0-A1</field>
    </block>
</category>`;
}

exports = addToolbox;
