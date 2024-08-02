gdjs.RedBlackCode = {};
gdjs.RedBlackCode.localVariables = [];
gdjs.RedBlackCode.GDNewTextInputObjects1_1final = [];

gdjs.RedBlackCode.GDNewTextInputObjects1= [];
gdjs.RedBlackCode.GDNewTextInputObjects2= [];
gdjs.RedBlackCode.GDNewTextObjects1= [];
gdjs.RedBlackCode.GDNewTextObjects2= [];
gdjs.RedBlackCode.GDNewSpriteObjects1= [];
gdjs.RedBlackCode.GDNewSpriteObjects2= [];
gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.RedBlackCode.GDBalObjects1= [];
gdjs.RedBlackCode.GDBalObjects2= [];
gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.RedBlackCode.GDNewText2Objects1= [];
gdjs.RedBlackCode.GDNewText2Objects2= [];
gdjs.RedBlackCode.GDDocksObjects1= [];
gdjs.RedBlackCode.GDDocksObjects2= [];
gdjs.RedBlackCode.GDAboutUsObjects1= [];
gdjs.RedBlackCode.GDAboutUsObjects2= [];
gdjs.RedBlackCode.GDMainObjects1= [];
gdjs.RedBlackCode.GDMainObjects2= [];
gdjs.RedBlackCode.GDShopObjects1= [];
gdjs.RedBlackCode.GDShopObjects2= [];
gdjs.RedBlackCode.GDConfigObjects1= [];
gdjs.RedBlackCode.GDConfigObjects2= [];
gdjs.RedBlackCode.GDLeadersObjects1= [];
gdjs.RedBlackCode.GDLeadersObjects2= [];


gdjs.RedBlackCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bal"), gdjs.RedBlackCode.GDBalObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.RedBlackCode.GDNewTextInputObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.toNumber((( gdjs.RedBlackCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.RedBlackCode.GDNewTextInputObjects1[0].getBehavior("Text").getText())));
}{for(var i = 0, len = gdjs.RedBlackCode.GDBalObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDBalObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.RedBlackCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.RedBlackCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDNewTextObjects1[i].getBehavior("Text").setText("Ставка превышает баланс.");
}
}{for(var i = 0, len = gdjs.RedBlackCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDNewTextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1);
gdjs.RedBlackCode.GDNewTextInputObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.RedBlackCode.GDNewTextInputObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.RedBlackCode.GDNewTextInputObjects2);
for (var i = 0, k = 0, l = gdjs.RedBlackCode.GDNewTextInputObjects2.length;i<l;++i) {
    if ( gdjs.RedBlackCode.GDNewTextInputObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_1 = true;
        gdjs.RedBlackCode.GDNewTextInputObjects2[k] = gdjs.RedBlackCode.GDNewTextInputObjects2[i];
        ++k;
    }
}
gdjs.RedBlackCode.GDNewTextInputObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.RedBlackCode.GDNewTextInputObjects2.length; j < jLen ; ++j) {
        if ( gdjs.RedBlackCode.GDNewTextInputObjects1_1final.indexOf(gdjs.RedBlackCode.GDNewTextInputObjects2[j]) === -1 )
            gdjs.RedBlackCode.GDNewTextInputObjects1_1final.push(gdjs.RedBlackCode.GDNewTextInputObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.RedBlackCode.GDNewTextInputObjects1_1final, gdjs.RedBlackCode.GDNewTextInputObjects1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.RedBlackCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.RedBlackCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDNewTextObjects1[i].getBehavior("Text").setText("Напишите ставку.");
}
}{for(var i = 0, len = gdjs.RedBlackCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDNewTextObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.RedBlackCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.RedBlackCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDNewTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.RedBlackCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RedBlackCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.RedBlackCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.RedBlackCode.GDNewTextInputObjects1[k] = gdjs.RedBlackCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.RedBlackCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.RedBlackCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.RedBlackCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDNewTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1 */
{for(var i = 0, len = gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1[i].SetLabelText("Поставить на черное", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1 */
{for(var i = 0, len = gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1[i].SetLabelText("Поставить на красное", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1);
{for(var i = 0, len = gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1[i].SetLabelText("Поставить на красное", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1);
{for(var i = 0, len = gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1.length ;i < len;++i) {
    gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1[i].SetLabelText("Поставить на черное", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


};

gdjs.RedBlackCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RedBlackCode.GDNewTextInputObjects1.length = 0;
gdjs.RedBlackCode.GDNewTextInputObjects2.length = 0;
gdjs.RedBlackCode.GDNewTextObjects1.length = 0;
gdjs.RedBlackCode.GDNewTextObjects2.length = 0;
gdjs.RedBlackCode.GDNewSpriteObjects1.length = 0;
gdjs.RedBlackCode.GDNewSpriteObjects2.length = 0;
gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.RedBlackCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.RedBlackCode.GDBalObjects1.length = 0;
gdjs.RedBlackCode.GDBalObjects2.length = 0;
gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.RedBlackCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.RedBlackCode.GDNewText2Objects1.length = 0;
gdjs.RedBlackCode.GDNewText2Objects2.length = 0;
gdjs.RedBlackCode.GDDocksObjects1.length = 0;
gdjs.RedBlackCode.GDDocksObjects2.length = 0;
gdjs.RedBlackCode.GDAboutUsObjects1.length = 0;
gdjs.RedBlackCode.GDAboutUsObjects2.length = 0;
gdjs.RedBlackCode.GDMainObjects1.length = 0;
gdjs.RedBlackCode.GDMainObjects2.length = 0;
gdjs.RedBlackCode.GDShopObjects1.length = 0;
gdjs.RedBlackCode.GDShopObjects2.length = 0;
gdjs.RedBlackCode.GDConfigObjects1.length = 0;
gdjs.RedBlackCode.GDConfigObjects2.length = 0;
gdjs.RedBlackCode.GDLeadersObjects1.length = 0;
gdjs.RedBlackCode.GDLeadersObjects2.length = 0;

gdjs.RedBlackCode.eventsList0(runtimeScene);

return;

}

gdjs['RedBlackCode'] = gdjs.RedBlackCode;
