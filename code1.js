gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDCampfire2Objects1_1final = [];

gdjs.MainCode.GDCampfire3Objects1_1final = [];

gdjs.MainCode.GDCampfireObjects1_1final = [];

gdjs.MainCode.GDCampfireObjects1= [];
gdjs.MainCode.GDCampfireObjects2= [];
gdjs.MainCode.GDCampfireObjects3= [];
gdjs.MainCode.GDBalanceObjects1= [];
gdjs.MainCode.GDBalanceObjects2= [];
gdjs.MainCode.GDBalanceObjects3= [];
gdjs.MainCode.GDInSecondObjects1= [];
gdjs.MainCode.GDInSecondObjects2= [];
gdjs.MainCode.GDInSecondObjects3= [];
gdjs.MainCode.GDInSecondWorkObjects1= [];
gdjs.MainCode.GDInSecondWorkObjects2= [];
gdjs.MainCode.GDInSecondWorkObjects3= [];
gdjs.MainCode.GDClickAnimObjects1= [];
gdjs.MainCode.GDClickAnimObjects2= [];
gdjs.MainCode.GDClickAnimObjects3= [];
gdjs.MainCode.GDNewSpriteObjects1= [];
gdjs.MainCode.GDNewSpriteObjects2= [];
gdjs.MainCode.GDNewSpriteObjects3= [];
gdjs.MainCode.GDInClickObjects1= [];
gdjs.MainCode.GDInClickObjects2= [];
gdjs.MainCode.GDInClickObjects3= [];
gdjs.MainCode.GDNickVVodObjects1= [];
gdjs.MainCode.GDNickVVodObjects2= [];
gdjs.MainCode.GDNickVVodObjects3= [];
gdjs.MainCode.GDOnScreenControlsButtonObjects1= [];
gdjs.MainCode.GDOnScreenControlsButtonObjects2= [];
gdjs.MainCode.GDOnScreenControlsButtonObjects3= [];
gdjs.MainCode.GDMetalRedBarObjects1= [];
gdjs.MainCode.GDMetalRedBarObjects2= [];
gdjs.MainCode.GDMetalRedBarObjects3= [];
gdjs.MainCode.GDleveltextObjects1= [];
gdjs.MainCode.GDleveltextObjects2= [];
gdjs.MainCode.GDleveltextObjects3= [];
gdjs.MainCode.GDClickAnimTextObjects1= [];
gdjs.MainCode.GDClickAnimTextObjects2= [];
gdjs.MainCode.GDClickAnimTextObjects3= [];
gdjs.MainCode.GDleveltext2Objects1= [];
gdjs.MainCode.GDleveltext2Objects2= [];
gdjs.MainCode.GDleveltext2Objects3= [];
gdjs.MainCode.GDExplosion1Objects1= [];
gdjs.MainCode.GDExplosion1Objects2= [];
gdjs.MainCode.GDExplosion1Objects3= [];
gdjs.MainCode.GDNewSprite2Objects1= [];
gdjs.MainCode.GDNewSprite2Objects2= [];
gdjs.MainCode.GDNewSprite2Objects3= [];
gdjs.MainCode.GDRedFlameObjects1= [];
gdjs.MainCode.GDRedFlameObjects2= [];
gdjs.MainCode.GDRedFlameObjects3= [];
gdjs.MainCode.GDCampfire2Objects1= [];
gdjs.MainCode.GDCampfire2Objects2= [];
gdjs.MainCode.GDCampfire2Objects3= [];
gdjs.MainCode.GDCampfire3Objects1= [];
gdjs.MainCode.GDCampfire3Objects2= [];
gdjs.MainCode.GDCampfire3Objects3= [];
gdjs.MainCode.GDDocksObjects1= [];
gdjs.MainCode.GDDocksObjects2= [];
gdjs.MainCode.GDDocksObjects3= [];
gdjs.MainCode.GDAboutUsObjects1= [];
gdjs.MainCode.GDAboutUsObjects2= [];
gdjs.MainCode.GDAboutUsObjects3= [];
gdjs.MainCode.GDMainObjects1= [];
gdjs.MainCode.GDMainObjects2= [];
gdjs.MainCode.GDMainObjects3= [];
gdjs.MainCode.GDShopObjects1= [];
gdjs.MainCode.GDShopObjects2= [];
gdjs.MainCode.GDShopObjects3= [];
gdjs.MainCode.GDConfigObjects1= [];
gdjs.MainCode.GDConfigObjects2= [];
gdjs.MainCode.GDConfigObjects3= [];
gdjs.MainCode.GDLeadersObjects1= [];
gdjs.MainCode.GDLeadersObjects2= [];
gdjs.MainCode.GDLeadersObjects3= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDClickAnimObjects1Objects = Hashtable.newFrom({"ClickAnim": gdjs.MainCode.GDClickAnimObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.MainCode.GDExplosion1Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.MainCode.GDExplosion1Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.MainCode.GDExplosion1Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.MainCode.GDExplosion1Objects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MainCode.GDNewSprite2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDNewSprite2Objects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDNewSprite2Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDNewSprite2Objects2[k] = gdjs.MainCode.GDNewSprite2Objects2[i];
        ++k;
    }
}
gdjs.MainCode.GDNewSprite2Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shop"), gdjs.MainCode.GDShopObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDShopObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDShopObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDShopObjects2[k] = gdjs.MainCode.GDShopObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDShopObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Work", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Config"), gdjs.MainCode.GDConfigObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDConfigObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDConfigObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDConfigObjects2[k] = gdjs.MainCode.GDConfigObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDConfigObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaders"), gdjs.MainCode.GDLeadersObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDLeadersObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDLeadersObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDLeadersObjects1[k] = gdjs.MainCode.GDLeadersObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDLeadersObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LB", false);
}}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Go") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15193236);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Go");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Go");
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "moneyg", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) != 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15194324);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Go");
}}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMetalRedBarObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMetalRedBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 500000 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMetalRedBarObjects2[k] = gdjs.MainCode.GDMetalRedBarObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMetalRedBarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMetalRedBarObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(7);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "level", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMetalRedBarObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMetalRedBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 125000 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMetalRedBarObjects2[k] = gdjs.MainCode.GDMetalRedBarObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMetalRedBarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 5;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMetalRedBarObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(6);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "level", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(500000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMetalRedBarObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMetalRedBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 75000 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMetalRedBarObjects2[k] = gdjs.MainCode.GDMetalRedBarObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMetalRedBarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMetalRedBarObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "level", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(125000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMetalRedBarObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMetalRedBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 45000 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMetalRedBarObjects2[k] = gdjs.MainCode.GDMetalRedBarObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMetalRedBarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMetalRedBarObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(4);
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(75000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "level", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMetalRedBarObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMetalRedBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 25000 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMetalRedBarObjects2[k] = gdjs.MainCode.GDMetalRedBarObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMetalRedBarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMetalRedBarObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(45000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "level", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMetalRedBarObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMetalRedBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 5000 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMetalRedBarObjects2[k] = gdjs.MainCode.GDMetalRedBarObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMetalRedBarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMetalRedBarObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(25000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "level", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMetalRedBarObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDMetalRedBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 1000 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMetalRedBarObjects2[k] = gdjs.MainCode.GDMetalRedBarObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDMetalRedBarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMetalRedBarObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(5000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "level", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("leveltext2"), gdjs.MainCode.GDleveltext2Objects2);
{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].getBehavior("Text").setText("Master");
}
}{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].setColor("255;215;239");
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "level", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("leveltext2"), gdjs.MainCode.GDleveltext2Objects2);
{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].getBehavior("Text").setText("Legend");
}
}{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].setColor("243;5;146");
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "level", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(500000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("leveltext2"), gdjs.MainCode.GDleveltext2Objects2);
{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].getBehavior("Text").setText("Emerald");
}
}{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].setColor("39;253;133");
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "level", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(125000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("leveltext2"), gdjs.MainCode.GDleveltext2Objects2);
{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].getBehavior("Text").setText("Diamond");
}
}{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].setColor("71;174;247");
}
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(75000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("leveltext2"), gdjs.MainCode.GDleveltext2Objects2);
{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].getBehavior("Text").setText("Platinum");
}
}{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].setColor("153;117;206");
}
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(45000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("leveltext2"), gdjs.MainCode.GDleveltext2Objects2);
{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].getBehavior("Text").setText("Gold");
}
}{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].setColor("223;211;29");
}
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(25000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("leveltext2"), gdjs.MainCode.GDleveltext2Objects2);
{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].getBehavior("Text").setText("Silver");
}
}{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects2[i].setColor("156;156;156");
}
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects2[i].SetMaxValue(5000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("leveltext2"), gdjs.MainCode.GDleveltext2Objects1);
{for(var i = 0, len = gdjs.MainCode.GDleveltext2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDleveltext2Objects1[i].getBehavior("Text").setText("Bronze");
}
}}

}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "moneyg", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "clicker", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "doxods", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "level", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "WorkLV", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}}

}


