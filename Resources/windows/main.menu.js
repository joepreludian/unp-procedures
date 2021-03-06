module.exports = function(listArray) {
	var self = Ti.UI.createWindow({
		backgroundColor: '#ffffff', 
		title: 'Lista dos procedimentos',
		backButtonTitle: "Voltar"
	});
	
	// Create a TableView.
	var procedureList = Ti.UI.createTableView();

	procedureList.setData(listArray);
	
	procedureList.addEventListener('click', function(e) {
		self.fireEvent('open_master', { data: e.row.data });
	});
	
	self.add(procedureList);
	
	return self;
};
