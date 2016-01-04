var medRecApp = angular.module("medRecApp", ['ui.sortable', 'ngAnimate', 'mgcrea.ngStrap']);
medRecApp.buildArray = function(name, size) {
  var i, array = [];
  for (i = 1; i <= size; i++){
    array.push({
      text: name + ' ' + i ,
      value: i
    });
  }

  return array;
};