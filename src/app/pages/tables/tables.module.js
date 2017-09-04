/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('candidates', {
        url: '/candidates',
        controller: 'TablesPageCtrl',
        templateUrl: 'app/pages/tables/smart/tables.html',
        title: 'Candidates',
        sidebarMeta: {
          icon: 'ion-ios-people',
          order: 100,
        },
      });
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
