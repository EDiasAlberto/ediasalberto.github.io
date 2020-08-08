$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("section")
  for (var i = 0; i < tags.length; i++) {
    var currentTag = tags[i];
    if ($(currentTag).position().top < pageBottom) {
    $(tag).addClass("visible")
    } else {
  $(tag).removeClass("visible")

  }
})
