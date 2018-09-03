/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.home')
      .controller('HomePageCtrl', HomePageCtrl);
  
    /** @ngInject */
    function HomePageCtrl($scope, $uibModal) {
      /*$scope.showModal = function (item) {
        $uibModal.open({
          animation: false,
          controller: 'HomePageCtrl',
          templateUrl: 'app/pages/home/profileModal.html'
        }).result.then(function (link) {
            item.href = link;
          });
      };*/
    }
  })();
  