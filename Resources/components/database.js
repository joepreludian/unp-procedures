function loadDB(){
	return Ti.Database.install('database.db', 'ProceduresDatabase');
}

module.exports = {
	getProcedures: function() {
		var db = loadDB();
		var proceduresListArray = [];
		var proceduresListIterator = db.execute('SELECT id, nome FROM procedure');
		
		while (proceduresListIterator.isValidRow())
		{
		  var procedureObj = {
			id: proceduresListIterator.fieldByName('id'),
			nome: proceduresListIterator.fieldByName('nome')
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
		var videosListIterator = db.execute('SELECT id, nome, video, descricao, nota FROM video WHERE procedure_id = ' + procedureId);
		
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
	}
	
	
	
	
};
