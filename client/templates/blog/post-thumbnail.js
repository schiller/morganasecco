Template.postThumbnail.onRendered(function () {
	// (function ($) {
	// 	$(".masonry").imagesLoaded(function () {
	// 		$(".masonry").masonry();
	// 	});
	// })(jQuery);
});

Template.postThumbnail.helpers({
  cover: function () {
    var dummyImg = {title: "Não há fotos no post", urlThumb: "/images/morgana_coracao_preto.jpg"};
    return Photos.findOne({_id : this.coverId}) || Photos.findOne({postId : this._id}) || dummyImg;
  }
});
