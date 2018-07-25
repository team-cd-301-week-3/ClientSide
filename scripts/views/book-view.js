'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = () => {
    app.showOnly('.book-view');

    $('#book-list').empty();
    app.Book.all.forEach(book => $('#book-list').append(book.toHtml()));
  };

  bookView.initDetailPage = book => {
    app.showOnly('.book-detail');

    $('#book-detail').empty().append(book.toHtml());
  };

  bookView.initAddPage = () => {
    console.log('initAddPage');
    app.showOnly('.form-view');
  };

  $('#add-form').on('submit', function (event){
    event.preventDefault();
  });

  module.bookView = bookView;

})(app);
