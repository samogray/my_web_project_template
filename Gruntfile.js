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
                    'src/css/style.css': 'src/sass/sass.scss'       // 'destination': 'source'
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: ['last 2 version']}),
                    require('cssnext')(),
                    require('precss')(),
                    require('postcss-normalize')()
                    /*require('cssnano')()*/

                ],
                syntax: require('postcss-scss')
            },
            dist: {
                src: 'src/css/style.css',
                dest: 'dest/css/main.css'
            }
        },
        watch: {
            styles: {
                files: ['src/sass/*.scss'],
                tasks: ['sass','postcss'],
                options: {
                    spawn: false,
                    event: 'all'

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
   // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-postcss');//POSTCSS

    grunt.registerTask('default', ['sass','postcss','watch']);

};
