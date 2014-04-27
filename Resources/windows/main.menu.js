module.exports = function() {
	var self = Ti.UI.createWindow({
		backgroundColor: '#ffffff', 
		title: 'Lista dos procedimentos',
	});
	
	// Create a TableView.
	var procedureList = Ti.UI.createTableView();
	
	// Populate the TableView data.
	var data = [];
	for (i=0; i<100; i++)
		data.push({title:'Procedimento ' + i, hasChild:true});
		
	procedureList.setData(data);
	
	procedureList.addEventListener('click', function(e) {
		//alert('title: \'' + e.row.title + '\', section: \'' + e.section.headerTitle + '\', index: ' + e.index);
		self.fireEvent('open_detail', { data: true });
	});
	
	self.add(procedureList);
	
	return self;
};
