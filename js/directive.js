(function () {
    'use strict';

    /* Directives */
    var boot = angular.module('bootColorPicker', []);

    // Add a directive for the bootstrap color picker widget
    // http://www.eyecon.ro/bootstrap-colorpicker/
    boot.directive('bootColorPicker', function() {
        return {
            scope: {
                bootColorPicker: '='
            },
            link: function(scope, element, attrs, controller) {
                element
                    .data('color', scope.bootColorPicker)
                    .colorpicker()
                    .on('changeColor', function (event) {
                        scope.$apply(function () {
                            scope.bootColorPicker = event.color.toHex();
                        });
                    });

                scope.$watch('bootColorPicker', function (newValue, oldValue) {
                    element.data('color', newValue);
                    element.data('colorpicker').update()
                });
            }
        };
    });

}());