gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.GDNewTextInputObjects1= [];
gdjs.SettingsCode.GDNewTextInputObjects2= [];
gdjs.SettingsCode.GDNewTextInputObjects3= [];
gdjs.SettingsCode.GDBackObjects1= [];
gdjs.SettingsCode.GDBackObjects2= [];
gdjs.SettingsCode.GDBackObjects3= [];
gdjs.SettingsCode.GDGreyButtonObjects1= [];
gdjs.SettingsCode.GDGreyButtonObjects2= [];
gdjs.SettingsCode.GDGreyButtonObjects3= [];
gdjs.SettingsCode.GDGreyButton2Objects1= [];
gdjs.SettingsCode.GDGreyButton2Objects2= [];
gdjs.SettingsCode.GDGreyButton2Objects3= [];
gdjs.SettingsCode.GDNewTextInput2Objects1= [];
gdjs.SettingsCode.GDNewTextInput2Objects2= [];
gdjs.SettingsCode.GDNewTextInput2Objects3= [];
gdjs.SettingsCode.GDNewTextObjects1= [];
gdjs.SettingsCode.GDNewTextObjects2= [];
gdjs.SettingsCode.GDNewTextObjects3= [];
gdjs.SettingsCode.GDNewText2Objects1= [];
gdjs.SettingsCode.GDNewText2Objects2= [];
gdjs.SettingsCode.GDNewText2Objects3= [];
gdjs.SettingsCode.GDDocksObjects1= [];
gdjs.SettingsCode.GDDocksObjects2= [];
gdjs.SettingsCode.GDDocksObjects3= [];
gdjs.SettingsCode.GDAboutUsObjects1= [];
gdjs.SettingsCode.GDAboutUsObjects2= [];
gdjs.SettingsCode.GDAboutUsObjects3= [];
gdjs.SettingsCode.GDMainObjects1= [];
gdjs.SettingsCode.GDMainObjects2= [];
gdjs.SettingsCode.GDMainObjects3= [];
gdjs.SettingsCode.GDShopObjects1= [];
gdjs.SettingsCode.GDShopObjects2= [];
gdjs.SettingsCode.GDShopObjects3= [];
gdjs.SettingsCode.GDConfigObjects1= [];
gdjs.SettingsCode.GDConfigObjects2= [];
gdjs.SettingsCode.GDConfigObjects3= [];
gdjs.SettingsCode.GDLeadersObjects1= [];
gdjs.SettingsCode.GDLeadersObjects2= [];
gdjs.SettingsCode.GDLeadersObjects3= [];


gdjs.SettingsCode.asyncCallback15321012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SettingsCode.localVariables);
gdjs.SettingsCode.localVariables.length = 0;
}
gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SettingsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.001), (runtimeScene) => (gdjs.SettingsCode.asyncCallback15321012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{



}


{



}


{



}


{



}


};gdjs.SettingsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Go") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15329500);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15331036);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Go");
}}

}


};gdjs.SettingsCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.SettingsCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackObjects1[k] = gdjs.SettingsCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.SettingsCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDGreyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDGreyButtonObjects1[k] = gdjs.SettingsCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.SettingsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton2"), gdjs.SettingsCode.GDGreyButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDGreyButton2Objects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDGreyButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDGreyButton2Objects1[k] = gdjs.SettingsCode.GDGreyButton2Objects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDGreyButton2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.storage.clearJSONFile("storage");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SettingsCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDNewTextObjects1[i].hide();
}
}}

}


{


gdjs.SettingsCode.eventsList1(runtimeScene);
}


{


gdjs.SettingsCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDNewTextInputObjects1.length = 0;
gdjs.SettingsCode.GDNewTextInputObjects2.length = 0;
gdjs.SettingsCode.GDNewTextInputObjects3.length = 0;
gdjs.SettingsCode.GDBackObjects1.length = 0;
gdjs.SettingsCode.GDBackObjects2.length = 0;
gdjs.SettingsCode.GDBackObjects3.length = 0;
gdjs.SettingsCode.GDGreyButtonObjects1.length = 0;
gdjs.SettingsCode.GDGreyButtonObjects2.length = 0;
gdjs.SettingsCode.GDGreyButtonObjects3.length = 0;
gdjs.SettingsCode.GDGreyButton2Objects1.length = 0;
gdjs.SettingsCode.GDGreyButton2Objects2.length = 0;
gdjs.SettingsCode.GDGreyButton2Objects3.length = 0;
gdjs.SettingsCode.GDNewTextInput2Objects1.length = 0;
gdjs.SettingsCode.GDNewTextInput2Objects2.length = 0;
gdjs.SettingsCode.GDNewTextInput2Objects3.length = 0;
gdjs.SettingsCode.GDNewTextObjects1.length = 0;
gdjs.SettingsCode.GDNewTextObjects2.length = 0;
gdjs.SettingsCode.GDNewTextObjects3.length = 0;
gdjs.SettingsCode.GDNewText2Objects1.length = 0;
gdjs.SettingsCode.GDNewText2Objects2.length = 0;
gdjs.SettingsCode.GDNewText2Objects3.length = 0;
gdjs.SettingsCode.GDDocksObjects1.length = 0;
gdjs.SettingsCode.GDDocksObjects2.length = 0;
gdjs.SettingsCode.GDDocksObjects3.length = 0;
gdjs.SettingsCode.GDAboutUsObjects1.length = 0;
gdjs.SettingsCode.GDAboutUsObjects2.length = 0;
gdjs.SettingsCode.GDAboutUsObjects3.length = 0;
gdjs.SettingsCode.GDMainObjects1.length = 0;
gdjs.SettingsCode.GDMainObjects2.length = 0;
gdjs.SettingsCode.GDMainObjects3.length = 0;
gdjs.SettingsCode.GDShopObjects1.length = 0;
gdjs.SettingsCode.GDShopObjects2.length = 0;
gdjs.SettingsCode.GDShopObjects3.length = 0;
gdjs.SettingsCode.GDConfigObjects1.length = 0;
gdjs.SettingsCode.GDConfigObjects2.length = 0;
gdjs.SettingsCode.GDConfigObjects3.length = 0;
gdjs.SettingsCode.GDLeadersObjects1.length = 0;
gdjs.SettingsCode.GDLeadersObjects2.length = 0;
gdjs.SettingsCode.GDLeadersObjects3.length = 0;

gdjs.SettingsCode.eventsList3(runtimeScene);

return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
