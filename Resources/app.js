Ti.App.addEventListener('open_window', function(evt){
	var janela = require('windows/'+ evt.window_name +'.window')();
	janela.open();
});

Ti.App.fireEvent('open_window', { window_name: 'root'});