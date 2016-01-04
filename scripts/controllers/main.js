medRecApp.controller("MainCtrl", function($scope, $aside){
  // $scope.list = ["lisinopril", "diazepam", "tylenol"];
  $scope.aside = {
  "title": "MRM FACTORS",
  "content": "Hello Aside<br />This is a multiline message!"
    };
  $scope.leftArray = medRecApp.buildArray('Left', 0);
  $scope.centerArray = medRecApp.buildArray('Lisinopril', 5);
  $scope.rightArray = medRecApp.buildArray('Right', 0);
  $scope.sortableOptions = {
    connectWith: '.connectedItemsExample .list'};
  // Show a basic aside from a controller
  var myAside = $aside({title: 'My Title', content: 'My Content', show: false});

  // // Pre-fetch an external template populated with a custom scope
  // var myOtherAside = $aside({scope: $scope, template: 'aside/docs/aside.demo.tpl.html'});
  // // Show when some event occurs (use $promise property to ensure the template has been loaded)
  // myOtherAside.$promise.then(function() {
  //   myOtherAside.show();
  // });

});