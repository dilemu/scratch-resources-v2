/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITVOICESENSOR}" id="BKY_DBITVOICESENSOR" colour="#A66EFF" secondaryColour="#A66EFF">
    <block type="DBitVoiceSensor_read" id="DBitVoiceSensor_read">
        <field name="PIN">A0-A1</field>
    </block>
</category>`;
}

exports = addToolbox;
