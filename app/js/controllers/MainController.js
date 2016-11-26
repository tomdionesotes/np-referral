'use strict;';

npRefer.controller('MainController', function($scope){
    $scope.begin = 'Get started';

    $scope.categories = [
        {
            name: "Foreign Policy",
            issues: ["Iran", "China", "Russia", "Peace"]
        },
        {
            name: "Work and Family",
            issues: ["Minimum Wage", "Childcare"]
        },
        {
            name: "Women",
            issues: ["Access to Family Planning", "Equal Pay for Equal Work", "Protections against sexual abuse"]
        },
        {
            name: "Immigration",
            issues: ["Protections for dreamers", "Protections for refugees", "Protections for mulsim immigrants"]},
        {
            name: "Human Rights",
            issues: ["Equality for minorities", "Equality for LGBT americans "]},
        {
            name: "Environment",
            issues: ["Climate Change"]},
        {
            name: "Healthcare",
            issues: ["Protect the ACA"]},
        {
            name: "Housing",
            issues: ["Protect affordable housing"]}
        ];
});