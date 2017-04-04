// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.globalAlpha.canvascopy
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var offscreenCanvas2 = new OffscreenCanvas(100, 50);
var ctx2 = offscreenCanvas2.getContext('2d');
ctx2.fillStyle = '#0f0';
ctx2.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'copy'
ctx.globalAlpha = 0.51;
ctx.drawImage(offscreenCanvas2, 0, 0);
_assertPixelApprox(offscreenCanvas, 50,25, 0,255,0,130, "50,25", "0,255,0,130", 2);

t.done();

});
done();