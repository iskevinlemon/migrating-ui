var app = angular.module("myApp", []);
app.controller("myAppController", function($scope){

    
    $scope.selectedCountry = "";

    $scope.setSelectedCountry = function(selectedCountry){
        $scope.selectedCountry = selectedCountry;
    }

    $scope.selectCountryOptions = [
        {
            id: 1,
            iconUrl: "icons/Singapore.png",
            value: "Singapore"
        },
        {
            id: 2,
            iconUrl: "icons/Malaysia.png",
            value: "Malaysia"
        },
        {
            id: 3,
            iconUrl: "icons/Indonesia.png",
            value: "Indonesia"
        }
    ];
});