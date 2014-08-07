// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Playlist</th>')
      .append(this.collection.map(function(songModel){
        return new SongQueueEntryView({model:songModel}).render();
      })
    );
  }

});
