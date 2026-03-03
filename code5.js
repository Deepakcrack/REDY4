gdjs.PruebaCode = {};
gdjs.PruebaCode.localVariables = [];
gdjs.PruebaCode.idToCallbackMap = new Map();
gdjs.PruebaCode.GDMarkerObjects1= [];
gdjs.PruebaCode.GDMarkerObjects2= [];
gdjs.PruebaCode.GDAjustes3Objects1= [];
gdjs.PruebaCode.GDAjustes3Objects2= [];
gdjs.PruebaCode.GDSonidosObjects1= [];
gdjs.PruebaCode.GDSonidosObjects2= [];
gdjs.PruebaCode.GDControllesObjects1= [];
gdjs.PruebaCode.GDControllesObjects2= [];
gdjs.PruebaCode.GDSettingsObjects1= [];
gdjs.PruebaCode.GDSettingsObjects2= [];
gdjs.PruebaCode.GDSonidosTituloObjects1= [];
gdjs.PruebaCode.GDSonidosTituloObjects2= [];
gdjs.PruebaCode.GDVolverObjects1= [];
gdjs.PruebaCode.GDVolverObjects2= [];
gdjs.PruebaCode.GDTransitionObjects1= [];
gdjs.PruebaCode.GDTransitionObjects2= [];
gdjs.PruebaCode.GDDarkenObjects1= [];
gdjs.PruebaCode.GDDarkenObjects2= [];


gdjs.PruebaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.PruebaCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.PruebaCode.GDSettingsObjects1);
{for(var i = 0, len = gdjs.PruebaCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.PruebaCode.GDMarkerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.PruebaCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.PruebaCode.GDSettingsObjects1[i].hide();
}
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sonidos"), gdjs.PruebaCode.GDSonidosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PruebaCode.GDSonidosObjects1.length;i<l;++i) {
    if ( gdjs.PruebaCode.GDSonidosObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.PruebaCode.GDSonidosObjects1[k] = gdjs.PruebaCode.GDSonidosObjects1[i];
        ++k;
    }
}
gdjs.PruebaCode.GDSonidosObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.PruebaCode.GDMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.PruebaCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.PruebaCode.GDMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}
}

}


};

gdjs.PruebaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PruebaCode.GDMarkerObjects1.length = 0;
gdjs.PruebaCode.GDMarkerObjects2.length = 0;
gdjs.PruebaCode.GDAjustes3Objects1.length = 0;
gdjs.PruebaCode.GDAjustes3Objects2.length = 0;
gdjs.PruebaCode.GDSonidosObjects1.length = 0;
gdjs.PruebaCode.GDSonidosObjects2.length = 0;
gdjs.PruebaCode.GDControllesObjects1.length = 0;
gdjs.PruebaCode.GDControllesObjects2.length = 0;
gdjs.PruebaCode.GDSettingsObjects1.length = 0;
gdjs.PruebaCode.GDSettingsObjects2.length = 0;
gdjs.PruebaCode.GDSonidosTituloObjects1.length = 0;
gdjs.PruebaCode.GDSonidosTituloObjects2.length = 0;
gdjs.PruebaCode.GDVolverObjects1.length = 0;
gdjs.PruebaCode.GDVolverObjects2.length = 0;
gdjs.PruebaCode.GDTransitionObjects1.length = 0;
gdjs.PruebaCode.GDTransitionObjects2.length = 0;
gdjs.PruebaCode.GDDarkenObjects1.length = 0;
gdjs.PruebaCode.GDDarkenObjects2.length = 0;

gdjs.PruebaCode.eventsList0(runtimeScene);
gdjs.PruebaCode.GDMarkerObjects1.length = 0;
gdjs.PruebaCode.GDMarkerObjects2.length = 0;
gdjs.PruebaCode.GDAjustes3Objects1.length = 0;
gdjs.PruebaCode.GDAjustes3Objects2.length = 0;
gdjs.PruebaCode.GDSonidosObjects1.length = 0;
gdjs.PruebaCode.GDSonidosObjects2.length = 0;
gdjs.PruebaCode.GDControllesObjects1.length = 0;
gdjs.PruebaCode.GDControllesObjects2.length = 0;
gdjs.PruebaCode.GDSettingsObjects1.length = 0;
gdjs.PruebaCode.GDSettingsObjects2.length = 0;
gdjs.PruebaCode.GDSonidosTituloObjects1.length = 0;
gdjs.PruebaCode.GDSonidosTituloObjects2.length = 0;
gdjs.PruebaCode.GDVolverObjects1.length = 0;
gdjs.PruebaCode.GDVolverObjects2.length = 0;
gdjs.PruebaCode.GDTransitionObjects1.length = 0;
gdjs.PruebaCode.GDTransitionObjects2.length = 0;
gdjs.PruebaCode.GDDarkenObjects1.length = 0;
gdjs.PruebaCode.GDDarkenObjects2.length = 0;


return;

}

gdjs['PruebaCode'] = gdjs.PruebaCode;
