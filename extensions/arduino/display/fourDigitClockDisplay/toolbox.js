/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_FOURDIGITCLOCKDISPLAY_CATEGORY}" id="FOURDIGITCLOCKDISPLAY_CATEGORY" colour="#32C850" secondaryColour="#32C850">
    <block type="DBitFourDigitClockDisplay_showText" id="DBitFourDigitClockDisplay_showText">
        <field name="PIN">A0-A1</field>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">2022</field>
            </shadow>
        </value>
    </block>
    <block type="DBitFourDigitClockDisplay_showDot" id="DBitFourDigitClockDisplay_showDot">
        <field name="PIN">A0-A1</field>
        <field name="DOT_INDEX">1</field>
        <field name="DOT_STATE">true</field>
    </block>
    <block type="DBitFourDigitClockDisplay_control" id="DBitFourDigitClockDisplay_control">
        <field name="PIN">A0-A1</field>
        <field name="CONTROL">displayOn</field>
    </block>
</category>`;
}

exports = addToolbox;
