/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITRAINDROP}" id="DBITRAINDROP" colour="#BBBB00" secondaryColour="#888800">
    <block type="DBitRaindrop_value" id="DBitRaindrop_value">
        <field name="PIN">A0-A1</field>
    </block>
</category>`;
}

exports = addToolbox;
