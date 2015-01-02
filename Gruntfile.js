module.exports = function(grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project Configuration
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    less: {
      development: {
        options: {
          paths: ['bower_components/bootstrap/less']
        },
        files: {
          'dist/responsive-margins.css': 'responsive-margins.less'
        }
      },
      production: {
        options: {
          paths: ['bower_components/bootstrap/less']
        },
        files: {
          'dist/responsive-margins.css': 'responsive-margins.less'
        }
      }
      
    },

    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'v%VERSION%',
        commitFiles: ['package.json', 'bower.json'],
        createTag: true,
        tagName: '%VERSION%',
        tagMessage: '%VERSION%',
        push: false,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    }
  });

  grunt.registerTask('build', ['less:development']);
  grunt.registerTask('release', ['less:production']);
};
