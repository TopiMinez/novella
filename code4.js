gdjs.LBCode = {};
gdjs.LBCode.localVariables = [];
gdjs.LBCode.GDNewTextInputObjects1= [];
gdjs.LBCode.GDNewTextInputObjects2= [];
gdjs.LBCode.GDListObjects1= [];
gdjs.LBCode.GDListObjects2= [];
gdjs.LBCode.GDChelObjects1= [];
gdjs.LBCode.GDChelObjects2= [];
gdjs.LBCode.GDbalChelObjects1= [];
gdjs.LBCode.GDbalChelObjects2= [];
gdjs.LBCode.GDid89276Objects1= [];
gdjs.LBCode.GDid89276Objects2= [];
gdjs.LBCode.GDbal89276Objects1= [];
gdjs.LBCode.GDbal89276Objects2= [];
gdjs.LBCode.GDTopiObjects1= [];
gdjs.LBCode.GDTopiObjects2= [];
gdjs.LBCode.GDbalTopiObjects1= [];
gdjs.LBCode.GDbalTopiObjects2= [];
gdjs.LBCode.GDMicrooObjects1= [];
gdjs.LBCode.GDMicrooObjects2= [];
gdjs.LBCode.GDbalMicroooObjects1= [];
gdjs.LBCode.GDbalMicroooObjects2= [];
gdjs.LBCode.GDbalXornikObjects1= [];
gdjs.LBCode.GDbalXornikObjects2= [];
gdjs.LBCode.GDXornikObjects1= [];
gdjs.LBCode.GDXornikObjects2= [];
gdjs.LBCode.GDUbludokObjects1= [];
gdjs.LBCode.GDUbludokObjects2= [];
gdjs.LBCode.GDbalUbludokObjects1= [];
gdjs.LBCode.GDbalUbludokObjects2= [];
gdjs.LBCode.GDPo9grObjects1= [];
gdjs.LBCode.GDPo9grObjects2= [];
gdjs.LBCode.GDbalPo9grObjects1= [];
gdjs.LBCode.GDbalPo9grObjects2= [];
gdjs.LBCode.GDDanizObjects1= [];
gdjs.LBCode.GDDanizObjects2= [];
gdjs.LBCode.GDbalDanizObjects1= [];
gdjs.LBCode.GDbalDanizObjects2= [];
gdjs.LBCode.GDWhiteSleekButtonObjects1= [];
gdjs.LBCode.GDWhiteSleekButtonObjects2= [];
gdjs.LBCode.GDNewSpriteObjects1= [];
gdjs.LBCode.GDNewSpriteObjects2= [];
gdjs.LBCode.GDDocksObjects1= [];
gdjs.LBCode.GDDocksObjects2= [];
gdjs.LBCode.GDAboutUsObjects1= [];
gdjs.LBCode.GDAboutUsObjects2= [];
gdjs.LBCode.GDMainObjects1= [];
gdjs.LBCode.GDMainObjects2= [];
gdjs.LBCode.GDShopObjects1= [];
gdjs.LBCode.GDShopObjects2= [];
gdjs.LBCode.GDConfigObjects1= [];
gdjs.LBCode.GDConfigObjects2= [];
gdjs.LBCode.GDLeadersObjects1= [];
gdjs.LBCode.GDLeadersObjects2= [];


gdjs.LBCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Main"), gdjs.LBCode.GDMainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LBCode.GDMainObjects1.length;i<l;++i) {
    if ( gdjs.LBCode.GDMainObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LBCode.GDMainObjects1[k] = gdjs.LBCode.GDMainObjects1[i];
        ++k;
    }
}
gdjs.LBCode.GDMainObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer");
}}

}


};

gdjs.LBCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LBCode.GDNewTextInputObjects1.length = 0;
gdjs.LBCode.GDNewTextInputObjects2.length = 0;
gdjs.LBCode.GDListObjects1.length = 0;
gdjs.LBCode.GDListObjects2.length = 0;
gdjs.LBCode.GDChelObjects1.length = 0;
gdjs.LBCode.GDChelObjects2.length = 0;
gdjs.LBCode.GDbalChelObjects1.length = 0;
gdjs.LBCode.GDbalChelObjects2.length = 0;
gdjs.LBCode.GDid89276Objects1.length = 0;
gdjs.LBCode.GDid89276Objects2.length = 0;
gdjs.LBCode.GDbal89276Objects1.length = 0;
gdjs.LBCode.GDbal89276Objects2.length = 0;
gdjs.LBCode.GDTopiObjects1.length = 0;
gdjs.LBCode.GDTopiObjects2.length = 0;
gdjs.LBCode.GDbalTopiObjects1.length = 0;
gdjs.LBCode.GDbalTopiObjects2.length = 0;
gdjs.LBCode.GDMicrooObjects1.length = 0;
gdjs.LBCode.GDMicrooObjects2.length = 0;
gdjs.LBCode.GDbalMicroooObjects1.length = 0;
gdjs.LBCode.GDbalMicroooObjects2.length = 0;
gdjs.LBCode.GDbalXornikObjects1.length = 0;
gdjs.LBCode.GDbalXornikObjects2.length = 0;
gdjs.LBCode.GDXornikObjects1.length = 0;
gdjs.LBCode.GDXornikObjects2.length = 0;
gdjs.LBCode.GDUbludokObjects1.length = 0;
gdjs.LBCode.GDUbludokObjects2.length = 0;
gdjs.LBCode.GDbalUbludokObjects1.length = 0;
gdjs.LBCode.GDbalUbludokObjects2.length = 0;
gdjs.LBCode.GDPo9grObjects1.length = 0;
gdjs.LBCode.GDPo9grObjects2.length = 0;
gdjs.LBCode.GDbalPo9grObjects1.length = 0;
gdjs.LBCode.GDbalPo9grObjects2.length = 0;
gdjs.LBCode.GDDanizObjects1.length = 0;
gdjs.LBCode.GDDanizObjects2.length = 0;
gdjs.LBCode.GDbalDanizObjects1.length = 0;
gdjs.LBCode.GDbalDanizObjects2.length = 0;
gdjs.LBCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.LBCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.LBCode.GDNewSpriteObjects1.length = 0;
gdjs.LBCode.GDNewSpriteObjects2.length = 0;
gdjs.LBCode.GDDocksObjects1.length = 0;
gdjs.LBCode.GDDocksObjects2.length = 0;
gdjs.LBCode.GDAboutUsObjects1.length = 0;
gdjs.LBCode.GDAboutUsObjects2.length = 0;
gdjs.LBCode.GDMainObjects1.length = 0;
gdjs.LBCode.GDMainObjects2.length = 0;
gdjs.LBCode.GDShopObjects1.length = 0;
gdjs.LBCode.GDShopObjects2.length = 0;
gdjs.LBCode.GDConfigObjects1.length = 0;
gdjs.LBCode.GDConfigObjects2.length = 0;
gdjs.LBCode.GDLeadersObjects1.length = 0;
gdjs.LBCode.GDLeadersObjects2.length = 0;

gdjs.LBCode.eventsList0(runtimeScene);

return;

}

gdjs['LBCode'] = gdjs.LBCode;
