module.exports = function() {
	
	//Main menu
	var db = require('components/database');
	var procedures = db.getProcedures();
	
	procedureListArray = [];
	procedures.forEach(function(item){
		var listItem = { title: item.nome, data: item};
		procedureListArray.push(listItem);
	});	
	
	var mainMenu = require('windows/main.menu')(procedureListArray);
	var videoMenu = require('windows/video.menu')();
	
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
	var currentView = undefined;
	videoMenu.addEventListener('open_detail', function(evt){
		
		if (currentView != undefined)
			detailNav.closeWindow(currentView);
		
		Ti.API.log('info', evt.data);
		
		currentView = require('windows/detail.window')(evt.data);
		
		detailNav.openWindow(currentView, {animated: true});
	});
	
	
	mainMenu.addEventListener('open_master', function(evt){
		
		var db = require('components/database');
		var videos = db.getVideosByProcedure(evt.data.id);
		
		var videoList = [];
		videos.forEach(function(item) {
			var myItem = { title: item.nome, data: item };
			videoList.push(myItem);
		});
		
		videoMenu.fireEvent('populate_data', {data: videoList});
		masterNav.openWindow(videoMenu, {animated: true});
		
	});
	
	return splitWin;
};

