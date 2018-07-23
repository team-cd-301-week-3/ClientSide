'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = () => {
    app.showOnly('.book-view');
    app.Book.all.forEach(book => $('#book-list').append(book.toHtml()));
  };






  module.bookView = bookView;

})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});