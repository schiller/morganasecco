Template.postThumbnailAdmin.onRendered(() => {
  $('.masonry').imagesLoaded().progress(() => {
    $('.masonry').masonry('layout');
  });
});

Template.postThumbnailAdmin.helpers({
  cover: function () {
    var dummyImg = {
      title: 'Não há fotos no post',
      urlSmall: '/images/morgana_coracao_preto.jpg',
      urlMedium: '/images/morgana_coracao_preto.jpg',
      urlLarge: '/images/morgana_coracao_preto.jpg',
      urlVeryLarge: '/images/morgana_coracao_preto.jpg'
    };
    return Photos.findOne({_id : this.coverId}) ||
      Photos.findOne({postId : this._id}) ||
      dummyImg;
  }
});
