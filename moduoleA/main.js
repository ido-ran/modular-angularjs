require.config({
    baseUrl: '.',
    // paths: maps ids with paths (no extension)
    paths: {
        'angular':
          ['angular']
    },
    // shim: makes external libraries reachable
    shim: {
      angular: {
          exports : 'angular'
      }
    }
});
requirejs(['js/App.umd.js'], function(app1) {
	app1.initApp();
})
