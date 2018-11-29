console.log("welcome to lei Yu's portfolio");
var escapedText1 = "He said: \"Yes!\", that's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';
$(document).ready(function() {
  $(".project").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
    });
  $(".project").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});
var element = $(this).siblings(".project-details");
// .is(":visible") will return true if the element is currently invisible
if (element.is(":visible")) {
  element.slideUp();
} else {
  element.slideDown();
}
