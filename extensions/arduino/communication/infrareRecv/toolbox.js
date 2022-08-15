/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITINFRARERECV}" id="DBITINFRARERECV" colour="#5867D6" secondaryColour="#5867D6">
    <block type="DBitInfrareRecv_read">
        <field name="PIN">D2-D3</field>
    </block>
    <block type="DBitInfrareRecv_detect">
        <field name="PIN">D2-D3</field>
        <field name="KEY">1</field>
    </block>
</category>`;
}

exports = addToolbox;
