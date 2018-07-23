'use strict';

var app = app || {};
(function (module) {


  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  }

  Book.prototype.toHtml = function() {
    return app.render('book-list-template', this);
  };

  Book.all = [];

  const filterBy = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
  Book.loadAll = rows => {
    Book.all = rows.sort(filterBy('title')).map(book => new Book(book));
  };

  Book.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);












  module.Book = Book;

})(app);