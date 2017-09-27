function blinker(){$("#cursor").text("|"),setTimeout(function(){$("#cursor").html("&nbsp;")},100)}blinker(),setInterval(function(){blinker()},1e3);
