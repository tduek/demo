# [PgSearch][pg_search]
[pg_search]: https://github.com/Casecommons/pg_search

### Files to look at

- [`views/search.js`](./app/assets/javascripts/views/search.js)
- [`collections/search_results.js`](./app/assets/javascripts/collections/search_results)
- [`search.json.jbuilder`](./app/views/api/static_pages/search.json.jbuilder)
- [`search.jst.ejs`](./app/assets/templates/search.jst.ejs)
  - You should probably have subviews instead of just iterating over the `search_results` in the template
