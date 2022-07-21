/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITOBSTACLE}" id="DBITOBSTACLE" colour="#BBBB00" secondaryColour="#888800">
    <block type="DBitObstacle_boolean" id="DBitObstacle_boolean">
        <field name="PIN">A0-A1</field>
    </block>
</category>`;
}

exports = addToolbox;
