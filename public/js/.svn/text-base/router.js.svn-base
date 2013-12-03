var _gaq = _gaq || [];

var App = Backbone.Router.extend({
    routes:{
        '': 'index',
        'gallery': 'gallery',
        'contact': 'contact'
    },

    index: function(){
		content.render('index');
    },

    gallery: function(){
		content.render('gallery');
		gallery.render();
    },

    contact: function(){
		content.render('contact');
    }
});

var app = new App();
Backbone.history.start({pushState: true, silent: true});

/**
 * Main View
 * @type {Object}
 */
var Content = Backbone.View.extend({

	el: '.content',
	templates: {},

	initialize: function(){

		var that = this,
			initNavigation = function(){
			$('.navbar a.instant').click(function(e){
				e.preventDefault();
				$('.navbar li').removeClass('active');
				if($(this).parents('li').length){
					$(this).parents('li').addClass('active');
				}else{
					$('.navbar li:first').addClass('active');
				}
				app.navigate($(this).attr('href'), {trigger: true});
				_gaq.push(['_trackPageview']);
			});
		};

		$.ajax({
			url: '/templates',
			success: function(json){
				that.templates = json;
				initNavigation();
			}
		});
	},

	/**
	 * @param  {String} name Template name
	 */
	render: function(name){
		var value = this.templates[name];
		var template = new EJS({element:{value: value, id: name}});
		this.$el.html(template.render());
	}
});

var content = new Content();