module.exports = function() {
	
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
	
	
	
	var mainMenu = require('windows/main.menu')();
	var masterNav = Ti.UI.iOS.createNavigationWindow({window: mainMenu});
	
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
	
	return splitWin;
};

