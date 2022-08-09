/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DBITSINGLEBUTTON}" id="DBITSINGLEBUTTON" colour="#A66EFF" secondaryColour="#A66EFF">
    <block type="DBitSingleButton_press" id="DBitSingleButton_press">
        <field name="PIN">A0-A1</field>
    </block>
</category>`;
}

exports = addToolbox;
