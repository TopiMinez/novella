gdjs.WorkCode = {};
gdjs.WorkCode.localVariables = [];
gdjs.WorkCode.GDBalanceObjects1= [];
gdjs.WorkCode.GDBalanceObjects2= [];
gdjs.WorkCode.GDBalanceObjects3= [];
gdjs.WorkCode.GDNewSpriteObjects1= [];
gdjs.WorkCode.GDNewSpriteObjects2= [];
gdjs.WorkCode.GDNewSpriteObjects3= [];
gdjs.WorkCode.GDNewTextObjects1= [];
gdjs.WorkCode.GDNewTextObjects2= [];
gdjs.WorkCode.GDNewTextObjects3= [];
gdjs.WorkCode.GDplusObjects1= [];
gdjs.WorkCode.GDplusObjects2= [];
gdjs.WorkCode.GDplusObjects3= [];
gdjs.WorkCode.GDPriceObjects1= [];
gdjs.WorkCode.GDPriceObjects2= [];
gdjs.WorkCode.GDPriceObjects3= [];
gdjs.WorkCode.GDDocksObjects1= [];
gdjs.WorkCode.GDDocksObjects2= [];
gdjs.WorkCode.GDDocksObjects3= [];
gdjs.WorkCode.GDAboutUsObjects1= [];
gdjs.WorkCode.GDAboutUsObjects2= [];
gdjs.WorkCode.GDAboutUsObjects3= [];
gdjs.WorkCode.GDMainObjects1= [];
gdjs.WorkCode.GDMainObjects2= [];
gdjs.WorkCode.GDMainObjects3= [];
gdjs.WorkCode.GDShopObjects1= [];
gdjs.WorkCode.GDShopObjects2= [];
gdjs.WorkCode.GDShopObjects3= [];
gdjs.WorkCode.GDConfigObjects1= [];
gdjs.WorkCode.GDConfigObjects2= [];
gdjs.WorkCode.GDConfigObjects3= [];
gdjs.WorkCode.GDLeadersObjects1= [];
gdjs.WorkCode.GDLeadersObjects2= [];
gdjs.WorkCode.GDLeadersObjects3= [];


