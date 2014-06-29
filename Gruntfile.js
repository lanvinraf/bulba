module.exports = function(grunt) {

  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'app/dist/styles/main.css': 'app/styles/main.scss'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: 'localhost',
          base: 'app',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('with-server', ['connect']);

  grunt.registerTask('server', function () {
    return grunt.task.run(['default', 'with-server']);
  });

};