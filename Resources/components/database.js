function loadDB(){
	
	return Ti.Database.install('database.db', 'ProceduresDatabase');
}

module.exports = {
	getProcedures: function() {
		var db = loadDB();
		var proceduresListArray = [];
		var proceduresListIterator = db.execute('SELECT id, nome, descricao, requisitos FROM procedure');
		
		while (proceduresListIterator.isValidRow())
		{
		  var procedureObj = {
			id: proceduresListIterator.fieldByName('id'),
			nome: proceduresListIterator.fieldByName('nome'),
			descricao: proceduresListIterator.fieldByName('descricao'),
			requisitos: proceduresListIterator.fieldByName('requisitos')
		  };
		  proceduresListArray.push(procedureObj);
		  
		  proceduresListIterator.next();
		}
		
		proceduresListIterator.close();
		db.close();
		
		return proceduresListArray;
	},
	getVideosByProcedure: function(procedureId) {
		var db = loadDB();
		var videosListArray = [];
		var videosListIterator = db.execute('SELECT id, nome, video, descricao, nota FROM video WHERE procedure_id = ' + procedureId + ' ORDER BY nota DESC');
		
		while (videosListIterator.isValidRow())
		{
		  var videoObj = {
			id: videosListIterator.fieldByName('id'),
			nome: videosListIterator.fieldByName('nome'),
			video: videosListIterator.fieldByName('video'),
			descricao: videosListIterator.fieldByName('descricao'),
			nota: videosListIterator.fieldByName('nota'),
		  };
		  videosListArray.push(videoObj);
		  
		  videosListIterator.next();
		}
		
		videosListIterator.close();
		db.close();
		
		return videosListArray;
	},
	getProcedureByVideoAndTime: function(videoId, videoCurrentTime, previousData) {
		
		if (videoCurrentTime == 0)
			return null;
		
		var db = loadDB();
		var videosListArray = [];
		var checklistIterator = db.execute('SELECT name FROM checklist WHERE video_id = '+ videoId +' AND time <= ' + videoCurrentTime + ' ORDER BY id DESC LIMIT 0,1');
		
		var checklistObj = null;
		
		if (checklistIterator.isValidRow())
		{
		  var name_data = checklistIterator.fieldByName('name');
		  			
		  checklistObj = {
			nome: name_data,
		  };
		}
		
		checklistIterator.close();
		db.close();
		
		return checklistObj;
	}
	
	
	
	
};