gdjs.WorkCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Main"), gdjs.WorkCode.GDMainObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorkCode.GDMainObjects2.length;i<l;++i) {
    if ( gdjs.WorkCode.GDMainObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorkCode.GDMainObjects2[k] = gdjs.WorkCode.GDMainObjects2[i];
        ++k;
    }
}
gdjs.WorkCode.GDMainObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shop"), gdjs.WorkCode.GDShopObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorkCode.GDShopObjects2.length;i<l;++i) {
    if ( gdjs.WorkCode.GDShopObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorkCode.GDShopObjects2[k] = gdjs.WorkCode.GDShopObjects2[i];
        ++k;
    }
}
gdjs.WorkCode.GDShopObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Work", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Config"), gdjs.WorkCode.GDConfigObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorkCode.GDConfigObjects2.length;i<l;++i) {
    if ( gdjs.WorkCode.GDConfigObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorkCode.GDConfigObjects2[k] = gdjs.WorkCode.GDConfigObjects2[i];
        ++k;
    }
}
gdjs.WorkCode.GDConfigObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaders"), gdjs.WorkCode.GDLeadersObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorkCode.GDLeadersObjects1.length;i<l;++i) {
    if ( gdjs.WorkCode.GDLeadersObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorkCode.GDLeadersObjects1[k] = gdjs.WorkCode.GDLeadersObjects1[i];
        ++k;
    }
}
gdjs.WorkCode.GDLeadersObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LB", false);
}}

}


};gdjs.WorkCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Go") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15295068);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15296460);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Go");
}}

}


};gdjs.WorkCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Price"), gdjs.WorkCode.GDPriceObjects2);
gdjs.copyArray(runtimeScene.getObjects("plus"), gdjs.WorkCode.GDplusObjects2);
{for(var i = 0, len = gdjs.WorkCode.GDPriceObjects2.length ;i < len;++i) {
    gdjs.WorkCode.GDPriceObjects2[i].getBehavior("Text").setText("Max");
}
}{for(var i = 0, len = gdjs.WorkCode.GDplusObjects2.length ;i < len;++i) {
    gdjs.WorkCode.GDplusObjects2[i].getBehavior("Text").setText("45 в секунду");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Price"), gdjs.WorkCode.GDPriceObjects2);
gdjs.copyArray(runtimeScene.getObjects("plus"), gdjs.WorkCode.GDplusObjects2);
{for(var i = 0, len = gdjs.WorkCode.GDPriceObjects2.length ;i < len;++i) {
    gdjs.WorkCode.GDPriceObjects2[i].getBehavior("Text").setText("25000");
}
}{for(var i = 0, len = gdjs.WorkCode.GDplusObjects2.length ;i < len;++i) {
    gdjs.WorkCode.GDplusObjects2[i].getBehavior("Text").setText("+10 к доходу");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.WorkCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorkCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.WorkCode.GDNewSpriteObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorkCode.GDNewSpriteObjects2[k] = gdjs.WorkCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.WorkCode.GDNewSpriteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 25000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 4;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(7500);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(45);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "moneyg", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "Doxod", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "WorkLV", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Price"), gdjs.WorkCode.GDPriceObjects2);
gdjs.copyArray(runtimeScene.getObjects("plus"), gdjs.WorkCode.GDplusObjects2);
{for(var i = 0, len = gdjs.WorkCode.GDPriceObjects2.length ;i < len;++i) {
    gdjs.WorkCode.GDPriceObjects2[i].getBehavior("Text").setText("7500");
}
}{for(var i = 0, len = gdjs.WorkCode.GDplusObjects2.length ;i < len;++i) {
    gdjs.WorkCode.GDplusObjects2[i].getBehavior("Text").setText("+15 к доходу");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.WorkCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorkCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.WorkCode.GDNewSpriteObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorkCode.GDNewSpriteObjects2[k] = gdjs.WorkCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.WorkCode.GDNewSpriteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 7500;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(7500);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(35);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "moneyg", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "Doxod", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "WorkLV", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Price"), gdjs.WorkCode.GDPriceObjects2);
gdjs.copyArray(runtimeScene.getObjects("plus"), gdjs.WorkCode.GDplusObjects2);
{for(var i = 0, len = gdjs.WorkCode.GDPriceObjects2.length ;i < len;++i) {
    gdjs.WorkCode.GDPriceObjects2[i].getBehavior("Text").setText("2400");
}
}{for(var i = 0, len = gdjs.WorkCode.GDplusObjects2.length ;i < len;++i) {
    gdjs.WorkCode.GDplusObjects2[i].getBehavior("Text").setText("+10 к доходу");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.WorkCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorkCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.WorkCode.GDNewSpriteObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorkCode.GDNewSpriteObjects2[k] = gdjs.WorkCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.WorkCode.GDNewSpriteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 2400;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(2400);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(20);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "moneyg", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "Doxod", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "WorkLV", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Price"), gdjs.WorkCode.GDPriceObjects2);
gdjs.copyArray(runtimeScene.getObjects("plus"), gdjs.WorkCode.GDplusObjects2);
{for(var i = 0, len = gdjs.WorkCode.GDPriceObjects2.length ;i < len;++i) {
    gdjs.WorkCode.GDPriceObjects2[i].getBehavior("Text").setText("530");
}
}{for(var i = 0, len = gdjs.WorkCode.GDplusObjects2.length ;i < len;++i) {
    gdjs.WorkCode.GDplusObjects2[i].getBehavior("Text").setText("+9 к доходу");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.WorkCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorkCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.WorkCode.GDNewSpriteObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorkCode.GDNewSpriteObjects2[k] = gdjs.WorkCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.WorkCode.GDNewSpriteObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 530;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(530);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(10);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "moneyg", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "Doxod", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "WorkLV", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.WorkCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WorkCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.WorkCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WorkCode.GDNewSpriteObjects1[k] = gdjs.WorkCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.WorkCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 120;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(120);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "moneyg", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "WorkLV", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "Doxod", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}}

}


};gdjs.WorkCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Balance"), gdjs.WorkCode.GDBalanceObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "moneyg", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "clicker", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "level", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "doxods", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "WorkLV", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}{for(var i = 0, len = gdjs.WorkCode.GDBalanceObjects1.length ;i < len;++i) {
    gdjs.WorkCode.GDBalanceObjects1[i].setGradient("LINEAR_VERTICAL", "255;0;0", "255;0;4", "21;0;255", "21;0;255");
}
}}

}


{


gdjs.WorkCode.eventsList0(runtimeScene);
}


{


gdjs.WorkCode.eventsList1(runtimeScene);
}


{


gdjs.WorkCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Balance"), gdjs.WorkCode.GDBalanceObjects1);
{for(var i = 0, len = gdjs.WorkCode.GDBalanceObjects1.length ;i < len;++i) {
    gdjs.WorkCode.GDBalanceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.WorkCode.GDBalanceObjects1.length ;i < len;++i) {
    gdjs.WorkCode.GDBalanceObjects1[i].setGradient("LINEAR_VERTICAL", "255;0;0", "255;0;4", "21;0;255", "21;0;255");
}
}}

}


};

