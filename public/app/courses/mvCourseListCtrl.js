angular.module('app').controller('mvCourseListCtrl', function($scope, mvCachedCourses) {
    $scope.courses = mvCachedCourses.query();

    $scope.sortOptions = [{value:"title", text:"Sort By Title"},
        {value: "published", text: "Sort by Publish Data"}];

    $scope.sortOrder = $scope.sortOptions[0].value;
})