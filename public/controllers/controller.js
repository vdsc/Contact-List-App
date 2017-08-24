
var app = angular.module('myApp', []);
app.controller('AppCtrl', function($scope, $http) {
    console.log("hello from controller");
    $scope.myObj = {
    
    "font-size" : "15px",
    
  }

    var refresh = function(){ //refresh is for refreshing the page after post data
        $http({
            method: 'GET',
            url: '/contactlist'
        }).then(function(response){
            console.log("I got the data");
            console.log(response);
            $scope.contactList = response.data;
            $scope.contact ={};
        });
    };

    refresh(); //to get data when the app is run first time after every page reload

    // //dummy data testing before mongodb was used
    // person1 = {
    //     name: "tim",
    //     email:"tim@email1.com",
    //     number:"(111) 111-1111",
    // };
    //  person2 = {
    //     name: "emily",
    //     email:"emily@email2.com",
    //     number:"(222) 222-2222",
    // };
    //  person3 = {
    //     name: "harvey",
    //     email:"harvey@email1.com",
    //     number:"(333) 333-3333",
    // };

    // var contactList =[person1, person2, person3];
    // $scope.contactList = contactList;

    $scope.addContact = function(){
        console.log($scope.contact);
        
        $http.post('/contactlist', $scope.contact).then(function(response){
            console.log(response);
            refresh(); // refresh to post data in the table
        });
          
        
    };

    $scope.remove = function(id){
        console.log(id);
        $http.delete('/contactlist/' + id).then(function(response){
            console.log("edit "+ response);
            refresh(); // refresh to post data in the table
        });

    };

    $scope.edit = function(id){
        console.log(id);
        $http.get('/contactlist/' + id).then(function(response){
            console.log(response);
            $scope.contact = response.data;
        });
    };

    $scope.update = function(id){
        console.log($scope.contact._id);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response){
            console.log(response);
            refresh();
            //$scope.contact = response.data;
        });
    };

    $scope.deselect = function(){
        $scope.contact ={};
    };


});



