gdjs.Load1LuntikCode = {};
gdjs.Load1LuntikCode.localVariables = [];
gdjs.Load1LuntikCode.GDLoadingObjects1= [];
gdjs.Load1LuntikCode.GDLoadingObjects2= [];
gdjs.Load1LuntikCode.GDLoadingObjects3= [];
gdjs.Load1LuntikCode.GDNewTextObjects1= [];
gdjs.Load1LuntikCode.GDNewTextObjects2= [];
gdjs.Load1LuntikCode.GDNewTextObjects3= [];
gdjs.Load1LuntikCode.GDLoading2Objects1= [];
gdjs.Load1LuntikCode.GDLoading2Objects2= [];
gdjs.Load1LuntikCode.GDLoading2Objects3= [];
gdjs.Load1LuntikCode.GDNewText2Objects1= [];
gdjs.Load1LuntikCode.GDNewText2Objects2= [];
gdjs.Load1LuntikCode.GDNewText2Objects3= [];


gdjs.Load1LuntikCode.asyncCallback10786748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Load1LuntikCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game1Luntik", false);
}gdjs.Load1LuntikCode.localVariables.length = 0;
}
gdjs.Load1LuntikCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Load1LuntikCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Load1LuntikCode.asyncCallback10786748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Load1LuntikCode.asyncCallback10704212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Load1LuntikCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.Load1LuntikCode.GDLoadingObjects2);
{for(var i = 0, len = gdjs.Load1LuntikCode.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.Load1LuntikCode.GDLoadingObjects2[i].getBehavior("Animation").pauseAnimation();
}
}
{ //Subevents
gdjs.Load1LuntikCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Load1LuntikCode.localVariables.length = 0;
}
gdjs.Load1LuntikCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Load1LuntikCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Load1LuntikCode.asyncCallback10704212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Load1LuntikCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Loading2"), gdjs.Load1LuntikCode.GDLoading2Objects1);
{for(var i = 0, len = gdjs.Load1LuntikCode.GDLoading2Objects1.length ;i < len;++i) {
    gdjs.Load1LuntikCode.GDLoading2Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Load1LuntikCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Load1LuntikCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Load1LuntikCode.GDLoadingObjects1.length = 0;
gdjs.Load1LuntikCode.GDLoadingObjects2.length = 0;
gdjs.Load1LuntikCode.GDLoadingObjects3.length = 0;
gdjs.Load1LuntikCode.GDNewTextObjects1.length = 0;
gdjs.Load1LuntikCode.GDNewTextObjects2.length = 0;
gdjs.Load1LuntikCode.GDNewTextObjects3.length = 0;
gdjs.Load1LuntikCode.GDLoading2Objects1.length = 0;
gdjs.Load1LuntikCode.GDLoading2Objects2.length = 0;
gdjs.Load1LuntikCode.GDLoading2Objects3.length = 0;
gdjs.Load1LuntikCode.GDNewText2Objects1.length = 0;
gdjs.Load1LuntikCode.GDNewText2Objects2.length = 0;
gdjs.Load1LuntikCode.GDNewText2Objects3.length = 0;

gdjs.Load1LuntikCode.eventsList2(runtimeScene);

return;

}

gdjs['Load1LuntikCode'] = gdjs.Load1LuntikCode;
