	Mousetrap.bind('ctrl+y', function(e) {
	var win = window.open('https://www.youtube.com/channel/UCjiKOCK8sSYNMsH649IeAHg', '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
});
	Mousetrap.bind('ctrl+m', function(e) {
	var win = window.open('https://medium.com/@raghavpatnecha06', '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
});
	Mousetrap.bind('ctrl+l', function(e) {
	var win = window.open('https://www.linkedin.com/in/raghavpatnecha/', '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
});
Mousetrap.bind('ctrl+q', function(e) {
 if (confirm("Do You Want To Close This Window?")) {
    close();
  }
});