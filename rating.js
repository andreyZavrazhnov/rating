angular.module('averageRating', [
])
    .directive('averageRating', function () {
        'use strict';
        return {
            scope: true,
            restrict: 'A',
            controller: function ($scope, $element, $attrs) {
                this.options = angular.fromJson($attrs.options);

                this.ratingAsNumber = function () {
                    var number = this.options.average;
                    if (number >= 5.8 && number <= 6.0) {
                        return 9;
                    }
                    if (number >= 5.5) {
                        return 8;
                    }
                    if (number >= 5.1) {
                        return 7;
                    }
                    if (number >= 4.6) {
                        return 6;
                    }
                    if (number >= 4.0) {
                        return 5;
                    }
                    if (number >= 3.0) {
                        return 4;
                    }
                    if (number >= 2.0) {
                        return 3;
                    }
                    if (number >= 1.0) {
                        return 2;
                    }
                    return 1;
                };

                this.ratingAsText = function () {
                    var ratingNumber = this.ratingAsNumber();
                    if (ratingNumber === 1) {
                        return this.options.rating[0];
                    }
                    if (ratingNumber === 2) {
                        return this.options.rating[1];
                    }
                    if (ratingNumber === 3) {
                        return this.options.rating[2];
                    }
                    if (ratingNumber === 4) {
                        return this.options.rating[3];
                    }
                    if (ratingNumber === 5) {
                        return this.options.rating[4];
                    }
                    if (ratingNumber === 6) {
                        return this.options.rating[5];
                    }
                    return this.options.rating[6];
                };

                $scope.averageRating = this.ratingAsText();


                this.ratingItemsTypes = function () {
                    var average = parseFloat(this.options.average),
                        array = [],
                        roundRating = Math.round(average),
                        amount = Math.floor(average),
                        dif = average - amount,
                        i,
                        temp;

                    if (roundRating > amount && average !== roundRating) {
                        temp = roundRating - 1;
                    } else if (roundRating === amount && average !== roundRating) {
                        temp = roundRating;
                    } else if (roundRating === average) {
                        temp = roundRating - 1;
                    }

                    for (i = 0; i < 6; i++) {
                        if (i === temp) {
                            switch (dif.toFixed(1)) {
                                case '0.0':
                                    array[i] = 'chart-full';
                                    break;
                                case '0.1':
                                    array[i] = 'chart-one';
                                    break;
                                case '0.2':
                                    array[i] = 'chart-two';
                                    break;
                                case '0.3':
                                    array[i] = 'chart-three';
                                    break;
                                case '0.4':
                                    array[i] = 'chart-four';
                                    break;
                                case '0.5':
                                    array[i] = 'chart-five';
                                    break;
                                case '0.6':
                                    array[i] = 'chart-six';
                                    break;
                                case '0.7':
                                    array[i] = 'chart-seven';
                                    break;
                                case '0.8':
                                    array[i] = 'chart-eight';
                                    break;
                                case '0.9':
                                    array[i] = 'chart-nine';
                                    break;
                            }
                        } else if (i >= roundRating) {
                            array[i] = 'chart';
                        } else {
                            array[i] = 'chart-full';
                        }
                    }
                    return array;
                };

                $scope.ratingChart =  this.ratingItemsTypes();

            }

        };
    });