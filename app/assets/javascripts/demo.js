window.Demo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl) {
		this.allUsers = new Demo.Collections.Users();
		this.allUsers.fetch({
			success: function () {
				new Demo.Routers.MainRouter($rootEl);
				Backbone.history.start();
			}
		});
  }
};
