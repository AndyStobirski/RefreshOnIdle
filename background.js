//
//  Register all the code here
//
chrome.runtime.onInstalled.addListener(() => {
  //https://developer.chrome.com/docs/extensions/reference/idle/#method-setDetectionInterval
  //check every thirty seconds
  chrome.idle.setDetectionInterval(30);

  //https://developer.chrome.com/docs/extensions/reference/idle/#event-onStateChanged
  //Fired when the system changes to an active, idle or locked state.
  chrome.idle.onStateChanged.addListener(function (state) {
    if (state == "idle") {
      console.log("Refreshing at " + new Date());
      var homepage = "https://bouncenationfd.bookmyactivity.co.uk/codeentry";

      chrome.tabs.query({}, function (tabs) {
        tabs.forEach((tb) => {
          chrome.tabs.update(tb.id, { url: homepage });
        });
      });
    }
  });
});
