// Copyright (c) 2025 WIING WebServiceCloud LLC(WebCreatorCloudProject TRIBECA). Released under the MIT license.

/* 年月日時分秒取得　*/
$(function() {
	var now = new Date();
	var y = now.getFullYear();
	var m = now.getMonth() + 1;
	var d = now.getDate();
	var mm = ('0' + m).slice(-2);
	var dd = ('0' + d).slice(-2);
	$('#date-bloc').text(y);
});
