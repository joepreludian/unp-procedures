module.exports = function(initParams) {
	var self = Ti.UI.createScrollView(initParams);
	var textInfoView = Ti.UI.createView({
		height: Ti.UI.SIZE
	});

	var textInfoLabelTitle = Ti.UI.createLabel({
		text : 'Title',
		color : '#000',
		font : {fontSize: '20sp'},
		top : 10,
		left : 10,
		right: 10,
		textAlign : 'left'
	});
	
	var textInfoLabel = Ti.UI.createLabel({
		text : 'Text',
		color : '#000',
		font : {fontSize: '16sp'},
		top : 60,
		left : 10,
		right: 10,
		textAlign : 'left',
	});
	
	textInfoView.add(textInfoLabelTitle);
	textInfoView.add(textInfoLabel);
	self.add(textInfoView);
	
	self.addEventListener('set_data', function(evt){
		textInfoLabelTitle.text = evt.title;
		textInfoLabel.text = evt.text;
	});
	
	return self;
};
	
