gdjs.Proximo_32mapaCode = {};
gdjs.Proximo_32mapaCode.localVariables = [];
gdjs.Proximo_32mapaCode.idToCallbackMap = new Map();
gdjs.Proximo_32mapaCode.GDNewSpriteObjects1= [];
gdjs.Proximo_32mapaCode.GDNewSpriteObjects2= [];
gdjs.Proximo_32mapaCode.GDNewSprite2Objects1= [];
gdjs.Proximo_32mapaCode.GDNewSprite2Objects2= [];
gdjs.Proximo_32mapaCode.GDNewSprite3Objects1= [];
gdjs.Proximo_32mapaCode.GDNewSprite3Objects2= [];
gdjs.Proximo_32mapaCode.GDTransitionObjects1= [];
gdjs.Proximo_32mapaCode.GDTransitionObjects2= [];
gdjs.Proximo_32mapaCode.GDDarkenObjects1= [];
gdjs.Proximo_32mapaCode.GDDarkenObjects2= [];


gdjs.Proximo_32mapaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Proximo_32mapaCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Proximo_32mapaCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.Proximo_32mapaCode.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Proximo_32mapaCode.GDNewSprite3Objects1[k] = gdjs.Proximo_32mapaCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.Proximo_32mapaCode.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pag Elegir", false);
}
}

}


};

gdjs.Proximo_32mapaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Proximo_32mapaCode.GDNewSpriteObjects1.length = 0;
gdjs.Proximo_32mapaCode.GDNewSpriteObjects2.length = 0;
gdjs.Proximo_32mapaCode.GDNewSprite2Objects1.length = 0;
gdjs.Proximo_32mapaCode.GDNewSprite2Objects2.length = 0;
gdjs.Proximo_32mapaCode.GDNewSprite3Objects1.length = 0;
gdjs.Proximo_32mapaCode.GDNewSprite3Objects2.length = 0;
gdjs.Proximo_32mapaCode.GDTransitionObjects1.length = 0;
gdjs.Proximo_32mapaCode.GDTransitionObjects2.length = 0;
gdjs.Proximo_32mapaCode.GDDarkenObjects1.length = 0;
gdjs.Proximo_32mapaCode.GDDarkenObjects2.length = 0;

gdjs.Proximo_32mapaCode.eventsList0(runtimeScene);
gdjs.Proximo_32mapaCode.GDNewSpriteObjects1.length = 0;
gdjs.Proximo_32mapaCode.GDNewSpriteObjects2.length = 0;
gdjs.Proximo_32mapaCode.GDNewSprite2Objects1.length = 0;
gdjs.Proximo_32mapaCode.GDNewSprite2Objects2.length = 0;
gdjs.Proximo_32mapaCode.GDNewSprite3Objects1.length = 0;
gdjs.Proximo_32mapaCode.GDNewSprite3Objects2.length = 0;
gdjs.Proximo_32mapaCode.GDTransitionObjects1.length = 0;
gdjs.Proximo_32mapaCode.GDTransitionObjects2.length = 0;
gdjs.Proximo_32mapaCode.GDDarkenObjects1.length = 0;
gdjs.Proximo_32mapaCode.GDDarkenObjects2.length = 0;


return;

}

gdjs['Proximo_32mapaCode'] = gdjs.Proximo_32mapaCode;
