Demo.Views.PostsIndex = Backbone.View.extend({

	initialize: function () {
		this.collection = new Demo.Collections.Posts();
		this.collection.fetch();
		this.listenTo(this.collection, "sync", this.render);
		this.subviews = [];
	},

	template: JST["posts/index"],

	render: function () {
		var content = this.template({ posts: this.collection });
		this.$el.html(content);

		this.renderPosts();

		return this;
	},

	renderPosts: function () {
		var view, $container = this.$("#posts"), that = this;

		this.collection.each(function (post) {
			view = new Demo.Views.PostListItem({ model: post });
			that.subviews.push(view);
			$container.append(view.render().$el);
		});
	},

	remove: function () {
		Backbone.View.prototype.remove.call(this);
		_.each(this.subviews, function (view) {
			view.remove();
		});
	}

});