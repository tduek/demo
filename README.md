# [PgSearch][pg_search]
[pg_search]: https://github.com/Casecommons/pg_search

### Files to look at

- [`views/search.js`](./app/assets/javascripts/views/search.js)
- [`collections/search_results.js`](./app/assets/javascripts/collections/search_results)
- [`search.json.jbuilder`](./app/views/api/static_pages/search.json.jbuilder)
- [`user.rb`](./app/models/user.rb)
- [`post.rb`](./app/models/post.rb)
- [`api/static_pages_controller`](./app/controllers/api/static_pages_controller.rb)
- [`search.jst.ejs`](./app/assets/templates/search.jst.ejs)
  - You should probably have subviews instead of just iterating over the `search_results` in the template

## Pagination w/ [Kaminari][kaminari] and infinite scroll
[kaminari]: https://github.com/amatsuda/kaminari

Look at the same files as the PgSearch demo.