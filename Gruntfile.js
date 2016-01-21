/**
 * Created by Oleksandr on 23.12.2015.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'css/main.css': 'css/sass/style.scss'       // 'destination': 'source'
                }
            }
        },
        cssmin: {

            target:{
                files: {
                    'css/min_css/style.min.css': ['css/reset.css', 'css/normalize.css','css/fonts.css','css/main.css','css/media.css']
                }
            }
        },
        watch: {
            styles:{
                files:['css/sass/*.scss','css/sass/modules/*.scss','css/*.css'],
                tasks: ['sass','cssmin'],
                options: {
                    spawn: false,
                    event:'all'

                },
                options: {
                    livereload: true
                }
            }

        }
    });

   /* grunt.loadNpmTasks('grunt-contrib-uglify');//мініфікує javascript
    grunt.loadNpmTasks('grunt-contrib-concat');//obyednuye js files
    grunt.loadNpmTasks('grunt-contrib-watch');//Слідкує за змінами у вказаних файлах, якщо такі є перезапускає грунт
    grunt.loadNpmTasks('grunt-contrib-jshint');//провіряє на синтаксичні помилки javascript
    grunt.loadNpmTasks('grunt-contrib-cssmin');//мінімізує і обєднує css
    grunt.loadNpmTasks('grunt-contrib-imagemin');//мініміфікує зображення
    grunt.loadNpmTasks('grunt-autoprefixer');//автопрефіксер
    grunt.loadNpmTasks('grunt-csscomb');// красивенький цсс*/
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');//SASS
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['sass','cssmin','watch']);

};
