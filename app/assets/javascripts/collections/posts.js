Demo.Collections.Posts = Backbone.Collection.extend({

	model: Demo.Models.Post,

	url: "/api/posts",

});