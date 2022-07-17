/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_PASSIVEBUZZER_CATEGORY}" id="PASSIVEBUZZER_CATEGORY" colour="#B943FF" secondaryColour="#9900FF">
    <block type="passiveBuzzer_toneSetPlay" id="passiveBuzzer_toneSetPlay">
        <field name="PIN">A0-A1</field>
        <field name="TONE">note_C3</field>
        <field name="BEAT">0.5</field>
    </block>
</category>`;
}

exports = addToolbox;
