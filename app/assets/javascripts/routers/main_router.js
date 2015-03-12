Demo.Routers.MainRouter = Backbone.Router.extend({

	initialize: function ($rootEl) {
		this.$rootEl = $rootEl
	},

	routes: {
		"users": "usersIndex",
		"users/new": "userNew",
		"users/:id": "userShow",
		"users/:id/edit": "userEdit",
		"search": "search",
	},

	search: function () {
		var view = new Demo.Views.Search();

		this._swapView(view);
	},

	usersIndex: function () {
		var view = new Demo.Views.UsersIndex({
			collection: Demo.allUsers
		});

		this._swapView(view);
	},

	userShow: function (id) {
		var view = new Demo.Views.UserShow({
			model: Demo.allUsers.get(id)
		});

		this._swapView(view);
	},

	userNew: function () {
		var view = new Demo.Views.UserForm({
			model: new Demo.Models.User()
		});

		this._swapView(view);
	},

	userEdit: function () {
		var view = new Demo.Views.UserForm({
			model: Demo.allUsers.get(id)
		});

		this._swapView(view);
	},

	_swapView: function (view) {
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	}

});