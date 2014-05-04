Ti.App.addEventListener('open_window', function(evt){
	var janela = require('windows/'+ evt.window_name +'.window')();
	janela.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
});

Ti.App.fireEvent('open_window', { window_name: 'root'});