{

gdjs.MainCode.GDCampfireObjects1.length = 0;

gdjs.MainCode.GDCampfire2Objects1.length = 0;

gdjs.MainCode.GDCampfire3Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MainCode.GDCampfireObjects1_1final.length = 0;
gdjs.MainCode.GDCampfire2Objects1_1final.length = 0;
gdjs.MainCode.GDCampfire3Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Campfire"), gdjs.MainCode.GDCampfireObjects2);
for (var i = 0, k = 0, l = gdjs.MainCode.GDCampfireObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDCampfireObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MainCode.GDCampfireObjects2[k] = gdjs.MainCode.GDCampfireObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDCampfireObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainCode.GDCampfireObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainCode.GDCampfireObjects1_1final.indexOf(gdjs.MainCode.GDCampfireObjects2[j]) === -1 )
            gdjs.MainCode.GDCampfireObjects1_1final.push(gdjs.MainCode.GDCampfireObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Campfire2"), gdjs.MainCode.GDCampfire2Objects2);
for (var i = 0, k = 0, l = gdjs.MainCode.GDCampfire2Objects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDCampfire2Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MainCode.GDCampfire2Objects2[k] = gdjs.MainCode.GDCampfire2Objects2[i];
        ++k;
    }
}
gdjs.MainCode.GDCampfire2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainCode.GDCampfire2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.MainCode.GDCampfire2Objects1_1final.indexOf(gdjs.MainCode.GDCampfire2Objects2[j]) === -1 )
            gdjs.MainCode.GDCampfire2Objects1_1final.push(gdjs.MainCode.GDCampfire2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Campfire3"), gdjs.MainCode.GDCampfire3Objects2);
for (var i = 0, k = 0, l = gdjs.MainCode.GDCampfire3Objects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDCampfire3Objects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MainCode.GDCampfire3Objects2[k] = gdjs.MainCode.GDCampfire3Objects2[i];
        ++k;
    }
}
gdjs.MainCode.GDCampfire3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainCode.GDCampfire3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.MainCode.GDCampfire3Objects1_1final.indexOf(gdjs.MainCode.GDCampfire3Objects2[j]) === -1 )
            gdjs.MainCode.GDCampfire3Objects1_1final.push(gdjs.MainCode.GDCampfire3Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainCode.GDCampfireObjects1_1final, gdjs.MainCode.GDCampfireObjects1);
