// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.addClass('songQueue').html('<th>Playlist</th>').append(this.collection.map(function(song){
        return new SongQueueEntryView({model:song}).render();
      })
    );
  }

});
