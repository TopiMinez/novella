gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.MainCode.GDWhiteSquareDecoratedButtonObjects2= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.MainCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.MainCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load1Luntik", false);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.MainCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
