module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            options: {
                port: 8080,
                hostname: 'localhost'
            },

            dist: {
                options: {
                    open: true,
                    base: 'dist'
                }
            }
        },

        clean: ['dist'],

        copy: {
            files: {
                expand: true,
                cwd: 'src',
                src: [
                    '**/*.html',
                    'app/data/*.json' 
                ],
                dest: 'dist'
            }
        },

        useminPrepare: {
            html: 'src/index.html',
            options: {
                dest: 'dist'
            }
        },

        usemin: {
            html: ['dist/index.html'],
            options: {
                dirs: ['dist']
            }
        }
    });

    grunt.registerTask('build', function() {
        grunt.task.run([
            'clean',
            'copy:files',
            'useminPrepare',
            'concat',
            'cssmin',
            'uglify',
            'usemin'
        ]);
    });

    grunt.registerTask('serve', function(target) {
        grunt.task.run([
        	'build',
            'connect:dist:keepalive'
        ]);
    });
};
