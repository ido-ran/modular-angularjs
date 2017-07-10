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
requirejs(['js/App.umd.js',
 'js/moduleA.umd.js',
 'js/moduleB.umd.js'
], function(app1, moduleA, moduleB) {
	moduleA.initModule();
	moduleB.initModule();
	app1.initApp(['moduleA', 'moduleB']
);
})