gdjs.WorkCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WorkCode.GDBalanceObjects1.length = 0;
gdjs.WorkCode.GDBalanceObjects2.length = 0;
gdjs.WorkCode.GDBalanceObjects3.length = 0;
gdjs.WorkCode.GDNewSpriteObjects1.length = 0;
gdjs.WorkCode.GDNewSpriteObjects2.length = 0;
gdjs.WorkCode.GDNewSpriteObjects3.length = 0;
gdjs.WorkCode.GDNewTextObjects1.length = 0;
gdjs.WorkCode.GDNewTextObjects2.length = 0;
gdjs.WorkCode.GDNewTextObjects3.length = 0;
gdjs.WorkCode.GDplusObjects1.length = 0;
gdjs.WorkCode.GDplusObjects2.length = 0;
gdjs.WorkCode.GDplusObjects3.length = 0;
gdjs.WorkCode.GDPriceObjects1.length = 0;
gdjs.WorkCode.GDPriceObjects2.length = 0;
gdjs.WorkCode.GDPriceObjects3.length = 0;
gdjs.WorkCode.GDDocksObjects1.length = 0;
gdjs.WorkCode.GDDocksObjects2.length = 0;
gdjs.WorkCode.GDDocksObjects3.length = 0;
gdjs.WorkCode.GDAboutUsObjects1.length = 0;
gdjs.WorkCode.GDAboutUsObjects2.length = 0;
gdjs.WorkCode.GDAboutUsObjects3.length = 0;
gdjs.WorkCode.GDMainObjects1.length = 0;
gdjs.WorkCode.GDMainObjects2.length = 0;
gdjs.WorkCode.GDMainObjects3.length = 0;
gdjs.WorkCode.GDShopObjects1.length = 0;
gdjs.WorkCode.GDShopObjects2.length = 0;
gdjs.WorkCode.GDShopObjects3.length = 0;
gdjs.WorkCode.GDConfigObjects1.length = 0;
gdjs.WorkCode.GDConfigObjects2.length = 0;
gdjs.WorkCode.GDConfigObjects3.length = 0;
gdjs.WorkCode.GDLeadersObjects1.length = 0;
gdjs.WorkCode.GDLeadersObjects2.length = 0;
gdjs.WorkCode.GDLeadersObjects3.length = 0;

gdjs.WorkCode.eventsList3(runtimeScene);

return;

}

gdjs['WorkCode'] = gdjs.WorkCode;
