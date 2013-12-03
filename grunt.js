module.exports = function(grunt) {

	grunt.initConfig({

		concat: {
			dist: {
				src: ['public/js/underscore.js',
					'public/js/jquery-1.8.2.min.js',
					'public/bootstrap/js/bootstrap.min.js',
					'public/js/backbone.js',
					'public/js/ejs.js',
					'public/js/gallery.js',
					'public/js/router.js',
					'public/js/analytics.js'
				],
				dest: 'public/js/site.js'
			},
			css: {
				src: ['public/bootstrap/css/bootstrap.min.css',
					'public/bootstrap/css/bootstrap-responsive.min.css',
					'public/css/style.css'
				],
				dest: 'public/css/all.css'
			}
		},

		min: {
			dist: {
				src: ['public/js/site.js'],
				dest: 'public/js/site.min.js'
			}
		},

		cssmin: {
			css: {
				src: 'public/css/all.css',
				dest: 'public/css/style-min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-css');
};