module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    sassDir: 'content/sass/*.scss',
                    cssDir: 'content/css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'content/sass',
                    cssDir: 'content/css'
                }
            }
        },

        watch: {
            sass: {
                files: ['content/sass/*.scss'],
                tasks: ['sass']
            }
        },

        sass: {
            dist: {
                files: {
                 'Content/css/style.css':'Content/sass/style.scss'
                }
            }
        },

    });

    // Load the plugin that provides the "compass" task.
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};