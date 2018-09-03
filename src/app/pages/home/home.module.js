/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.home', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                title: 'Inicio',
                templateUrl: 'app/pages/home/home.html',
                sidebarMeta: {
                    order: 800,
                },
            });
    }
})();