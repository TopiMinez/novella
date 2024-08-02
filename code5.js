gdjs.CasinoCode = {};
gdjs.CasinoCode.localVariables = [];
gdjs.CasinoCode.GDBlackObjects1= [];
gdjs.CasinoCode.GDBlackObjects2= [];
gdjs.CasinoCode.GDBlueObjects1= [];
gdjs.CasinoCode.GDBlueObjects2= [];
gdjs.CasinoCode.GDYellowObjects1= [];
gdjs.CasinoCode.GDYellowObjects2= [];
gdjs.CasinoCode.GDRedObjects1= [];
gdjs.CasinoCode.GDRedObjects2= [];
gdjs.CasinoCode.GDGreenObjects1= [];
gdjs.CasinoCode.GDGreenObjects2= [];
gdjs.CasinoCode.GDNewTextObjects1= [];
gdjs.CasinoCode.GDNewTextObjects2= [];
gdjs.CasinoCode.GDMedievalButtonBeigeObjects1= [];
gdjs.CasinoCode.GDMedievalButtonBeigeObjects2= [];
gdjs.CasinoCode.GDMedievalButtonBeige2Objects1= [];
gdjs.CasinoCode.GDMedievalButtonBeige2Objects2= [];
gdjs.CasinoCode.GDDocksObjects1= [];
gdjs.CasinoCode.GDDocksObjects2= [];
gdjs.CasinoCode.GDAboutUsObjects1= [];
gdjs.CasinoCode.GDAboutUsObjects2= [];
gdjs.CasinoCode.GDMainObjects1= [];
gdjs.CasinoCode.GDMainObjects2= [];
gdjs.CasinoCode.GDShopObjects1= [];
gdjs.CasinoCode.GDShopObjects2= [];
gdjs.CasinoCode.GDConfigObjects1= [];
gdjs.CasinoCode.GDConfigObjects2= [];
gdjs.CasinoCode.GDLeadersObjects1= [];
gdjs.CasinoCode.GDLeadersObjects2= [];


gdjs.CasinoCode.asyncCallback15400372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CasinoCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.CasinoCode.GDBlackObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("MedievalButtonBeige"), gdjs.CasinoCode.GDMedievalButtonBeigeObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("MedievalButtonBeige2"), gdjs.CasinoCode.GDMedievalButtonBeige2Objects2);

{for(var i = 0, len = gdjs.CasinoCode.GDBlackObjects2.length ;i < len;++i) {
    gdjs.CasinoCode.GDBlackObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.CasinoCode.GDMedievalButtonBeigeObjects2.length ;i < len;++i) {
    gdjs.CasinoCode.GDMedievalButtonBeigeObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.CasinoCode.GDMedievalButtonBeige2Objects2.length ;i < len;++i) {
    gdjs.CasinoCode.GDMedievalButtonBeige2Objects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}gdjs.CasinoCode.localVariables.length = 0;
}
gdjs.CasinoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CasinoCode.localVariables);
for (const obj of gdjs.CasinoCode.GDMedievalButtonBeigeObjects1) asyncObjectsList.addObject("MedievalButtonBeige", obj);
for (const obj of gdjs.CasinoCode.GDMedievalButtonBeige2Objects1) asyncObjectsList.addObject("MedievalButtonBeige2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.CasinoCode.asyncCallback15400372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CasinoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs.CasinoCode.GDMedievalButtonBeigeObjects1);
gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige2"), gdjs.CasinoCode.GDMedievalButtonBeige2Objects1);
{for(var i = 0, len = gdjs.CasinoCode.GDMedievalButtonBeigeObjects1.length ;i < len;++i) {
    gdjs.CasinoCode.GDMedievalButtonBeigeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CasinoCode.GDMedievalButtonBeige2Objects1.length ;i < len;++i) {
    gdjs.CasinoCode.GDMedievalButtonBeige2Objects1[i].hide();
}
}
{ //Subevents
gdjs.CasinoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs.CasinoCode.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CasinoCode.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs.CasinoCode.GDMedievalButtonBeigeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CasinoCode.GDMedievalButtonBeigeObjects1[k] = gdjs.CasinoCode.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs.CasinoCode.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "RedBlack", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige2"), gdjs.CasinoCode.GDMedievalButtonBeige2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CasinoCode.GDMedievalButtonBeige2Objects1.length;i<l;++i) {
    if ( gdjs.CasinoCode.GDMedievalButtonBeige2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CasinoCode.GDMedievalButtonBeige2Objects1[k] = gdjs.CasinoCode.GDMedievalButtonBeige2Objects1[i];
        ++k;
    }
}
gdjs.CasinoCode.GDMedievalButtonBeige2Objects1.length = k;
if (isConditionTrue_0) {
}

}


};

gdjs.CasinoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CasinoCode.GDBlackObjects1.length = 0;
gdjs.CasinoCode.GDBlackObjects2.length = 0;
gdjs.CasinoCode.GDBlueObjects1.length = 0;
gdjs.CasinoCode.GDBlueObjects2.length = 0;
gdjs.CasinoCode.GDYellowObjects1.length = 0;
gdjs.CasinoCode.GDYellowObjects2.length = 0;
gdjs.CasinoCode.GDRedObjects1.length = 0;
gdjs.CasinoCode.GDRedObjects2.length = 0;
gdjs.CasinoCode.GDGreenObjects1.length = 0;
gdjs.CasinoCode.GDGreenObjects2.length = 0;
gdjs.CasinoCode.GDNewTextObjects1.length = 0;
gdjs.CasinoCode.GDNewTextObjects2.length = 0;
gdjs.CasinoCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.CasinoCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.CasinoCode.GDMedievalButtonBeige2Objects1.length = 0;
gdjs.CasinoCode.GDMedievalButtonBeige2Objects2.length = 0;
gdjs.CasinoCode.GDDocksObjects1.length = 0;
gdjs.CasinoCode.GDDocksObjects2.length = 0;
gdjs.CasinoCode.GDAboutUsObjects1.length = 0;
gdjs.CasinoCode.GDAboutUsObjects2.length = 0;
gdjs.CasinoCode.GDMainObjects1.length = 0;
gdjs.CasinoCode.GDMainObjects2.length = 0;
gdjs.CasinoCode.GDShopObjects1.length = 0;
gdjs.CasinoCode.GDShopObjects2.length = 0;
gdjs.CasinoCode.GDConfigObjects1.length = 0;
gdjs.CasinoCode.GDConfigObjects2.length = 0;
gdjs.CasinoCode.GDLeadersObjects1.length = 0;
gdjs.CasinoCode.GDLeadersObjects2.length = 0;

gdjs.CasinoCode.eventsList1(runtimeScene);

return;

}

gdjs['CasinoCode'] = gdjs.CasinoCode;
