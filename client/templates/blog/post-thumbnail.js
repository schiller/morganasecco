Template.postThumbnail.helpers({
  cover: function () {
    var dummyImg = {title: "Não há fotos no post", url: "/images/no-pic.gif"};
    return Photos.findOne({_id : this.coverId}) || Photos.findOne({postId : this._id}) || dummyImg;
  }
});
