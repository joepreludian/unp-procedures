module.exports = function() {
	var self = Ti.UI.createWindow({
		backgroundColor: '#ffffff', 
		title: 'Videos',
		backButtonTitle: "Voltar"
	});
	
	// Create a TableView.
	var procedureList = Ti.UI.createTableView();

	procedureList.addEventListener('click', function(e) {
		self.fireEvent('open_detail', { data: e.row.data });
	});
	
	self.addEventListener('populate_data', function(evt){
		procedureList.setData(evt.data);	
	});
	
	self.add(procedureList);
	
	return self;
};
