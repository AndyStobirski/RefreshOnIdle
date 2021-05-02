# RefreshOnIdle
A Chrome Extension which uses the [chrome.idle API](https://developer.chrome.com/docs/extensions/reference/idle/) to detect browser change to idle after thirty seconds and reload all the open tabs with a specified URL. The 30 interval and URL are hard coded in the *background.js*.

## Installation
Therefore, to install set the browser to *Developer Mode* and in the extensions menu click the *load Unpacked* button and navigate to the directory that contains these two files.

Note: After being packed into a CRX file, this extension doesn't need seem to install. According to a StackOverflow post: "You cannot distribute an extension which isn't in the Chreome Extension Store"
