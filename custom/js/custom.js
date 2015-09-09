$(document).ready(function () {
  var href, $lastLink;
  
  $("a.toggle-search").remove();
  
  $lastLink = $(".custom-link:last");
  href = $lastLink.prop("href");
  href = "https://ed-era.com/books/" + "maths";
  $lastLink.prop("href", href);
});

