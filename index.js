'use strict';

module.exports = function(options) {
	var gulp = options.gulp;
	var pathDest = options.pathDest;
	var pathSrc = options.pathSrc;
	var apiConfig = options.apiConfig;
	var taskPrefix = options.taskPrefix;

	gulp.task(taskPrefix + 'apidocs', function() {
	});

	return {
		name: taskPrefix + 'apidocs'
	}
};
