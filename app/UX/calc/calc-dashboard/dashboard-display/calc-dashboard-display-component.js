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
    self.hashrate = 0;
    self.maintenanceFeed = 0.0035;
    self.btcPerMhs = 0.02
    self.dados = [];
    self.dados['montante'] = 0;

    function onInit() {
      _populaMeses();
      _justDoIt();
    }

    function _justDoIt() {
        for (let i = 9; i < self.mes.length; i++) {
          console.log(self.mes);
          for (let j = 0; j < self.mes[i].length; j++) {
            // self.dados[i][j]['data'] = new Date(2017, i, j);
            self.dados['montante'] += ((self.hashrate/10)*self.btcPerMhs);
            console.log(self.dados['montante']);
            if (self.mes[i][j]==5) {
              self.hashrate += 400;

            }
          }
        }
    }

    function _populaMeses() {
      for (let i = 9; i < 13; i++) {
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
