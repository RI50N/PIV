(function() {
  'use strict';

  angular
    .module('calc')
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
    self.apresentaDados = [];
    self.montanteTotal = 0;
    self.windowHeight;


    function onInit() {
      _populaMeses();
      _justDoIt();
    }

    function setWindowHeight() {
      self.windowHeight = window.innerHeight;
      console.log(self.windowHeight);
    }
    window.addEventListener("resize", setWindowHeight, false);

    function _justDoIt() {
      self.mes.forEach(function(meses, indexMes) {
        self.mes[indexMes].forEach(function(dias, indexDias) {
          self.montanteTotal += ((self.hashrate / 10) * self.btcPerMhs);

          self.mes[indexMes][indexDias]['lucroDia'] = ((self.hashrate / 10) * self.btcPerMhs);
          self.mes[indexMes][indexDias]['investimentoNoDia'] = 0;

          while (self.montanteTotal > 1.20) {
            // while (self.montanteTotal>1.20 && (((self.hashrate/10)*self.btcPerMhs) < 10) ) {
            self.mes[indexMes][indexDias]['investimentoNoDia'] += 1.20;
            self.montanteTotal -= 1.20;
            self.hashrate += 10;
          }
          if (indexDias == 5) {
            self.hashrate += 400;
          }

          self.apresentaDados.push({
            "data": indexDias + "/" + indexMes + "/" + 2017,
            "lucroDia": self.mes[indexMes][indexDias]['lucroDia'],
            "invbestimentoDia": self.mes[indexMes][indexDias]['investimentoNoDia']
          });

        });
      });

      console.log(self.apresentaDados);
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
        days[date.getDate()] = [];
        date.setDate(date.getDate() + 1);
      }
      return days;
    }
  }
}());
