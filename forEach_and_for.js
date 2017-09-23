let localLists = [
	{
		id: 1,
		title: 'title 01',
		author: 'Mihel 01'
	},
	{
		id: 2,
		title: 'title 01',
		author: 'Mihel 02'
	},
	{
		id: 3,
		title: 'title 01',
		author: 'Mihel 03'
	}
];
let serverLists = [
	{
		id: 4,
		title: 'title 04',
		author: 'Mihel 04'
	},
	{
		id: 1,
		title: 'title 01',
		author: 'Mihel 01'
	},
	{
		id: 3,
		title: 'title 03',
		author: 'Mihel 03'
	},
	{
		id: 8,
		title: 'title 03',
		author: 'Mihel 03'
	},
	{
		id: 9,
		title: 'title 03',
		author: 'Mihel 03'
	}
];
let changetLists = [];
let newLists = [];
let deletedLists = [];
serverLists.forEach(function (serverEl) {
	for (serverKey in serverEl) {
		console.log('serverEl: ' + serverKey + "= " + serverEl[serverKey])
		for (let i = 0; i < localLists.length; i++) {
			if (serverEl[serverKey] === localLists[i][serverKey]) {
				console.log('localEl === ' + localLists[i][serverKey]);
				return false
			}
			console.log('localEl: ' + serverKey + "= " + localLists[i][serverKey])
		}
		// localLists.forEach(function (localEl) {
		// 	if (serverEl[serverKey] === localEl[serverKey]) {
		// 		console.log('localEl === ' + localEl[serverKey]);
		// 		return false
		// 	}
		// 	console.log('localEl: ' + serverKey + "= " + localEl[serverKey])
		// });
	}
});