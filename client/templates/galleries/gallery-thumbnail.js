Template.galleryThumbnail.helpers({
	cover: function () {
		var dummyImg = {title: "Não há fotos na galeria", url: "/img/no-pic.gif"};
		return this.cover || Photos.findOne({galleryId : this._id}) || dummyImg;
	}
});
