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
let listsFromServer = [
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
// let newLists ;
let changedLists = [];
let newLists  = listsFromServer.slice();
let deletedLists = [];

localLists.forEach(function (localEl) {
	for (let i = 0; i < newLists.length; i++) {
		if (localEl['id'] === newLists[i]['id']) {
			if (localEl['title'] !== newLists[i]['title'] || localEl['author'] !== newLists[i]['author']) {
				changedLists.push(localEl);
				return newLists.splice(i, 1);
			}
			return newLists.splice(i, 1);
		}
	}
	return deletedLists.push(localEl);
});
console.log('--- newLists ---');
console.log(newLists);
console.log('');
console.log('--- deletedLists ---');
console.log(deletedLists);
console.log('');
console.log('--- changedLists ---');
console.log(changedLists);
console.log('--------------------------')
console.log(listsFromServer)