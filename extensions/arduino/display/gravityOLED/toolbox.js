/* eslint-disable func-style */
/* eslint-disable max-len */

/* eslint-disable require-jsdoc */
function addToolbox() {
  return `
<category name="%{BKY_GRAVITYOLED_CATEGORY}" id="GRAVITYOLED_CATEGORY" colour="#8c00ed" secondaryColour="#76ba6f">
    <block type="GRAVITYOLED_init" id="GRAVITYOLED_init">
       <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">0x34</field>
            </shadow>
        </value>
    </block>
    <block type="GRAVITYOLED_setContent" id="GRAVITYOLED_setContent">
        <value name="LINE">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="GRAVITYOLED_setPlace" id="GRAVITYOLED_setPlace">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">DBit+</field>
            </shadow>
        </value>
        <value name="XCOOR">
            <shadow type="math_uint7_number">
                <field name="NUM">42</field>
            </shadow>
        </value>
        <value name="YCOOR">
            <shadow type="math_uint6_number">
                <field name="NUM">16</field>
            </shadow>
        </value>
    </block>
     <block type="GRAVITYOLED_clear" id="GRAVITYOLED_clear">
       
    </block>
</category>`;
}

exports = addToolbox;
