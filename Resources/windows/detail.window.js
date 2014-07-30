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
		width: '44%',
		left: '5%',
		height: 200,
		top: 310,
		showVerticalScrollIndicator: true,
		borderColor: '#666'
	});
	self.add(videoInfo);
	
	//Video Checklist
	var videoChecklist = require('components/textview')({
		width: '44%',
		right: '5%',
		height: 200,
		top: 310,
		showVerticalScrollIndicator: true,
		borderColor: '#666' 
	});
	self.add(videoChecklist);
	
	//Procedure Description
	var procedureInfo = require('components/textview')({
		width: '90%',
		height: 100,
		top: 530,
		backgroundColor: 'white',
		showVerticalScrollIndicator: true,
		borderColor: '#666'
	});
	self.add(procedureInfo);


	//Event to fire when changing video state	
	playerCounter = null;
	var videoID = null;
	Ti.App.addEventListener('set_video', function(evt){

		Ti.App.fireEvent('run_video', {});
	
		videoID = evt.data.id;

		videoPlayer.setUrl('videos/' + evt.data.video);
		
		videoInfo.fireEvent('set_data', {
			title: evt.data.nome,
			text: evt.data.descricao
		});
		
		videoChecklist.fireEvent('set_data', {
			title: 'Checklist',
			text: ''
		});
		
		//Setting data of procedure
		procedureInfo.fireEvent('set_data', {
			title: evt.data.procedure.nome,
			text: evt.data.procedure.descricao
		});
		
		self.title = evt.data.nome;
		
		clearInterval(playerCounter);
	});
	
	var dbHandler = require('components/database');
	var checklistLogData = '';
	var checklistCount = 1;
	
	videoPlayer.addEventListener('playbackstate', function(data){
		
		if (data.playbackState == Ti.Media.VIDEO_PLAYBACK_STATE_PLAYING)
		{
			var currentChecklistObj = null;
			
			playerCounter = setInterval(function() {

				var playbackTime = Math.round(videoPlayer.currentPlaybackTime/1000);
				currentChecklistObj = dbHandler.getProcedureByVideoAndTime(1, playbackTime, currentChecklistObj);
				
				if (currentChecklistObj != null) {
					if (checklistLogData.indexOf(currentChecklistObj.nome) == -1) {
						checklistLogData = checklistLogData + checklistCount+ ') ' + currentChecklistObj.nome + '\n';
						
						videoChecklist.fireEvent('set_data', {
							title: 'Checklist',
							text: checklistLogData
						});
						
						checklistCount++;	
					}
				}
			
			}, 500);
			
		} else
			clearInterval(playerCounter);
			
	});
	
	return self;
};
