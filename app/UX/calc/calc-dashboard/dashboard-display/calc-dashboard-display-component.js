(function() {
  'use strict';

  angular
    .module('listaTelefonica')
    .component('calcDashboard', {
      controller: Controller,
      templateUrl: 'app/UX/calc/calc-dashboard/dashboard-display/calc-dashboard-display-template.html',
    });

  function Controller() {
    var self = this;
  }
}());
