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
	var videoView = require('windows/detail.window')();
	var detailNavTimeout = undefined;
	
	Ti.App.addEventListener('run_video', function(evt){

		detailNav.closeWindow(videoView);
		
		if (detailNavTimeout != undefined)
			clearTimeout(detailNavTimeout);
		
		detailNavTimeout = setTimeout(function(){
			detailNav.openWindow(videoView, {animated: true});	
		},2000);
		
	});
	
	
	mainMenu.addEventListener('open_master', function(evt){
		
		var db = require('components/database');
		var videos = db.getVideosByProcedure(evt.data.id);
		
		var videoList = [];
		videos.forEach(function(item) {
			
			//Adding procedure info to data
			item.procedure = evt.data;
			
			var myItem = { title: item.nota + '. ' + item.nome, data: item };
			videoList.push(myItem);
		});
		
		videoMenu.fireEvent('populate_data', {data: videoList});
		masterNav.openWindow(videoMenu, {animated: true});
		
	});
	
	return splitWin;
};

