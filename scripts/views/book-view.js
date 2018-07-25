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

    let book = {
      title: this.title.value,
      author: this.author.value,
      isbn: this.isbn.value,
      image_url: this.image_url.value,
      description: this.description.value,
    };

    app.Book.createBook(book);
  });

  // bookView.initUpdatePage = (book) => {
  //   //this needs something else
  //   console.log('update', book);
  // };

  module.bookView = bookView;

})(app);
