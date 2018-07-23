'use strict';

var app = app || {};

(function (module) {

  let productionApiUrl = 'https://team-cd-301-week-3.herokuapp.com';

  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };









})(app);