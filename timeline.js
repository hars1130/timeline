jQuery(document).ready(function ($) {
  $(".barLabelConatiner .label").click(function () {
    timelineItem = $(
      ".timelineItem[data-step=" + $(this).attr("data-step-link") + "]"
    );
    let bgWidth =
      $(this).offset().left +
      $(this).width() / 2 -
      $(this).parent().parent().offset().left;
    if ($(this).attr("data-step-link") == 8) {
      bgWidth = bgWidth + $(this).width() / 2;
    }
    console.log();
    $(this).parent().parent().find(".barBg").css({ width: bgWidth });
    $(window).scrollTop(
      timelineItem.offset().top - $(".timelineItem[data-step=1]").offset().top
    );
  });
});
