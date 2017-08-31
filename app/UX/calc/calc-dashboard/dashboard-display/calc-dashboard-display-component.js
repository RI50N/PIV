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

    self.$onInit = onInit;
    self.mes = [];

    function onInit() {
      _populaMeses();

      console.log(self.mes);
    }

    function _populaMeses() {
      for (let i = 1; i < 13; i++) {
        self.mes[i] = _getDiasMes(i, 2017);
      }
    }

    function _getDiasMes(month, year) {
      month--;
      var date = new Date(year, month, 1);
      var days = [];
      while (date.getMonth() === month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
      }
      return days;
    }
  }
}());
