
xlsx = require("./index.js");

data = [
	[ "Size", "Qty", "Price" ],
	[ "Small", 1, 1.99 ],
	[ "Medium", 2, 19.99 ],
	[ "Large", 3, 199.99 ],
];

xlsx.save(data, "test.xlsx", "Sleepless XLSX Test");

