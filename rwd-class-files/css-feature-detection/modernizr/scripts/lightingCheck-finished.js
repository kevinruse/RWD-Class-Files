Modernizr.on('ambientlight',function(result) {
    if(!result) {
        console.log("load lighting js");
        var scriptPath = "scripts";
        var script = document.createElement('script');
        script.src = scriptPath + '/lighting.js';
        document.getElementsByTagName('head')[0].appendChild(script);
        console.log("load lighting css");
        var stylePath = "css";
        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = stylePath + '/lighting.css';
        document.getElementsByTagName('head')[0].appendChild(style);
    }
});
