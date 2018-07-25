'use strict';
var app = app || {};

(function (module) {
  function errorCallback(err){
    console.error(err);
    app.errorView.initErrorPage(err);
  }

  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  }

  Book.prototype.toHtml = function() {
    console.log('tohtml');
    return app.render('book-list-template', this);
  };

  Book.all = [];

  const filterBy = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
  Book.loadAll = rows => {
    Book.all = rows.sort(filterBy('title')).map(book => new Book(book));
    console.log(Book.all);
  };

  Book.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);


  Book.fetchOne = (bookId, callback) =>
    $.get(`${app.ENVIRONMENT.apiUrl}/task/${bookId}`)
      .then(bookData => callback(new Book(bookData)))
      .catch(errorCallback);


  Book.createBook = book =>
    $.post(`${app.ENVIRONMENT.apiUrl}/books/add`, book)
      .then(() => page('/'))
      .catch(errorCallback);

  module.Book = Book;

})(app);