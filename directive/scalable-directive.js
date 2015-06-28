/**
 * Created by NathanielC on 19/02/2015.
 */

/* globals $ */

/**
 * @ngInject
 */
function scalableDirective($log) {
    'use strict';
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            //var pageWindow = angular.element($window);
            var stage = $(element);

            function scaleContainer() {
                var minHeight = stage.height();
                var minWidth = stage.width();
                var winH = $(window).height();
                var winW = $(window).width();
                var widthScale = winW / minWidth;
                var heightScale = winH / minHeight;


                stage.css({
                    "transform-origin": "0 0",
                    "-ms-transform-origin": "0 0",
                    "-webkit-transform-origin": "0 0",
                    "-moz-transform-origin": "0 0",
                    "-o-transform-origin": "0 0"
                });

                if (widthScale > 0 && widthScale <= heightScale) {
                    rescaleStage(widthScale, winW, minWidth);


                } else if (widthScale > heightScale) {
                    rescaleStage(heightScale, winW, minWidth);

                }

            }

            function rescaleStage(newScale, winW, minWidth ) {
                stage.css({
                    "transform": "scale(" + newScale + ")",
                    "-o-transform": "scale(" + newScale + ")",
                    "-ms-transform": "scale(" + newScale + ")",
                    "-webkit-transform": "scale(" + newScale + ")",
                    "-moz-transform": "scale(" + newScale + ")"
                });


              var newOrigin = winW / 2 - newScale * minWidth / 2;
              stage.css("left", newOrigin);

            }

            $(window).bind('resize', function () {
                scaleContainer();
            });

            scaleContainer();
        }
    };
}
module.exports = scalableDirective;
