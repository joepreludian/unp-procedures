Ti.App.env = {
	name: 'UNP Procedures',
	version: '1.0',
	area: 'Especialidade',
	about: "Projeto criado pelos alunos do curso de Engenharia de Computação da UNP, Turma ENC-5NA;\n\nJonhnatha Jorge Ribeiro Trigueiro (201256367) <joepreludian@gmail.com>\nRodrigo Araújo Valente\nPedro Henrique Pinheiro\nJean Márcio\nEmmanuel Barbosa"
};


Ti.App.addEventListener('open_window', function(evt){
	var janela = require('windows/'+ evt.window_name +'.window')();
	
	if (evt.window_name == 'main')
		janela.open();
	else
		janela.open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
});

Ti.App.fireEvent('open_window', { window_name: 'root'});