/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.smartTablePageSize = 25;
    $scope.filters = [
      {
        category: "Status",
        subcategories: [
          "Free",
          "Bench",
          "Busy"
        ]
      },
      {
        category: "Skills",
        subcategories:[
          "Java",
          "Javascript",
          "C++",
          "C#",
          "Python",
          "QA Manual",
          "QA Automation",
          "SM",
          "HR"
        ]
      },
      {
        category: "Experience years",
        subcategories:[
          "1-3",
          "4-6",
          "7-9",
          "10+"
        ]
      },
      {
        category: "Location",
        subcategories:[
          "Buenos Aires",
          "Caracas",
          "Medellín",
          "Montevideo",
          "Paraná",
          "Rosario"
        ]
      },
      {
        category: "Age",
        subcategories:[
          "26 years old",
          "28 years old",
          "30 years old",
          "38 years old"
        ]
      },
      {
        category: "Gender",
        subcategories:[
          "Female",
          "Male"
        ]
      }
    ];
    $scope.smartTableData = [
      {
        id: 1,
        fullName: 'Fabian Pernía',
        expertise: 'Javascript',
        skype: 'ale_stl',
        seniority: 'Ssr 1',
        age: '26'
      },
      {
        id: 2,
        fullName: 'Karen Sánchez',
        expertise: 'QA',
        skype: 'kareola17',
        seniority: 'Ssr 2',
        age: '28'
      },
      {
        id: 3,
        fullName: 'Reinaldo López',
        expertise: 'Java',
        skype: 'odlanierzepol',
        seniority: 'Sr 2',
        age: '29'
      },
      {
        id: 4,
        fullName: 'Allain Paiva',
        expertise: 'Java',
        skype: 'allain_123',
        seniority: 'Sr 2',
        age: '29'
      },
      {
        id: 5,
        fullName: 'Felix García',
        expertise: 'Java',
        skype: 'the_cat_capo_123',
        seniority: 'Ssr 1',
        age: '38'
      },
      {
        id: 6,
        fullName: 'Sophia Romero',
        expertise: 'Java',
        skype: 'hello_3',
        seniority: 'Ssr 1',
        age: '38'
      },
      {
        id: 7,
        fullName: 'Juan Armas',
        expertise: 'Java',
        skype: 'the_123',
        seniority: 'Ssr 2',
        age: '42'
      },{
        id: 8,
        fullName: 'Mark Allen',
        expertise: 'Java',
        skype: 'welcome123_5',
        seniority: 'Ssr 1',
        age: '31'
      },
      {
        id: 9,
        fullName: 'Robert DowneyJr',
        expertise: 'QA',
        skype: 'vpv_525',
        seniority: 'Ssr 1',
        age: '26'
      },
      {
        id: 10,
        fullName: 'Ricardo Arjona',
        expertise: 'C++',
        skype: 'HB3232',
        seniority: 'Ssr 1',
        age: '22'
      },
      {
        id: 11,
        fullName: 'Marilyn Manson',
        expertise: 'C++',
        skype: 'welcome123',
        seniority: 'Team Lead',
        age: '41'
      },
      {
        id: 12,
        fullName: 'Homero Simpson',
        expertise: 'Javascript',
        skype: 'El_programador_1',
        seniority: 'Sr 2',
        age: '24'
      },
      {
        id: 13,
        fullName: 'Jefrey Dean Morgan',
        expertise: 'C#',
        skype: 'Ralph_17',
        seniority: 'Team Lead',
        age: '50'
      },
      {
        id: 14,
        fullName: 'Monty Burns',
        expertise: 'QA',
        skype: 'the_123',
        seniority: 'Ssr 2',
        age: '27'
      },
      {
        id: 15,
        fullName: 'David Beckham',
        expertise: 'Pyton',
        skype: 'snake17',
        seniority: 'Ssr 1',
        age: '25'
      }
    ];

    $scope.editableTableData = $scope.smartTableData.slice(0, 36);
  }
})();
