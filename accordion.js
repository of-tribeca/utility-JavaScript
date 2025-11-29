// Copyright (c) 2025 WIING WebServiceCloud LLC(WebCreatorCloudProject TRIBECA). Released under the MIT license.
/* NEWS or FAQ 開閉リスト */
$(function () {
  $(".faq-list .faq-answ-wrap").hide();
const faqTitle = document.querySelector('.faq-titl-wrap');
  $(".faq-list .faq-titl-wrap").click(function () {
    if (!$(this).hasClass("sele-item")) {
      $(this).addClass("sele-item").next(".faq-list .faq-answ-wrap").slideDown();
	  //faqTitle.textContent = 'close';
    } else if ($(this).hasClass("sele-item")) {
      $(this).removeClass("sele-item").next().slideUp();
	   //faqTitle.textContent = 'open';
    }
  })
})

