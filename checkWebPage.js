function checkUrlAndRunCode(url) {
	console.log('running some code here...');
	console.log(url);
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo && changeInfo.status == 'complete') {
		chrome.tabs.get(tabId, function(tab) {
			checkUrlAndRunCode(tab.url);
		});
	}
});
