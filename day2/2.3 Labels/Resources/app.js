var win = Ti.UI.createWindow({
	backgroundColor: "#B3E5E6",
	title: "My App Windows"
});
//create label
var title = Ti.UI.createLabel({
	text: "Splatoon",
	color: "red",
	font: {
		fontSize: 30,
		//https://iosfonts.com
		fontFamily: "AmericanTypewriter-Bold"
	},
	top: 30
});
//create another label
var para = Ti.UI.createLabel({
	text: "This game is about squids and kids where you can have fun splatting eachother with paint to capture the objectives and the area around you.",
	color: "#F6F3E4",
	font: {
		fontSize: 10
	},
	left: 5,
	right: 5
});
//create a view
var photo = Ti.UI.createView({
	backgroundImage: "splatoon-orangesquid.png",
	width: 150,
	height: 200,
	bottom: 20
	
});

//add label
win.add(title);
//add view
win.add(photo);
//add other label
win.add(para);



win.open();
