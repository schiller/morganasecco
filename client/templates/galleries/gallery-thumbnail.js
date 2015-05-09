Template.galleryThumbnail.helpers({
	cover: function () {
		var dummyImg = {name: "Não há fotos na galeria", url: "img/no-pic.gif"};
		return this.cover || Photos.findOne({galleries : this}) || dummyImg;
	}
});