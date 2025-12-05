/* ハンバーガーメニュー 設定時はutility.jsに重複がないか注意 */
$(function() {
	$(".hamb-butt-wrap").show();
	$(".hamb-butt-wrap").on('click', function(e) {
		e.stopPropagation();
		$(this).toggleClass("hamb-butt-acti");
		if (!$(".head-navi-wrap").hasClass("head-navi-acti")) {
			$(".head-navi-wrap").addClass("head-navi-acti");
			$(".hamb-butt").addClass("hamb-butt-acti");
//        $(".navi-wrap").slideDown();
			document.querySelector(".head-navi-wrap").animate(
				[{
					opacity: 0
				}, {
					opacity: 1
				}], {
					duration: 500,
					fill: 'forwards'
				});
			$(".head-navi-wrap").animate({
				'marginRight': '300px'
			}, 500);
			$(".head-navi-wrap").show();
		} else if ($(".head-navi-wrap").hasClass("head-navi-acti")) {
			$(".head-navi-wrap").removeClass("head-navi-acti");
			$(".hamb-butt").removeClass("hamb-butt-acti");			
			//     $(".navi-wrap").slideUp();		
			$(".head-navi-wrap").animate({
				'marginRight': '0px'
			}, 500);
			document.querySelector(".head-navi-wrap").animate(
				[{
					opacity: 1
				}, {
					opacity: 0
				}], {
					duration: 300,
					fill: 'forwards'
				});
		}
	});
	$("#body-wrap").on('click', function() {
		//console.log("mai-con-wraON");
		if ($(".head-navi-wrap").hasClass("head-navi-acti")) {
			$(".hamb-navi-wra").toggleClass("hamb-navi-acti");
			$(".head-navi-wrap").removeClass("head-navi-acti");
			$(".hamb-butt").removeClass("hamb-butt-acti");
			//     $(".navi-wrap").slideUp();		
			$(".head-navi-wrap").animate({
				'marginRight': '0px'
			}, 500);
			document.querySelector(".head-navi-wrap").animate(
				[{
					opacity: 1
				}, {
					opacity: 0
				}], {
					duration: 300,
					fill: 'forwards'
				});
		}
	});
});