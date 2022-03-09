const cards = $(".keyfeatures-box-content");

cards.each(function(ix, card) {
  const link = $(card).find(".keyfeature-link").first();
  const href = $(link).attr("href");
  if (href) {
    $(card).click(function(event) {
      const isTextSelected = window.getSelection().toString();
      if (!isTextSelected) {
        window.location.href = href;
      }
    });
    $(card).css("cursor", "pointer");
    $(card).addClass("hasLink");
  }
});
