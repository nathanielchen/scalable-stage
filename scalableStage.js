/**
 * Created by NathanielC on 19/02/2015.
 */

/* globals $ */

var stage = $("#Stage");

function scaleStage() 
{
    var minHeight = stage.height();
    var minWidth = stage.width();
	var winW = $(window).width();
	var winH = $(window).height();
	
	var widthScale = winW / minWidth; 
	var heightScale = winH / minHeight;
	
	stage.css({	"transform-origin": 			"0 0",
				"-ms-transform-origin": 		"0 0",
				"-webkit-transform-origin": "0 0",
				"-moz-transform-origin": 	"0 0",
				"-o-transform-origin": 		"0 0"
				});
	if(widthScale<heightScale)
	{
		rescaleStage(widthScale, winW, minWidth);
	}else
	{
		rescaleStage(heightScale, winW, minWidth);
	}
}

function rescaleStage( newScale, winW, minWidth) {
    stage.css({	"transform":				"scale(" + newScale + ")",
				"-o-transform":			"scale(" + newScale + ")",
    			"-ms-transform":		"scale(" + newScale + ")",
    			"-webkit-transform": 	"scale(" + newScale + ")",
    			"-moz-transform": 		"scale(" + newScale + ")"
				});
	var newOrigin = winW / 2 - newScale * minWidth / 2;
    stage.css("left", newOrigin);
}


$(window).on("resize", function () {
    scaleStage();
});

$(document).ready(function () {
    scaleStage();
});
