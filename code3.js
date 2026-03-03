gdjs.SonidosCode = {};
gdjs.SonidosCode.localVariables = [];
gdjs.SonidosCode.idToCallbackMap = new Map();
gdjs.SonidosCode.GDfondoObjects1= [];
gdjs.SonidosCode.GDfondoObjects2= [];
gdjs.SonidosCode.GDAjustestitObjects1= [];
gdjs.SonidosCode.GDAjustestitObjects2= [];
gdjs.SonidosCode.GDNewSpriteObjects1= [];
gdjs.SonidosCode.GDNewSpriteObjects2= [];
gdjs.SonidosCode.GDControlesObjects1= [];
gdjs.SonidosCode.GDControlesObjects2= [];
gdjs.SonidosCode.GDGraficosObjects1= [];
gdjs.SonidosCode.GDGraficosObjects2= [];
gdjs.SonidosCode.GDVolverObjects1= [];
gdjs.SonidosCode.GDVolverObjects2= [];
gdjs.SonidosCode.GDSonidoValueObjects1= [];
gdjs.SonidosCode.GDSonidoValueObjects2= [];
gdjs.SonidosCode.GDSonidoObjects1= [];
gdjs.SonidosCode.GDSonidoObjects2= [];
gdjs.SonidosCode.GDMusicaValueObjects1= [];
gdjs.SonidosCode.GDMusicaValueObjects2= [];
gdjs.SonidosCode.GDMusicaObjects1= [];
gdjs.SonidosCode.GDMusicaObjects2= [];
gdjs.SonidosCode.GDFXObjects1= [];
gdjs.SonidosCode.GDFXObjects2= [];
gdjs.SonidosCode.GDFXVAlueObjects1= [];
gdjs.SonidosCode.GDFXVAlueObjects2= [];
gdjs.SonidosCode.GDTitleObjects1= [];
gdjs.SonidosCode.GDTitleObjects2= [];
gdjs.SonidosCode.GDTransitionObjects1= [];
gdjs.SonidosCode.GDTransitionObjects2= [];
gdjs.SonidosCode.GDDarkenObjects1= [];
gdjs.SonidosCode.GDDarkenObjects2= [];


