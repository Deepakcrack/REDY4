gdjs.nivel0Code = {};
gdjs.nivel0Code.localVariables = [];
gdjs.nivel0Code.idToCallbackMap = new Map();
gdjs.nivel0Code.GDNewSpriteObjects1= [];
gdjs.nivel0Code.GDNewSpriteObjects2= [];
gdjs.nivel0Code.GDbloque_9595colisionObjects1= [];
gdjs.nivel0Code.GDbloque_9595colisionObjects2= [];
gdjs.nivel0Code.GDNewSprite2Objects1= [];
gdjs.nivel0Code.GDNewSprite2Objects2= [];
gdjs.nivel0Code.GDpuertaObjects1= [];
gdjs.nivel0Code.GDpuertaObjects2= [];
gdjs.nivel0Code.GDNewTileMapObjects1= [];
gdjs.nivel0Code.GDNewTileMapObjects2= [];
gdjs.nivel0Code.GDNewTileMap2Objects1= [];
gdjs.nivel0Code.GDNewTileMap2Objects2= [];
gdjs.nivel0Code.GDNewTiledSpriteObjects1= [];
gdjs.nivel0Code.GDNewTiledSpriteObjects2= [];
gdjs.nivel0Code.GDbackgroundObjects1= [];
gdjs.nivel0Code.GDbackgroundObjects2= [];
gdjs.nivel0Code.GDTransitionObjects1= [];
gdjs.nivel0Code.GDTransitionObjects2= [];
gdjs.nivel0Code.GDDarkenObjects1= [];
gdjs.nivel0Code.GDDarkenObjects2= [];


gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDpuertaObjects1Objects = Hashtable.newFrom({"puerta": gdjs.nivel0Code.GDpuertaObjects1});
gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.nivel0Code.GDNewSpriteObjects1});
gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDpuertaObjects1Objects = Hashtable.newFrom({"puerta": gdjs.nivel0Code.GDpuertaObjects1});
gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.nivel0Code.GDNewSpriteObjects1});
gdjs.nivel0Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.nivel0Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel0Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.nivel0Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.nivel0Code.GDNewSpriteObjects1[k] = gdjs.nivel0Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.nivel0Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivel0Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.nivel0Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("caminar");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.nivel0Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel0Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs.nivel0Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.nivel0Code.GDNewSpriteObjects1[k] = gdjs.nivel0Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.nivel0Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivel0Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.nivel0Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("descanso");
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.nivel0Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel0Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.nivel0Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.nivel0Code.GDNewSpriteObjects1[k] = gdjs.nivel0Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.nivel0Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nivel0Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.nivel0Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("saltar");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.nivel0Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("puerta"), gdjs.nivel0Code.GDpuertaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDpuertaObjects1Objects, gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.nivel0Code.GDpuertaObjects1 */
{for(var i = 0, len = gdjs.nivel0Code.GDpuertaObjects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDpuertaObjects1[i].getBehavior("Animation").setAnimationName("puerta#1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.nivel0Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("puerta"), gdjs.nivel0Code.GDpuertaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDpuertaObjects1Objects, gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Proximo mapa", false);
}
}

}


};

gdjs.nivel0Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nivel0Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel0Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel0Code.GDbloque_9595colisionObjects1.length = 0;
gdjs.nivel0Code.GDbloque_9595colisionObjects2.length = 0;
gdjs.nivel0Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel0Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel0Code.GDpuertaObjects1.length = 0;
gdjs.nivel0Code.GDpuertaObjects2.length = 0;
gdjs.nivel0Code.GDNewTileMapObjects1.length = 0;
gdjs.nivel0Code.GDNewTileMapObjects2.length = 0;
gdjs.nivel0Code.GDNewTileMap2Objects1.length = 0;
gdjs.nivel0Code.GDNewTileMap2Objects2.length = 0;
gdjs.nivel0Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.nivel0Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.nivel0Code.GDbackgroundObjects1.length = 0;
gdjs.nivel0Code.GDbackgroundObjects2.length = 0;
gdjs.nivel0Code.GDTransitionObjects1.length = 0;
gdjs.nivel0Code.GDTransitionObjects2.length = 0;
gdjs.nivel0Code.GDDarkenObjects1.length = 0;
gdjs.nivel0Code.GDDarkenObjects2.length = 0;

gdjs.nivel0Code.eventsList0(runtimeScene);
gdjs.nivel0Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel0Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel0Code.GDbloque_9595colisionObjects1.length = 0;
gdjs.nivel0Code.GDbloque_9595colisionObjects2.length = 0;
gdjs.nivel0Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel0Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel0Code.GDpuertaObjects1.length = 0;
gdjs.nivel0Code.GDpuertaObjects2.length = 0;
gdjs.nivel0Code.GDNewTileMapObjects1.length = 0;
gdjs.nivel0Code.GDNewTileMapObjects2.length = 0;
gdjs.nivel0Code.GDNewTileMap2Objects1.length = 0;
gdjs.nivel0Code.GDNewTileMap2Objects2.length = 0;
gdjs.nivel0Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.nivel0Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.nivel0Code.GDbackgroundObjects1.length = 0;
gdjs.nivel0Code.GDbackgroundObjects2.length = 0;
gdjs.nivel0Code.GDTransitionObjects1.length = 0;
gdjs.nivel0Code.GDTransitionObjects2.length = 0;
gdjs.nivel0Code.GDDarkenObjects1.length = 0;
gdjs.nivel0Code.GDDarkenObjects2.length = 0;


return;

}

gdjs['nivel0Code'] = gdjs.nivel0Code;
