Demo.Views.UserForm = Backbone.View.extend({

	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
	},

	template: JST["users/form"],

	tagName: "form",

	events: {
		"submit": "submit",
		"change #input-picture-file": "changePicture"
	},

	render: function () {
		var content = this.template({ model: this.model });
		this.$el.html(content);

		return this;
	},

	submit: function (event) {
    event.preventDefault();

    var that = this;
    var formData = this.$el.serializeJSON();

    this.model.save(formData, {
      success: function(){
        that.collection.add(that.model);

        Backbone.history.navigate("", { trigger: true });
      }
    });
	},

	changePicture: function (event) {
		var file = event.currentTarget.files[0];

		var fileReader = new FileReader();

		var that = this;
		fileReader.onloadend = function () {
			that.model.set("picture", fileReader.result);
			that.previewPic(fileReader.result);
		};

		fileReader.readAsDataURL(file);
	},

	previewPic: function (src) {
		this.$("#picture-preview").attr("src", src);
	}



});