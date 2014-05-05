module.exports = function()
{
	var self = Ti.UI.createWindow({
		backgroundColor: '#fff',
		backgroundImage: 'images/systembg.png',
	});
	
	
	var logoUnp = Ti.UI.createImageView({
		image : 'images/unp_logo.png',
	});
	self.add(logoUnp);
	
	
	// Create a Button.
	var startButton = Ti.UI.createButton({
		title : 'Iniciar',
		top : '70%',
	});
	
	// Listen for click events.
	startButton.addEventListener('click', function() {
		Ti.App.fireEvent('open_window', {window_name: 'main'});
	});
	
	// Add to the parent view.
	self.add(startButton);
	

	
	return self;
};