gdjs.SonidosCode.mapOfGDgdjs_9546SonidosCode_9546GDVolverObjects1Objects = Hashtable.newFrom({"Volver": gdjs.SonidosCode.GDVolverObjects1});
gdjs.SonidosCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Volver"), gdjs.SonidosCode.GDVolverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SonidosCode.mapOfGDgdjs_9546SonidosCode_9546GDVolverObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ajustes", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sonido"), gdjs.SonidosCode.GDSonidoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SonidosCode.GDSonidoObjects1.length;i<l;++i) {
    if ( gdjs.SonidosCode.GDSonidoObjects1[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.SonidosCode.GDSonidoObjects1[k] = gdjs.SonidosCode.GDSonidoObjects1[i];
        ++k;
    }
}
gdjs.SonidosCode.GDSonidoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SonidosCode.GDSonidoObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sonido").setNumber((( gdjs.SonidosCode.GDSonidoObjects1.length === 0 ) ? 0 :gdjs.SonidosCode.GDSonidoObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Musica"), gdjs.SonidosCode.GDMusicaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SonidosCode.GDMusicaObjects1.length;i<l;++i) {
    if ( gdjs.SonidosCode.GDMusicaObjects1[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.SonidosCode.GDMusicaObjects1[k] = gdjs.SonidosCode.GDMusicaObjects1[i];
        ++k;
    }
}
gdjs.SonidosCode.GDMusicaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SonidosCode.GDMusicaObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Musica").setNumber((( gdjs.SonidosCode.GDMusicaObjects1.length === 0 ) ? 0 :gdjs.SonidosCode.GDMusicaObjects1[0].Value(null)));
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SonidosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SonidosCode.GDfondoObjects1.length = 0;
gdjs.SonidosCode.GDfondoObjects2.length = 0;
gdjs.SonidosCode.GDAjustestitObjects1.length = 0;
gdjs.SonidosCode.GDAjustestitObjects2.length = 0;
gdjs.SonidosCode.GDNewSpriteObjects1.length = 0;
gdjs.SonidosCode.GDNewSpriteObjects2.length = 0;
gdjs.SonidosCode.GDControlesObjects1.length = 0;
gdjs.SonidosCode.GDControlesObjects2.length = 0;
gdjs.SonidosCode.GDGraficosObjects1.length = 0;
gdjs.SonidosCode.GDGraficosObjects2.length = 0;
gdjs.SonidosCode.GDVolverObjects1.length = 0;
gdjs.SonidosCode.GDVolverObjects2.length = 0;
gdjs.SonidosCode.GDSonidoValueObjects1.length = 0;
gdjs.SonidosCode.GDSonidoValueObjects2.length = 0;
gdjs.SonidosCode.GDSonidoObjects1.length = 0;
gdjs.SonidosCode.GDSonidoObjects2.length = 0;
gdjs.SonidosCode.GDMusicaValueObjects1.length = 0;
gdjs.SonidosCode.GDMusicaValueObjects2.length = 0;
gdjs.SonidosCode.GDMusicaObjects1.length = 0;
gdjs.SonidosCode.GDMusicaObjects2.length = 0;
gdjs.SonidosCode.GDFXObjects1.length = 0;
gdjs.SonidosCode.GDFXObjects2.length = 0;
gdjs.SonidosCode.GDFXVAlueObjects1.length = 0;
gdjs.SonidosCode.GDFXVAlueObjects2.length = 0;
gdjs.SonidosCode.GDTitleObjects1.length = 0;
gdjs.SonidosCode.GDTitleObjects2.length = 0;
gdjs.SonidosCode.GDTransitionObjects1.length = 0;
gdjs.SonidosCode.GDTransitionObjects2.length = 0;
gdjs.SonidosCode.GDDarkenObjects1.length = 0;
gdjs.SonidosCode.GDDarkenObjects2.length = 0;

gdjs.SonidosCode.eventsList0(runtimeScene);
gdjs.SonidosCode.GDfondoObjects1.length = 0;
gdjs.SonidosCode.GDfondoObjects2.length = 0;
gdjs.SonidosCode.GDAjustestitObjects1.length = 0;
gdjs.SonidosCode.GDAjustestitObjects2.length = 0;
gdjs.SonidosCode.GDNewSpriteObjects1.length = 0;
gdjs.SonidosCode.GDNewSpriteObjects2.length = 0;
gdjs.SonidosCode.GDControlesObjects1.length = 0;
gdjs.SonidosCode.GDControlesObjects2.length = 0;
gdjs.SonidosCode.GDGraficosObjects1.length = 0;
gdjs.SonidosCode.GDGraficosObjects2.length = 0;
gdjs.SonidosCode.GDVolverObjects1.length = 0;
gdjs.SonidosCode.GDVolverObjects2.length = 0;
gdjs.SonidosCode.GDSonidoValueObjects1.length = 0;
gdjs.SonidosCode.GDSonidoValueObjects2.length = 0;
gdjs.SonidosCode.GDSonidoObjects1.length = 0;
gdjs.SonidosCode.GDSonidoObjects2.length = 0;
gdjs.SonidosCode.GDMusicaValueObjects1.length = 0;
gdjs.SonidosCode.GDMusicaValueObjects2.length = 0;
gdjs.SonidosCode.GDMusicaObjects1.length = 0;
gdjs.SonidosCode.GDMusicaObjects2.length = 0;
gdjs.SonidosCode.GDFXObjects1.length = 0;
gdjs.SonidosCode.GDFXObjects2.length = 0;
gdjs.SonidosCode.GDFXVAlueObjects1.length = 0;
gdjs.SonidosCode.GDFXVAlueObjects2.length = 0;
gdjs.SonidosCode.GDTitleObjects1.length = 0;
gdjs.SonidosCode.GDTitleObjects2.length = 0;
gdjs.SonidosCode.GDTransitionObjects1.length = 0;
gdjs.SonidosCode.GDTransitionObjects2.length = 0;
gdjs.SonidosCode.GDDarkenObjects1.length = 0;
gdjs.SonidosCode.GDDarkenObjects2.length = 0;


return;

}

gdjs['SonidosCode'] = gdjs.SonidosCode;
