gdjs.LoadCode = {};
gdjs.LoadCode.localVariables = [];
gdjs.LoadCode.GDLoadingObjects1= [];
gdjs.LoadCode.GDLoadingObjects2= [];
gdjs.LoadCode.GDLoadingObjects3= [];
gdjs.LoadCode.GDNewTextObjects1= [];
gdjs.LoadCode.GDNewTextObjects2= [];
gdjs.LoadCode.GDNewTextObjects3= [];
gdjs.LoadCode.GDLoading2Objects1= [];
gdjs.LoadCode.GDLoading2Objects2= [];
gdjs.LoadCode.GDLoading2Objects3= [];
gdjs.LoadCode.GDNewText2Objects1= [];
gdjs.LoadCode.GDNewText2Objects2= [];
gdjs.LoadCode.GDNewText2Objects3= [];


gdjs.LoadCode.asyncCallback10938572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}gdjs.LoadCode.localVariables.length = 0;
}
gdjs.LoadCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.LoadCode.asyncCallback10938572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadCode.asyncCallback10938380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.LoadCode.GDLoadingObjects2);
{for(var i = 0, len = gdjs.LoadCode.GDLoadingObjects2.length ;i < len;++i) {
    gdjs.LoadCode.GDLoadingObjects2[i].getBehavior("Animation").pauseAnimation();
}
}
{ //Subevents
gdjs.LoadCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LoadCode.localVariables.length = 0;
}
gdjs.LoadCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LoadCode.asyncCallback10938380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Loading2"), gdjs.LoadCode.GDLoading2Objects1);
{for(var i = 0, len = gdjs.LoadCode.GDLoading2Objects1.length ;i < len;++i) {
    gdjs.LoadCode.GDLoading2Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoadCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.LoadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadCode.GDLoadingObjects1.length = 0;
gdjs.LoadCode.GDLoadingObjects2.length = 0;
gdjs.LoadCode.GDLoadingObjects3.length = 0;
gdjs.LoadCode.GDNewTextObjects1.length = 0;
gdjs.LoadCode.GDNewTextObjects2.length = 0;
gdjs.LoadCode.GDNewTextObjects3.length = 0;
gdjs.LoadCode.GDLoading2Objects1.length = 0;
gdjs.LoadCode.GDLoading2Objects2.length = 0;
gdjs.LoadCode.GDLoading2Objects3.length = 0;
gdjs.LoadCode.GDNewText2Objects1.length = 0;
gdjs.LoadCode.GDNewText2Objects2.length = 0;
gdjs.LoadCode.GDNewText2Objects3.length = 0;

gdjs.LoadCode.eventsList2(runtimeScene);

return;

}

gdjs['LoadCode'] = gdjs.LoadCode;
