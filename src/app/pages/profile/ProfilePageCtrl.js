(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('ProfilePageCtrl', ProfilePageCtrl);

  /** @ngInject */
  function ProfilePageCtrl($scope, fileReader, $filter, $uibModal) {
    $scope.picture = $filter('profilePicture')('Nasta');

    $scope.removePicture = function () {
      $scope.picture = $filter('appImage')('theme/no-photo.png');
      $scope.noPicture = true;
    };

    $scope.uploadPicture = function () {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();

    };      
    
    $scope.person = {
    	   "id": 1,
    	   "firstName": "Fabian",
    	   "lastName": "Otto",
    	   "email": "mdo@gmail.com",
    	   "age": "28",
    	   "gender": "M",
    	   "skypeId": "fap",
    	   "social": ["fabian.linkedin", "@github"],
    	   "skills": [
    	      {"id": 1, "name": "js", "experience": 4, "level": 5},
    	      {"id": 2, "name": "jquery", "experience": 2, "level": 3}
    	   ]
    	};
    
    $scope.skill = {}; 
    
    $scope.addSkill = function () {
    	$scope.person.skills.push($scope.skill);
    	$scope.skill = {};    
    };
    
    $scope.removeSkill = function (index) {
        $scope.person.skills.splice(index, 1);
      };
    

    $scope.unconnect = function (item) {
      item.href = undefined;
    };

    $scope.showModal = function (item) {
      $uibModal.open({
        animation: false,
        controller: 'ProfileModalCtrl',
        templateUrl: 'app/pages/profile/profileModal.html'
      }).result.then(function (link) {
          item.href = link;
        });
    };

    $scope.getFile = function () {
      fileReader.readAsDataUrl($scope.file, $scope)
          .then(function (result) {
            $scope.picture = result;
          });
    };

    $scope.switches = [true, true, false, true, true, false];
  }

})();
