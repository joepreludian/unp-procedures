module.exports = function() {
	
	var self = Ti.UI.createWindow({
		backgroundColor: '#ffffff', 
		title: '',
		backButtonTitle: 'Voltar',
		backgroundImage: 'images/systembg.png',
	});
	
	
	var videoPlayer = Titanium.Media.createVideoPlayer({
	    top : 2,
	    autoplay : true,
	    width : 400,
	    height : 267,
	    top: 10,
	    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_EMBEDDED,
	    scalingMode : Titanium.Media.VIDEO_SCALING_MODE_FILL
	});
	self.add(videoPlayer);
	
	
	//Video Description
	var videoInfo = require('components/textview')({
		width: '90%',
		height: 200,
		top: 290,
		showVerticalScrollIndicator: true
	});
	self.add(videoInfo);
	
	//Procedure Description
	var procedureInfo = require('components/textview')({
		width: '90%',
		height: 100,
		top: 510,
		backgroundColor: 'white',
		showVerticalScrollIndicator: true
	});
	self.add(procedureInfo);


	//Event to fire when changing video state	
	Ti.App.addEventListener('set_video', function(evt){

		Ti.App.fireEvent('run_video', {});

		videoPlayer.setUrl('videos/' + evt.data.video);
		
		videoInfo.fireEvent('set_data', {
			title: evt.data.nome,
			text: evt.data.descricao
		});
		
		
		procedureInfo.fireEvent('set_data', {
			title: evt.data.procedure.nome,
			text: evt.data.procedure.descricao
		});
		
		//Ti.API.log('info', evt.data);

		self.title = evt.data.nome;
		
		
	});
	
	return self;
};
