'use strict';

var app = app || {};

(function (module) {

  let productionApiUrl = 'https://team-cd-301-week-3.herokuapp.com';

  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };
  
  const templateCache = {};
  module.render = (templateId, dataToRender) => {
    let template = templateCache[templateId];

    if(!template) {
      template = Handlebars.compile(document.getElementById(templateId).innerText);
      templateCache[templateId] = template;
    }
    return template(dataToRender);
  };








})(app);