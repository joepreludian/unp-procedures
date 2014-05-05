module.exports = function() {
	var self = Ti.UI.createWindow({
		backgroundColor: '#ffffff',
		backgroundImage: 'images/systembg.png',
		title: Ti.App.env.name + ' ' + Ti.App.env.version
	});
	
	var logoUnp = Ti.UI.createImageView({
		image : 'images/unp_logo.png',
	});
	
	
	var systemName = Ti.UI.createLabel({
		text : Ti.App.env.area,
		color : '#000',
		font : {fontSize: '28sp'},
		top : '60%',
		textAlign : 'center'
	});
	self.add(systemName);
	
	
		
	// Create a Button.
	var aboutBtn = Ti.UI.createButton({
		title : 'Engenharia de Computação - ENC-5NA',
		top : '70%',
	});
	
	var dialog = Ti.UI.createAlertDialog({
	    message: Ti.App.env.about,
	    ok: 'Ok',
	    title: 'Sobre o projeto'
  });
	
	// Listen for click events.
	aboutBtn.addEventListener('click', function() {
		dialog.show();	
	});
	self.add(aboutBtn);
	
		
	
	
	self.add(logoUnp);
	
	return self;
	
	
	
	
	
	
	
		
};
