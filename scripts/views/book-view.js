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
    console.log('hello');

    $('#book-detail').empty().append(book.detailHtml());

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



    //Couldn't get update to work so I am commenting out all the update stuff

    // bookView.initUpdatePage = (book) => {
    //   app.showOnly('.update-view');
  
    //   let $form = $('#update-form');

    //   Object.keys(book)
    //     .forEach(key => {
    //       $form.find(`[name="${key}"]`).val(book[key]);
    //     });
    // };
  
    // $('#update-form').on('submit', function (event) {
    //   event.preventDefault();
    //   let bookId = parseInt(this.id.value);
    //   let book = {
    //     id: bookId,
    //     title: this.title.value,
    //     description: this.description.value,
    //     author: this.author.value,
    //     isbn: this.isbn.value,
    //     image_url: this.image_url.value,
    //     genre: this.genre.value
    //   };
    //   app.Book.updateBook(book, () => page(`/`));
    // });

    app.Book.createBook(book);
  });

  // bookView.initUpdatePage = (book) => {
  //   //this needs something else
  //   console.log('update', book);
  // };

  module.bookView = bookView;

})(app);
