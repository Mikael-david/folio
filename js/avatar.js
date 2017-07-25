var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("01DA2F134A244931848CB6AC1669CED8");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.avatar();
	stage = new lib.Stage(canvas);
	stage.addChild(exportRoot);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih=window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
			if(isResp) {
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
					sRatio = lastS;
				}
				else if(!isScale) {
					if(iw<w || ih<h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			canvas.width = w*pRatio*sRatio;
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
		}
	}
	makeResponsive(false,'both',false,1);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAAQQgcgTgNggIDUAAQgNAggdATQgdAUgkAAQgjAAgdgUg");
	this.shape.setTransform(29.8,57.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D555B").s().p("AglC9IgXgIQg7gPgtgsQgsgrgRg7QgEgLAAgNIAAi9IAKAAIAABsQAAAqAdAdQAdAcAqAAIDvAAQAqAAAdgcQAdgdAAgqIAAhsIAKAAIAAC9QAAANgDALQgSA7gtArQgsAsg7APIgXAIQgUAFgSAAQgSAAgTgFg");
	this.shape_1.setTransform(29.8,49.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D555B").s().p("ABZBoQg7AAgggDQhbgJgrgcQgqgcAHhIIAPhDQANAwCeA1QBQAZBOARQgEAQgNAQQgYAggoAAIgDAAg");
	this.shape_2.setTransform(26,6,1,1,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D555B").s().p("AgJB7QhCgJg6ggQg3gegXgkQgegugHhBIAAg3QAvA4BWgVQAqgLAhgXIDPBLIBSCEQgLAVgjASQhFAlh0gJQgDAFgFAGQgKALgNAFQANgQgJgNg");
	this.shape_3.setTransform(27.9,16.2,1,1,-15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#494444").ss(2,1).p("AAjATQAAgOgIgJQgJgLgNgCQgLgCgLAFQgLAFgGAJ");
	this.shape_4.setTransform(41.1,40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#494444").ss(2,1).p("AgiATQAAgOAIgJQAJgLANgCQALgCALAFQALAFAGAJ");
	this.shape_5.setTransform(18.5,40.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#ECBB8C").ss(2,1).p("AAYgCIgMADQgMADgKgDIgNgD");
	this.shape_6.setTransform(29.8,46.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9D8B0").s().p("AibD7QhAhBAAhbIAAi9QAAhbBAhAQBBhBBaAAQBbAABABBQBBBAAABbIAAC9QAABbhBBBQhABAhbAAQhaAAhBhAg");
	this.shape_7.setTransform(29.8,35.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECCBA4").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAPgOATAAQAVAAAOAOQAOAOAAAUQAAAUgOAPQgOAPgVAAQgUAAgOgPg");
	this.shape_8.setTransform(7.9,40.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECCBA4").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAPgOATAAQAVAAAOAOQAOAOAAAUQAAAUgOAPQgOAPgVAAQgTAAgPgPg");
	this.shape_9.setTransform(51.8,40.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D555B").s().p("Ai+C/QhPhPAAhwQAAhvBPhPQBPhPBvAAQBwAABPBPQBPBPAABvQAABwhPBPQhPBPhwAAQhuAAhQhPg");
	this.shape_10.setTransform(29.8,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(0,0,56.8,68.7), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494F6A").s().p("AhIAXQgfgdgBgqIAPgDQABAlAZAZQAbAaAkAAQAlAAAagaQAbgZAAglIAPADQgCAqgeAdQgeAdgrAAQgpAAgfgdg");
	this.shape.setTransform(10.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,21,10.4), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#12100B").s().p("Ag7AFIAAgTQAtAKAOAAQAPAAAtgKIAAATQgtAKgPAAQgOAAgtgKg");
	this.shape.setTransform(6,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,12,3), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494F6A").s().p("Ag2AKIAAgTIBtAAIAAATg");
	this.shape.setTransform(5.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,11,2), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494F6A").s().p("Ag2AKIAAgTIBtAAIAAATg");
	this.shape.setTransform(5.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,11,2), null);


(lib.cercle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98878F").s().p("AlhFiQiSiTAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAQjOAAiTiSg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cercle, new cjs.Rectangle(0,0,100,100), null);


(lib.tete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.head();
	this.instance.parent = this;
	this.instance.setTransform(28.4,34.4,1,1,0,0,0,28.4,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tete, new cjs.Rectangle(0,0,56.8,68.7), null);


(lib.corp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Path_13();
	this.instance.parent = this;
	this.instance.setTransform(26,8.5,1,1,0,0,0,6,1.5);
	this.instance.alpha = 0.129;

	this.instance_1 = new lib.Path_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46.5,38,1,1,0,0,0,5.5,1);
	this.instance_1.alpha = 0.898;

	this.instance_2 = new lib.Path_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.5,38,1,1,0,0,0,5.5,1);
	this.instance_2.alpha = 0.898;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9D8B0").s().p("AgqBSQgRgRAAgZIAAiLIB3AAIAACLQAAAZgSARQgRASgZAAQgYAAgSgSg");
	this.shape.setTransform(26,10);

	this.instance_3 = new lib.Path_15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(26,16.3,1,1,0,0,0,10.5,5.2);
	this.instance_3.alpha = 0.898;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18212F").s().p("AhyCwIgigKIgBhKIhuAAIAAhaQAAhIAxg3QAxg1BIgIQAAAlAbAaQAaAaAkAAQAlAAAbgaQAZgaABglQBIAIAxA1QAxA3AABIIAABaIhuAAIAABJQgOAFgbAGQg0ALg5AAQhCAAgwgLg");
	this.shape_1.setTransform(26,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9D8B0").s().p("AifCiIg9gZQgPgHgLgJQgNgNAAgPIAAhaQAAhOA3g4QA5g3BOAAICLAAQBPAAA3A3QA4A4AABOIAABaQAAAbgnARQgWANgnAMQhOAZhSAAQhSAAhNgZg");
	this.shape_2.setTransform(26,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.corp, new cjs.Rectangle(0,0,52,48.5), null);


// stage content:
(lib.avatar = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Calque 4
	this.instance = new lib.tete();
	this.instance.parent = this;
	this.instance.setTransform(95.3,86.5,1.221,1.221,0,0,0,28.4,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,x:95.2,y:67.6},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:64.5},5).wait(1));

	// Calque 1
	this.instance_1 = new lib.corp();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.6,117,1,1,0,0,0,26,24.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({y:114},5).wait(1));

	// Calque 2
	this.instance_2 = new lib.cercle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.6,88.3,0.044,0.044,0,0,0,50,50);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 79, 169, 237, 0)];
	this.instance_2.cache(-2,-2,104,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1},20,cjs.Ease.backOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156.1,129.5,69.4,83.9);
// library properties:
lib.properties = {
	id: '01DA2F134A244931848CB6AC1669CED8',
	width: 191,
	height: 170,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['01DA2F134A244931848CB6AC1669CED8'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;