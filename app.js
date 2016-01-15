'use strict';

$(function(){

  $.each($('.list-card .js-card-name'), function(){
    var $this = $(this);
    var href = $this.attr('href');
    var cardId = href.replace(/.*c\/(.*)\/.*/, function(_, match){
      return match;
    });

    var cardIdDiv = $("<div class='santi'>" + cardId + "</div>");

    //cardIdDiv.prependTo($this);
    //$this.text($this.text().toLowerCase());
  });

});
