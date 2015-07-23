describe('averageRating -', function () {
    'use strict';

    var dirTpl4,
        dirTpl0,
        dirTpl2,
        dirTpl9,
        $scope,
        htmlTemplate4 ='<div average-rating data-options=\'{"average": 4, "rating": ["oops", "cool", "fancy", "great", "awesome", "amazing", "come on", "youhoo", "oh yeah"]}\'>',
        htmlTemplate0 ='<div average-rating data-options=\'{"average": 0, "rating": ["oops", "cool", "fancy", "great", "awesome", "amazing", "come on", "youhoo", "oh yeah"]}\'>',
        htmlTemplate2 ='<div average-rating data-options=\'{"average": 2, "rating": ["oops", "cool", "fancy", "great", "awesome", "amazing", "come on", "youhoo", "oh yeah"]}\'>',
        htmlTemplate9 ='<div average-rating data-options=\'{"average": 9, "rating": ["oops", "cool", "fancy", "great", "awesome", "amazing", "come on", "youhoo", "oh yeah"]}\'>';

    beforeEach(module('averageRating'));
    beforeEach(inject(function ($compile, $rootScope) {
        $scope = $rootScope;
        dirTpl4 = angular.element(htmlTemplate4);
        dirTpl0 = angular.element(htmlTemplate0);
        dirTpl9 = angular.element(htmlTemplate9);
        dirTpl2 = angular.element(htmlTemplate2);
        $compile(dirTpl4)($rootScope);
        $compile(dirTpl0)($rootScope);
        $compile(dirTpl9)($rootScope);
        $compile(dirTpl2)($rootScope);
        $scope.$digest();
    }));

    describe('Glance Directive', function () {
        it('should equal awesome', function () {
            expect(dirTpl4.controller('averageRating').ratingAsText()).toBe("awesome");
        });

        it('should equal oops', function () {
            expect(dirTpl0.controller('averageRating').ratingAsText()).toBe("oops");
        });

        it('should equal come on', function () {
            expect(dirTpl9.controller('averageRating').ratingAsText()).toBe("come on");
        });

        it('should equal fancy', function () {
            expect(dirTpl2.controller('averageRating').ratingAsText()).toBe("fancy");
        });

        it('should equal 5', function () {
            expect(dirTpl4.controller('averageRating').ratingAsNumber()).toBe(5);
        });

        it('should equal 4 mal chart-full, und 2 mal chart', function () {
            expect(dirTpl4.controller('averageRating').ratingItemsTypes()).toEqual([ 'chart-full', 'chart-full', 'chart-full', 'chart-full', 'chart', 'chart' ]);
        });

        it('should equal 4 mal chart-full, und 2 mal chart', function () {
            expect(dirTpl2.controller('averageRating').ratingItemsTypes()).toEqual([ 'chart-full', 'chart-full', 'chart', 'chart', 'chart', 'chart'  ]);
        });

        it('should equal 1', function () {
            expect(dirTpl0.controller('averageRating').ratingAsNumber()).toBe(1);
        });

        it('should equal 6 mal chart', function () {
            expect(dirTpl0.controller('averageRating').ratingItemsTypes()).toEqual([ 'chart', 'chart', 'chart', 'chart', 'chart', 'chart' ]);
        });

        it('should equal 8', function () {
            expect(dirTpl9.controller('averageRating').ratingAsNumber()).toBe(8);
        });

        it('should equal 6 mal chart', function () {
            expect(dirTpl9.controller('averageRating').ratingItemsTypes()).toEqual([ 'chart-full', 'chart-full', 'chart-full', 'chart-full', 'chart-full', 'chart-full' ]);
        });
    });
});