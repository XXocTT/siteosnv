$(document).ready(function() {






	$("input[name='phone']").mask("+7 (999) 999 99 99");






	$(".head a.phone").clone().appendTo(".navigation .row").wrap("<div class='col-12 d-sm-none'></div>");

	$(".navigation .row").append("<div class='navigation-mobile-footer d-lg-none'></div>");

	$(".head .search").clone().appendTo(".navigation-mobile-footer");

	$(".head ul.list-social-link").clone().appendTo(".navigation-mobile-footer").addClass("d-md-none");

	$(".link-mnu-dropdown").each(function() {
		$(this).after($(".mnu-dropdown"+ $(this).attr("href") +"").clone().addClass("d-lg-none"));
	});






	$(".mnu-mobile-toggle").click(function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".navigation").animate({
				"left" : "-120px",
				"opacity" : "0"
			}, 150, function() {
				if(!$(this).hasClass("active")) {
					$(".navigation").hide();
				}
			});
			$(".link-mnu-dropdown").removeClass("active");
			$(".mnu .mnu-dropdown").slideUp(150);
		} else {
			$(this).addClass("active");
			$(".navigation").show().stop().animate({
				"left" : "0",
				"opacity" : "1"
			}, 300);
		}
		return false;
	});






	var thMnuDd = false,
			removeActiveTimeout = false;
	$(".link-mnu-dropdown").hover(function() {
		if($(window).width() > 991) {
			thMnuDd = ""+ $(this).attr("href") +"";
			$(".link-mnu-dropdown").removeClass("active");
			clearTimeout(removeActiveTimeout);
			$(".link-mnu-dropdown[href='"+ thMnuDd +"']").addClass("active");
			$(".mnu-dropdown"+ thMnuDd +"").css({"z-index" : "2"}).stop(true).fadeIn(300);
		}
	}, function() {
		if($(window).width() > 991) {
			$(".mnu-dropdown"+ thMnuDd +"").css({"z-index" : "1"}).delay(300).fadeOut(150);
			removeActiveTimeout = setTimeout(function(){
				$(".link-mnu-dropdown").removeClass("active");
			}, 300);
		}
	});

	$(".mnu-dropdown").hover(function() {
		if($(window).width() > 991) {
			thMnuDd = "#"+ $(this).attr("id") +"";
			$(".mnu-dropdown"+ thMnuDd +"").css({"z-index" : "2"}).stop(true).fadeIn(300);
			$(".link-mnu-dropdown").removeClass("active");
			clearTimeout(removeActiveTimeout);
			$(".link-mnu-dropdown[href='"+ thMnuDd +"']").addClass("active");
		}
	}, function() {
		if($(window).width() > 991) {
			$(".mnu-dropdown"+ thMnuDd +"").css({"z-index" : "1"}).delay(300).fadeOut(150);
			removeActiveTimeout = setTimeout(function(){
				$(".link-mnu-dropdown").removeClass("active");
			}, 300);
		}
	});

	$(".link-mnu-dropdown").click(function() {
		if($(window).width() > 991) {
			if($(this).hasClass("active")){
				$(".mnu-dropdown").fadeOut(150).css({"z-index" : "1"});
				$(".link-mnu-dropdown").removeClass("active");
			} else {
				$(".mnu-dropdown").fadeOut(150).css({"z-index" : "1"});
				$(".mnu-dropdown"+ $(this).attr("href") +"").css({"z-index" : "2"}).stop(true).fadeIn(300);
				$(".link-mnu-dropdown").removeClass("active");
				$(this).addClass("active");
			}
		} else {
			if($(this).hasClass("active")){
				$(".link-mnu-dropdown").removeClass("active");
				$(".mnu .mnu-dropdown").slideUp(150);
			} else {
				$(".link-mnu-dropdown").removeClass("active");
				$(this).addClass("active");
				$(".mnu .mnu-dropdown").slideUp(150);
				$(".mnu .mnu-dropdown"+ $(this).attr("href") +"").slideDown(300);
			}
		}
		return false;
	});






	$(document).click(function(event) {


		if($(window).width() > 991) {

			if(!$(event.target).closest(".mnu-dropdown").length && !$(event.target).closest(".link-mnu-dropdown").length && $(".mnu li a.active").length > 0) {
				$(".mnu-dropdown").fadeOut(150).css({"z-index" : "1"});
				$(".link-mnu-dropdown").removeClass("active");
				return false;
			}

		}

		if(!$(event.target).closest(".navigation").length && $(".mnu-mobile-toggle").hasClass("active")) {
			$(".mnu-mobile-toggle").removeClass("active");
			$(".navigation").animate({
				"left" : "-120px",
				"opacity" : "0"
			}, 150, function() {
				if(!$(".mnu-mobile-toggle").hasClass("active")) {
					$(".navigation").hide();
				}
			});
			$(".link-mnu-dropdown").removeClass("active");
			$(".mnu .mnu-dropdown").slideUp(150);
			return false;
		}


	});






	$(".input-number-container input").on("input", function(){
		$(this).val($(this).val().replace(/\D/g, ''));
		if(parseInt($(this).val()) > $(this).attr("max")) {
			$(this).val("");
		}
	});

	var inputNumberPlus = 0;
	$(".input-number-container .input-number-plus").click(function() {
		if(parseInt($(this).closest(".input-number-container").find("input").val()) >= $(this).closest(".input-number-container").find("input").attr("max")) {
			$(this).closest(".input-number-container").find("input").val($(this).closest(".input-number-container").find("input").attr("max"));
		} else {
			if($(this).closest(".input-number-container").find("input").val().length == 0  || parseInt($(this).closest(".input-number-container").find("input").val()) < $(this).closest(".input-number-container").find("input").attr("min")) {
				$(this).closest(".input-number-container").find("input").val($(this).closest(".input-number-container").find("input").attr("min"));
			} else {
				inputNumberPlus = parseInt($(this).closest(".input-number-container").find("input").val());
				inputNumberPlus++;
				$(this).closest(".input-number-container").find("input").val(inputNumberPlus);
			}
		}
		return false;
	});

	var inputNumberMinus = 0;
	$(".input-number-container .input-number-minus").click(function() {
		if(parseInt($(this).closest(".input-number-container").find("input").val()) <= $(this).closest(".input-number-container").find("input").attr("min")) {
			$(this).closest(".input-number-container").find("input").val($(this).closest(".input-number-container").find("input").attr("min"));
		} else {
			if($(this).closest(".input-number-container").find("input").val().length == 0  || parseInt($(this).closest(".input-number-container").find("input").val()) <= $(this).closest(".input-number-container").find("input").attr("min")) {
				$(this).closest(".input-number-container").find("input").val($(this).closest(".input-number-container").find("input").attr("min"));
			} else {
				inputNumberMinus = parseInt($(this).closest(".input-number-container").find("input").val());
				inputNumberMinus--;
				$(this).closest(".input-number-container").find("input").val(inputNumberMinus);
			}
		}
		return false;
	});

	$(".calculator-result").hide();

	var BMI = 0,
			BMIheight = 0,
			BMIweight = 0;
	
	$(".calculator .btn").click(function() {
		$(this).closest(".calculator").find("input").each(function() {
			if(parseInt($(this).val()) < parseInt($(this).attr("min")) || $(this).val() == ""){
				$(this).addClass("invalid");
			} else {
				$(this).removeClass("invalid");
			}
		});
		if(!$(this).closest(".calculator").find("input.invalid").length > 0){
			BMIheight = Number($(this).closest(".calculator").find("input[name='height']").val()/100),
			BMIweight = Number($(this).closest(".calculator").find("input[name='weight']").val());
			BMI = (BMIweight/(BMIheight*BMIheight)).toFixed(2);
			$(this).closest(".calculator").find(".calculator-result .body-mass-index .val").text(BMI);
			if(BMI < 16) {
				$(this).closest(".calculator").find(".calculator-result .this-val-corresponds .val").text("Враждённому дефициту массы тела");
			} else if(BMI >= 16 && BMI < 18.5) {
				$(this).closest(".calculator").find(".calculator-result .this-val-corresponds .val").text("Недостаточной массе тела");
			} else if(BMI >= 18.5 && BMI < 25) {
				$(this).closest(".calculator").find(".calculator-result .this-val-corresponds .val").text("Нормальной массе тела");
			} else if(BMI >= 25 && BMI < 30) {
				$(this).closest(".calculator").find(".calculator-result .this-val-corresponds .val").text("Избыточной массе тела (предожирение)");
			} else if(BMI >= 30 && BMI < 35) {
				$(this).closest(".calculator").find(".calculator-result .this-val-corresponds .val").text("Ожирению первой степени");
			} else if(BMI >= 35 && BMI <= 40) {
				$(this).closest(".calculator").find(".calculator-result .this-val-corresponds .val").text("Ожирению второй степени");
			} else if(BMI > 40) {
				$(this).closest(".calculator").find(".calculator-result .this-val-corresponds .val").text("Ожирению третьей степени");
			}
			$(this).closest(".calculator").find(".calculator-result").slideDown(300);
			$(this).closest(".calculator").find(".after-calculator-result").fadeIn(300);
		}
		return false;
	});





	
	$("label.file-box input").val("");
	$("label.file-box input").change(function() {
		if($(this).val().length != "") {
			$(this).parent("label.file-box").addClass("active");
		} else {
			$(this).parent("label.file-box").removeClass("active");
		}
	});






	$("ul.list-tabs").each(function() {
		$(this).find("li:first-child").addClass("active");
	});

	var tabsViewsOpen,
			thisTab;
	$("ul.list-tabs li a").click(function() {
		thisTab = $(this);
		if(!$(thisTab).parent("li").hasClass("active")) {
			$("ul.list-tabs li").removeClass("active");
			$(thisTab).parent("li").addClass("active");
			$(""+ $(thisTab).attr("href") +"").find(".tabs-view").fadeOut(300);
			clearTimeout(tabsViewsOpen);
			tabsViewsOpen = setTimeout(function() {
				$(""+ $(thisTab).attr("href") +"").find(".tabs-view:nth-child("+ ($(thisTab).parent("li").index()+1) +")").fadeIn(300);
				$("html, body").stop().animate({scrollTop: ""+ ($(""+ $(thisTab).attr("href") +"").offset().top-60) +"px"}, 600);
			}, 250);
		}
		return false;
	});

	$(".section-tabs-views").each(function() {
		$(this).find(".tabs-view:not(:first)").hide();
	});






	$(".item-03-title").each(function() {
		$(this).html($(this).text().replace(/( )/, ' <br>'));
	});






	$(".main-carousel").slick({
		dots: true,
		speed: 600,
		fade: true,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnFocus: false,
		pauseOnHover: true,
		pauseOnDotsHover: true,
	});






	$(".carousel-01").slick({
		dots: false,
		speed: 600,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
  	centerMode: true,
  	variableWidth: true
	});






	$("a[href='#popup-service']").click(function() {
		
		$("#popup-service .title-small").text($(this).closest(".section-servise").find(".title").text());
		$("#popup-service input[name='formInfo']").val("Заявка на услугу "+ $(this).closest(".section-servise").find(".title").text() +"");
	});

	$(".popup").magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		removalDelay: 150,
		mainClass: 'mfp-with-zoom',
		callbacks: {
			afterClose: function() {
				
			}
		}
	});

	$(".popup-img").magnificPopup({
		disableOn: 0,
		type: "image",
		mainClass: "mfp-with-zoom",
		removalDelay: 150,
		fixedContentPos: false,
		gallery: {
			enabled: false
		},
	});







	if($("#map").length) {
		var coordinatesMark = $("#map").data("coordinates")
		ymaps.ready(init);
		function init() {

			var myMap = new ymaps.Map("map", {
				center: coordinatesMark,
				zoom: 16,
				controls: []
			});

			var custPlacemarkLayout = ymaps.templateLayoutFactory.createClass("<div class='mark'><img src='img/logo.svg' alt='Logo'><strong>Центр снижения веса</strong></div>");

			var custPlacemark = new ymaps.Placemark(coordinatesMark, {
				hintContent: "197706, г. Санкт-Петербург, г. Сестрорецк, ул. Борисова, д. 9",
			},{
				iconLayout: custPlacemarkLayout,
				iconOffset: [-89, -80],
				iconShape: {
					type: "Rectangle",
					coordinates: [
							[178, 63], [0, 0]
					]
				}
			});

			myMap.geoObjects.add(custPlacemark);

		}
	}






});






