(function () {
    'use strict';

    /* Directives */
    var boot = angular.module('bootColorPicker', []);

    // Add a directive for the bootstrap color picker widget
    // http://www.eyecon.ro/bootstrap-colorpicker/
    boot.directive('bootColorPicker', ['$parse', function ($parse) {
        return {
            scope: {
                bootColorPicker: '=',
                bootColorChange: '&'
            },
            link: function(scope, element, attrs, controller) {
                var fn;

                scope.bootColorPicker = scope.bootColorPicker || '#000';

                element
                    .data('color', scope.bootColorPicker)
                    .colorpicker()
                    .on('changeColor', function (event) {
                        scope.$apply(function () {
                            scope.bootColorPicker = event.color.toHex();
                        });
                    })
                    .on('hide', function (event) {
                        scope.bootColorChange({$event: event});
                    });

                scope.$watch('bootColorPicker', function (newValue, oldValue) {
                    element.data('color', newValue);
                    element.data('colorpicker').update();
                });
            }
        };
    }]);

}());