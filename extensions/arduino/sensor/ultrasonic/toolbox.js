/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ULTRASONIC_CATEGORY}" id="ULTRASONIC_CATEGORY" colour="#A66EFF" secondaryColour="#A66EFF" iconURI="">
    <block type="ultrasonic_readDistance" id="ultrasonic_readDistance">
        <field name="PIN">A0-A1</field>
    </block>
</category>    `;
}
exports = addToolbox;