var tallestcolumn;
function setEqualHeight(columns){
	tallestcolumn = 0;
		columns.each(function(){
			$(this).css({"height" : "auto"})
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn){
				tallestcolumn = currentHeight;
			}
		});
	columns.height(tallestcolumn);
}






var resizeAfter;
$(window).resize(function() {
	clearTimeout(resizeAfter);
	resizeAfter = setTimeout(doneResizing, 300);
});

function doneResizing(){
	if($(".parent-same-height").length) {
		sameHeightLine();
	}
}






function sameHeightLine() {
	$(".parent-same-height .same-height-each").removeClass("sameHeightGroup");
	if($(window).width() >= 576){
		var sameHeightGroup = 0,
				sameHeightGroupLength = 0;
		$(".parent-same-height .same-height-each").each(function() {
			sameHeightGroup++
			if($(window).width() >= 1232) {
				sameHeightGroupLength = 4;
			} else if($(window).width() < 1232 && $(window).width() > 991) {
				sameHeightGroupLength = 3;
			} else if($(window).width() <= 991 && $(window).width() > 575) {
				sameHeightGroupLength = 2;
			}
			if(sameHeightGroup <= sameHeightGroupLength){
				$(this).addClass("sameHeightGroup");
				setEqualHeight($(this).closest(".parent-same-height").find(".sameHeightGroup .same-height"));
				setEqualHeight($(this).closest(".parent-same-height").find(".sameHeightGroup .same-height-2"));
			} else {
				$(".parent-same-height .same-height-each").removeClass("sameHeightGroup");
				sameHeightGroup = 1;
				$(this).addClass("sameHeightGroup");
				setEqualHeight($(this).closest(".parent-same-height").find(".sameHeightGroup .same-height"));
				setEqualHeight($(this).closest(".parent-same-height").find(".sameHeightGroup .same-height-2"));
			}
		});
	} else {
		$(".same-height, .same-height-2").css({
			"height" : "auto"
		});
	}
}






window.onload = function() {
	
	doneResizing();

	$(".preloader img").delay(1000).fadeOut(300);
	$(".preloader").delay(1600).fadeOut(600);

}