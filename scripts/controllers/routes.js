/* globals: page */
'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));

page('/books/add', ctx => app.bookView.initAddPage(ctx));

page('/books/:id', ctx => {
  app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage);
});

// page('books/:id/update', ctx => {
//   app.Book.fetchOne(ctx.params.id, app.bookView.initUpdatePage);
// });


//TODO Error page

page();