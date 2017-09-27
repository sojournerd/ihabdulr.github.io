function blinker(){$("#cursor").text("|"),setTimeout(function(){$("#cursor").html("&nbsp;")},1000)}blinker(),setInterval(function(){blinker()},1e3);
