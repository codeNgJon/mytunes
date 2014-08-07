// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    //console.log("Play in SongModel");
    this.trigger('play', this);
  },
  enqueue: function(){
    //console.log("enqueue was called on the model");
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  ended: function(){
    this.trigger('ended', this);
  }


});
