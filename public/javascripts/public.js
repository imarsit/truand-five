
includeScript('../public/javascripts/jquery.min.js');
includeScript('../public/javascripts/jquery-ui.min.js');
includeScript('../public/javascripts/index_v20.js');
includeScript('../public/javascripts/jquery.superslide.2.1.1.js');
includeScript('../public/javascripts/iealert.js');
includeScript('../public/javascripts/min_contentslider.js');
includeScript('../public/javascripts/moment.min.js');
includeScript('../public/javascripts/fullcalendar.min.js');
includeScript('../public/javascripts/lang-all.js');
includeScript('../public/javascripts/ob_free.js');








function includeScript(url) {
	document.write('<script type="text/javascript" src="' + url + '"></script>');
	return false;
}
