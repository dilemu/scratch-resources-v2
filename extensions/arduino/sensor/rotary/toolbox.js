/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITROTARY}" id="DBITROTARY" colour="#A66EFF" secondaryColour="#A66EFF">
    <block type="DBitRotary_boolean" id="DBitRotary_boolean">
        <field name="PIN">A0-A1</field>
    </block>
</category>`;
}

exports = addToolbox;
