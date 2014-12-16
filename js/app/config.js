requirejs.config({
    baseUrl: "js/app/",
    paths: {
        "jquery": "../vendor/jquery/dist/jquery.min",
        "underscore": "../vendor/underscore/underscore-min",

        "player": "../vendor/player/js/jquery.viplayer-0.9.4.1",
        "stats": "../vendor/stats.js/build/stats.min"
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'player' : {
            deps : ['jquery', 'stats']
        }
    }
});