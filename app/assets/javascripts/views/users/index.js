Demo.Views.UsersIndex = Backbone.View.extend({

	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
		this.subviews = [];
	},

	template: JST["users/index"],

	render: function () {
		var content = this.template({ users: this.collection });
		this.$el.html(content);

		this.renderUsers();

		return this;
	},

	renderUsers: function () {
		var view, $container = this.$("#users"), that = this;

		this.collection.each(function (user) {
			view = new Demo.Views.UserListItem({ model: user });
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