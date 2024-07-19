gdjs.Guide1LuntikCode = {};
gdjs.Guide1LuntikCode.localVariables = [];
gdjs.Guide1LuntikCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.Guide1LuntikCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.Guide1LuntikCode.GDGameNameObjects1= [];
gdjs.Guide1LuntikCode.GDGameNameObjects2= [];
gdjs.Guide1LuntikCode.GDGuideObjects1= [];
gdjs.Guide1LuntikCode.GDGuideObjects2= [];
gdjs.Guide1LuntikCode.GDGuide2Objects1= [];
gdjs.Guide1LuntikCode.GDGuide2Objects2= [];
gdjs.Guide1LuntikCode.GDGuide3Objects1= [];
gdjs.Guide1LuntikCode.GDGuide3Objects2= [];
gdjs.Guide1LuntikCode.GDPodskazkaObjects1= [];
gdjs.Guide1LuntikCode.GDPodskazkaObjects2= [];
gdjs.Guide1LuntikCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.Guide1LuntikCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.Guide1LuntikCode.GDNewSpriteObjects1= [];
gdjs.Guide1LuntikCode.GDNewSpriteObjects2= [];
gdjs.Guide1LuntikCode.GDNewSprite2Objects1= [];
gdjs.Guide1LuntikCode.GDNewSprite2Objects2= [];


gdjs.Guide1LuntikCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Guide1LuntikCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Guide1LuntikCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.Guide1LuntikCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Guide1LuntikCode.GDNewSprite2Objects1[k] = gdjs.Guide1LuntikCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.Guide1LuntikCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Load", false);
}}

}


};

gdjs.Guide1LuntikCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Guide1LuntikCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Guide1LuntikCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Guide1LuntikCode.GDGameNameObjects1.length = 0;
gdjs.Guide1LuntikCode.GDGameNameObjects2.length = 0;
gdjs.Guide1LuntikCode.GDGuideObjects1.length = 0;
gdjs.Guide1LuntikCode.GDGuideObjects2.length = 0;
gdjs.Guide1LuntikCode.GDGuide2Objects1.length = 0;
gdjs.Guide1LuntikCode.GDGuide2Objects2.length = 0;
gdjs.Guide1LuntikCode.GDGuide3Objects1.length = 0;
gdjs.Guide1LuntikCode.GDGuide3Objects2.length = 0;
gdjs.Guide1LuntikCode.GDPodskazkaObjects1.length = 0;
gdjs.Guide1LuntikCode.GDPodskazkaObjects2.length = 0;
gdjs.Guide1LuntikCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.Guide1LuntikCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.Guide1LuntikCode.GDNewSpriteObjects1.length = 0;
gdjs.Guide1LuntikCode.GDNewSpriteObjects2.length = 0;
gdjs.Guide1LuntikCode.GDNewSprite2Objects1.length = 0;
gdjs.Guide1LuntikCode.GDNewSprite2Objects2.length = 0;

gdjs.Guide1LuntikCode.eventsList0(runtimeScene);

return;

}

gdjs['Guide1LuntikCode'] = gdjs.Guide1LuntikCode;
