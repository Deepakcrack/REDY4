gdjs.InstruccionesCode = {};
gdjs.InstruccionesCode.localVariables = [];
gdjs.InstruccionesCode.idToCallbackMap = new Map();
gdjs.InstruccionesCode.GDNewSpriteObjects1= [];
gdjs.InstruccionesCode.GDNewSpriteObjects2= [];
gdjs.InstruccionesCode.GDInstruccionesObjects1= [];
gdjs.InstruccionesCode.GDInstruccionesObjects2= [];
gdjs.InstruccionesCode.GDNewSprite2Objects1= [];
gdjs.InstruccionesCode.GDNewSprite2Objects2= [];
gdjs.InstruccionesCode.GDVolverObjects1= [];
gdjs.InstruccionesCode.GDVolverObjects2= [];
gdjs.InstruccionesCode.GDTransitionObjects1= [];
gdjs.InstruccionesCode.GDTransitionObjects2= [];
gdjs.InstruccionesCode.GDDarkenObjects1= [];
gdjs.InstruccionesCode.GDDarkenObjects2= [];


gdjs.InstruccionesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Volver"), gdjs.InstruccionesCode.GDVolverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstruccionesCode.GDVolverObjects1.length;i<l;++i) {
    if ( gdjs.InstruccionesCode.GDVolverObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.InstruccionesCode.GDVolverObjects1[k] = gdjs.InstruccionesCode.GDVolverObjects1[i];
        ++k;
    }
}
gdjs.InstruccionesCode.GDVolverObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pag Elegir", false);
}
}

}


};

gdjs.InstruccionesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstruccionesCode.GDNewSpriteObjects1.length = 0;
gdjs.InstruccionesCode.GDNewSpriteObjects2.length = 0;
gdjs.InstruccionesCode.GDInstruccionesObjects1.length = 0;
gdjs.InstruccionesCode.GDInstruccionesObjects2.length = 0;
gdjs.InstruccionesCode.GDNewSprite2Objects1.length = 0;
gdjs.InstruccionesCode.GDNewSprite2Objects2.length = 0;
gdjs.InstruccionesCode.GDVolverObjects1.length = 0;
gdjs.InstruccionesCode.GDVolverObjects2.length = 0;
gdjs.InstruccionesCode.GDTransitionObjects1.length = 0;
gdjs.InstruccionesCode.GDTransitionObjects2.length = 0;
gdjs.InstruccionesCode.GDDarkenObjects1.length = 0;
gdjs.InstruccionesCode.GDDarkenObjects2.length = 0;

gdjs.InstruccionesCode.eventsList0(runtimeScene);
gdjs.InstruccionesCode.GDNewSpriteObjects1.length = 0;
gdjs.InstruccionesCode.GDNewSpriteObjects2.length = 0;
gdjs.InstruccionesCode.GDInstruccionesObjects1.length = 0;
gdjs.InstruccionesCode.GDInstruccionesObjects2.length = 0;
gdjs.InstruccionesCode.GDNewSprite2Objects1.length = 0;
gdjs.InstruccionesCode.GDNewSprite2Objects2.length = 0;
gdjs.InstruccionesCode.GDVolverObjects1.length = 0;
gdjs.InstruccionesCode.GDVolverObjects2.length = 0;
gdjs.InstruccionesCode.GDTransitionObjects1.length = 0;
gdjs.InstruccionesCode.GDTransitionObjects2.length = 0;
gdjs.InstruccionesCode.GDDarkenObjects1.length = 0;
gdjs.InstruccionesCode.GDDarkenObjects2.length = 0;


return;

}

gdjs['InstruccionesCode'] = gdjs.InstruccionesCode;
