module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'js/libs/*.js', // All JS in the libs folder
                    'js/*.js'  // This specific file
                ],
                dest: 'build/js/production.js',
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/css/global.css': 'sass/global.sass'
                }
            }
        },
        // penthouse: {
        //     extract : {
        //         outfile : 'build/critical.css',
        //         css : 'build/css/full.css',
        //         url : 'http://localhost:8888',
        //         width : 1300,
        //         height : 900
        //     },
        //   },

        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['sass/*','sass/modules/*','sass/layout/*'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use plug-ins.
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-penthouse');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','sass','watch']);

};