gdjs.copyArray(gdjs.MainCode.GDCampfire2Objects1_1final, gdjs.MainCode.GDCampfire2Objects1);
gdjs.copyArray(gdjs.MainCode.GDCampfire3Objects1_1final, gdjs.MainCode.GDCampfire3Objects1);
}
}
if (isConditionTrue_0) {
gdjs.MainCode.GDClickAnimObjects1.length = 0;

gdjs.MainCode.GDExplosion1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDClickAnimObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "moneyg", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExplosion1Objects1Objects, 573, 1029, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExplosion1Objects1Objects, 129, 452, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExplosion1Objects1Objects, 595, 452, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExplosion1Objects1Objects, 129, 1024, "");
}}

}


{


gdjs.MainCode.eventsList0(runtimeScene);
}


{


gdjs.MainCode.eventsList1(runtimeScene);
}


{


gdjs.MainCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Balance"), gdjs.MainCode.GDBalanceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Campfire2"), gdjs.MainCode.GDCampfire2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Campfire3"), gdjs.MainCode.GDCampfire3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ClickAnim"), gdjs.MainCode.GDClickAnimObjects1);
gdjs.copyArray(runtimeScene.getObjects("ClickAnimText"), gdjs.MainCode.GDClickAnimTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("InSecondWork"), gdjs.MainCode.GDInSecondWorkObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.MainCode.GDMetalRedBarObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBalanceObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBalanceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.MainCode.GDBalanceObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBalanceObjects1[i].setGradient("LINEAR_VERTICAL", "255;0;0", "255;0;4", "255;255;255", "21;0;255");
}
}{for(var i = 0, len = gdjs.MainCode.GDClickAnimObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDClickAnimObjects1[i].getBehavior("Text").setText("+" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.MainCode.GDClickAnimObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDClickAnimObjects1[i].addForce(0, -(200), 1);
}
}{for(var i = 0, len = gdjs.MainCode.GDInSecondWorkObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDInSecondWorkObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.MainCode.GDMetalRedBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMetalRedBarObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDClickAnimTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDClickAnimTextObjects1[i].getBehavior("Text").setText("+" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.MainCode.GDCampfire2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDCampfire2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDCampfire3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDCampfire3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Config"), gdjs.MainCode.GDConfigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDConfigObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDConfigObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDConfigObjects1[k] = gdjs.MainCode.GDConfigObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDConfigObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MainCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDNewSpriteObjects1[k] = gdjs.MainCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Casino", false);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDCampfireObjects1.length = 0;
gdjs.MainCode.GDCampfireObjects2.length = 0;
gdjs.MainCode.GDCampfireObjects3.length = 0;
gdjs.MainCode.GDBalanceObjects1.length = 0;
gdjs.MainCode.GDBalanceObjects2.length = 0;
gdjs.MainCode.GDBalanceObjects3.length = 0;
gdjs.MainCode.GDInSecondObjects1.length = 0;
gdjs.MainCode.GDInSecondObjects2.length = 0;
gdjs.MainCode.GDInSecondObjects3.length = 0;
gdjs.MainCode.GDInSecondWorkObjects1.length = 0;
gdjs.MainCode.GDInSecondWorkObjects2.length = 0;
gdjs.MainCode.GDInSecondWorkObjects3.length = 0;
gdjs.MainCode.GDClickAnimObjects1.length = 0;
gdjs.MainCode.GDClickAnimObjects2.length = 0;
gdjs.MainCode.GDClickAnimObjects3.length = 0;
gdjs.MainCode.GDNewSpriteObjects1.length = 0;
gdjs.MainCode.GDNewSpriteObjects2.length = 0;
gdjs.MainCode.GDNewSpriteObjects3.length = 0;
gdjs.MainCode.GDInClickObjects1.length = 0;
gdjs.MainCode.GDInClickObjects2.length = 0;
gdjs.MainCode.GDInClickObjects3.length = 0;
gdjs.MainCode.GDNickVVodObjects1.length = 0;
gdjs.MainCode.GDNickVVodObjects2.length = 0;
gdjs.MainCode.GDNickVVodObjects3.length = 0;
gdjs.MainCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.MainCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.MainCode.GDOnScreenControlsButtonObjects3.length = 0;
gdjs.MainCode.GDMetalRedBarObjects1.length = 0;
gdjs.MainCode.GDMetalRedBarObjects2.length = 0;
gdjs.MainCode.GDMetalRedBarObjects3.length = 0;
gdjs.MainCode.GDleveltextObjects1.length = 0;
gdjs.MainCode.GDleveltextObjects2.length = 0;
gdjs.MainCode.GDleveltextObjects3.length = 0;
gdjs.MainCode.GDClickAnimTextObjects1.length = 0;
gdjs.MainCode.GDClickAnimTextObjects2.length = 0;
gdjs.MainCode.GDClickAnimTextObjects3.length = 0;
gdjs.MainCode.GDleveltext2Objects1.length = 0;
gdjs.MainCode.GDleveltext2Objects2.length = 0;
gdjs.MainCode.GDleveltext2Objects3.length = 0;
gdjs.MainCode.GDExplosion1Objects1.length = 0;
gdjs.MainCode.GDExplosion1Objects2.length = 0;
gdjs.MainCode.GDExplosion1Objects3.length = 0;
gdjs.MainCode.GDNewSprite2Objects1.length = 0;
gdjs.MainCode.GDNewSprite2Objects2.length = 0;
gdjs.MainCode.GDNewSprite2Objects3.length = 0;
gdjs.MainCode.GDRedFlameObjects1.length = 0;
gdjs.MainCode.GDRedFlameObjects2.length = 0;
gdjs.MainCode.GDRedFlameObjects3.length = 0;
gdjs.MainCode.GDCampfire2Objects1.length = 0;
gdjs.MainCode.GDCampfire2Objects2.length = 0;
gdjs.MainCode.GDCampfire2Objects3.length = 0;
gdjs.MainCode.GDCampfire3Objects1.length = 0;
gdjs.MainCode.GDCampfire3Objects2.length = 0;
gdjs.MainCode.GDCampfire3Objects3.length = 0;
gdjs.MainCode.GDDocksObjects1.length = 0;
gdjs.MainCode.GDDocksObjects2.length = 0;
gdjs.MainCode.GDDocksObjects3.length = 0;
gdjs.MainCode.GDAboutUsObjects1.length = 0;
gdjs.MainCode.GDAboutUsObjects2.length = 0;
gdjs.MainCode.GDAboutUsObjects3.length = 0;
gdjs.MainCode.GDMainObjects1.length = 0;
gdjs.MainCode.GDMainObjects2.length = 0;
gdjs.MainCode.GDMainObjects3.length = 0;
gdjs.MainCode.GDShopObjects1.length = 0;
gdjs.MainCode.GDShopObjects2.length = 0;
gdjs.MainCode.GDShopObjects3.length = 0;
gdjs.MainCode.GDConfigObjects1.length = 0;
gdjs.MainCode.GDConfigObjects2.length = 0;
gdjs.MainCode.GDConfigObjects3.length = 0;
gdjs.MainCode.GDLeadersObjects1.length = 0;
gdjs.MainCode.GDLeadersObjects2.length = 0;
gdjs.MainCode.GDLeadersObjects3.length = 0;

gdjs.MainCode.eventsList3(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
