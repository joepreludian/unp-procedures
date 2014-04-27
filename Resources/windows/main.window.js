module.exports = function() {
	
	//Main menu
	var mainMenu = require('windows/main.menu')();
	var masterNav = Ti.UI.iOS.createNavigationWindow({window: mainMenu});
	
	//Detail Window
	var detail = Ti.UI.createWindow({
		backgroundColor: '#ffffff',
		backgroundImage: 'images/systembg.png',
		title: 'Bem vindo!'
	});
	
	var logoUnp = Ti.UI.createImageView({
		image : 'images/unp_logo.png',
	});
	detail.add(logoUnp);
	var detailNav = Ti.UI.iOS.createNavigationWindow({window: detail});
	
	
	var splitWin = Ti.UI.iPad.createSplitWindow({
	    detailView: detailNav,
	    masterView: masterNav
	});
	
	splitWin.addEventListener('visible',function(e){
	    if (e.view == 'detail'){
	        e.button.title = "Master";
	        detail.leftNavButton = e.button;
	    } else if (e.view == 'master'){
	        detail.leftNavButton = null;
	    }
	});
	
	
	//Adding event listeners
	mainMenu.addEventListener('open_detail', function(evt){
		var newWindow = require('windows/detail.window')();
		detailNav.openWindow(newWindow, {animated: true});
	});
	
	return splitWin;
};

