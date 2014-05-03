module.exports = function(data) {
	var self = Ti.UI.createWindow({
		backgroundColor: '#ffffff', 
		title: data.nome,
		backButtonTitle: 'Voltar'
	});
	
	
	var videoPlayer = Titanium.Media.createVideoPlayer({
	    top : 2,
	    autoplay : true,
	    height : 480,
	    width : 720,
	    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_EMBEDDED,
	    scalingMode : Titanium.Media.VIDEO_SCALING_MODE_FILL
	});
	
	videoPlayer.url = 'videos/' + data.video;
	self.add(videoPlayer);
	
	return self;
};
