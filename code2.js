gdjs.ajustesCode = {};
gdjs.ajustesCode.localVariables = [];
gdjs.ajustesCode.idToCallbackMap = new Map();
gdjs.ajustesCode.GDfondoObjects1= [];
gdjs.ajustesCode.GDfondoObjects2= [];
gdjs.ajustesCode.GDAjustestitObjects1= [];
gdjs.ajustesCode.GDAjustestitObjects2= [];
gdjs.ajustesCode.GDSonidosObjects1= [];
gdjs.ajustesCode.GDSonidosObjects2= [];
gdjs.ajustesCode.GDControlesObjects1= [];
gdjs.ajustesCode.GDControlesObjects2= [];
gdjs.ajustesCode.GDGraficosObjects1= [];
gdjs.ajustesCode.GDGraficosObjects2= [];
gdjs.ajustesCode.GDVolverObjects1= [];
gdjs.ajustesCode.GDVolverObjects2= [];
gdjs.ajustesCode.GDAjustesObjects1= [];
gdjs.ajustesCode.GDAjustesObjects2= [];
gdjs.ajustesCode.GDfondo2Objects1= [];
gdjs.ajustesCode.GDfondo2Objects2= [];
gdjs.ajustesCode.GDAjustes2Objects1= [];
gdjs.ajustesCode.GDAjustes2Objects2= [];
gdjs.ajustesCode.GDTransitionObjects1= [];
gdjs.ajustesCode.GDTransitionObjects2= [];
gdjs.ajustesCode.GDDarkenObjects1= [];
gdjs.ajustesCode.GDDarkenObjects2= [];


gdjs.ajustesCode.mapOfGDgdjs_9546ajustesCode_9546GDVolverObjects1Objects = Hashtable.newFrom({"Volver": gdjs.ajustesCode.GDVolverObjects1});
gdjs.ajustesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Volver"), gdjs.ajustesCode.GDVolverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ajustesCode.mapOfGDgdjs_9546ajustesCode_9546GDVolverObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pag Elegir", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fondo"), gdjs.ajustesCode.GDfondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fondo2"), gdjs.ajustesCode.GDfondo2Objects1);
{for(var i = 0, len = gdjs.ajustesCode.GDfondoObjects1.length ;i < len;++i) {
    gdjs.ajustesCode.GDfondoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ajustesCode.GDfondo2Objects1.length ;i < len;++i) {
    gdjs.ajustesCode.GDfondo2Objects1[i].hide();
}
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sonidos"), gdjs.ajustesCode.GDSonidosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ajustesCode.GDSonidosObjects1.length;i<l;++i) {
    if ( gdjs.ajustesCode.GDSonidosObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ajustesCode.GDSonidosObjects1[k] = gdjs.ajustesCode.GDSonidosObjects1[i];
        ++k;
    }
}
gdjs.ajustesCode.GDSonidosObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fondo2"), gdjs.ajustesCode.GDfondo2Objects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.ajustesCode.GDfondo2Objects1.length === 0 ) ? 0 :gdjs.ajustesCode.GDfondo2Objects1[0].getPointX("")), gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.ajustesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ajustesCode.GDfondoObjects1.length = 0;
gdjs.ajustesCode.GDfondoObjects2.length = 0;
gdjs.ajustesCode.GDAjustestitObjects1.length = 0;
gdjs.ajustesCode.GDAjustestitObjects2.length = 0;
gdjs.ajustesCode.GDSonidosObjects1.length = 0;
gdjs.ajustesCode.GDSonidosObjects2.length = 0;
gdjs.ajustesCode.GDControlesObjects1.length = 0;
gdjs.ajustesCode.GDControlesObjects2.length = 0;
gdjs.ajustesCode.GDGraficosObjects1.length = 0;
gdjs.ajustesCode.GDGraficosObjects2.length = 0;
gdjs.ajustesCode.GDVolverObjects1.length = 0;
gdjs.ajustesCode.GDVolverObjects2.length = 0;
gdjs.ajustesCode.GDAjustesObjects1.length = 0;
gdjs.ajustesCode.GDAjustesObjects2.length = 0;
gdjs.ajustesCode.GDfondo2Objects1.length = 0;
gdjs.ajustesCode.GDfondo2Objects2.length = 0;
gdjs.ajustesCode.GDAjustes2Objects1.length = 0;
gdjs.ajustesCode.GDAjustes2Objects2.length = 0;
gdjs.ajustesCode.GDTransitionObjects1.length = 0;
gdjs.ajustesCode.GDTransitionObjects2.length = 0;
gdjs.ajustesCode.GDDarkenObjects1.length = 0;
gdjs.ajustesCode.GDDarkenObjects2.length = 0;

gdjs.ajustesCode.eventsList0(runtimeScene);
gdjs.ajustesCode.GDfondoObjects1.length = 0;
gdjs.ajustesCode.GDfondoObjects2.length = 0;
gdjs.ajustesCode.GDAjustestitObjects1.length = 0;
gdjs.ajustesCode.GDAjustestitObjects2.length = 0;
gdjs.ajustesCode.GDSonidosObjects1.length = 0;
gdjs.ajustesCode.GDSonidosObjects2.length = 0;
gdjs.ajustesCode.GDControlesObjects1.length = 0;
gdjs.ajustesCode.GDControlesObjects2.length = 0;
gdjs.ajustesCode.GDGraficosObjects1.length = 0;
gdjs.ajustesCode.GDGraficosObjects2.length = 0;
gdjs.ajustesCode.GDVolverObjects1.length = 0;
gdjs.ajustesCode.GDVolverObjects2.length = 0;
gdjs.ajustesCode.GDAjustesObjects1.length = 0;
gdjs.ajustesCode.GDAjustesObjects2.length = 0;
gdjs.ajustesCode.GDfondo2Objects1.length = 0;
gdjs.ajustesCode.GDfondo2Objects2.length = 0;
gdjs.ajustesCode.GDAjustes2Objects1.length = 0;
gdjs.ajustesCode.GDAjustes2Objects2.length = 0;
gdjs.ajustesCode.GDTransitionObjects1.length = 0;
gdjs.ajustesCode.GDTransitionObjects2.length = 0;
gdjs.ajustesCode.GDDarkenObjects1.length = 0;
gdjs.ajustesCode.GDDarkenObjects2.length = 0;


return;

}

gdjs['ajustesCode'] = gdjs.ajustesCode;
