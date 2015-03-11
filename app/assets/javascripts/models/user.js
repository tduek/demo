Demo.Models.User = Backbone.Model.extend({

	parse: function (resp) {
		if (resp.posts) {
			this.posts().set(resp.posts, { parse: true });
			delete resp.posts;
		}

		return resp;
	},

	posts: function () {
		if (!this._posts) {
			this._posts = new Demo.Collections.Posts();
		}

		return this._posts;
	}

});