/* globals: page */
'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));

page('/books/add', ctx => app.bookView.initAddPage(ctx));

page('/book/:id', ctx => {
  console.log('fetch book details');
  app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage);
});

// page('books/:id/update', ctx => {
//   app.Book.fetchOne(ctx.params.id, app.bookView.initUpdatePage);
// });


//TODO Error page

page();