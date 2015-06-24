Template.galleryThumbnail.helpers({
	cover: function () {
		var dummyImg = {title: "Não há fotos na galeria", url: "/images/no-pic.gif"};
		return this.cover || Photos.findOne({postId : this._id}) || dummyImg;
	}
});
