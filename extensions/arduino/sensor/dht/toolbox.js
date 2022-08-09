/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DHT_CATEGORY}" id="DHT_CATEGORY" colour="#A66EFF" secondaryColour="#A66EFF">
    <block type="dht_read" id="dht_read">
        <field name="PIN">A0-A1</field>
        <field name="TYPE">TEMPERATURE</field>
    </block>
</category>`;
}

exports = addToolbox;
