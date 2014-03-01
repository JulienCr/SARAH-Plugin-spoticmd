exports.action = function(data, callback, config, SARAH){

  // INSTRUCTIONS
  // Installer le plugin sarah-spoticmd dans le dossier %homepath%/Documents/Spotify (windows)

  // Retrieve config
  var config = config.modules.spoticmd;

  var speech;

  var setPlaylist = function (playlist){
    switch(playlist){
      case 'divers':
      id = "6K4FoD0TWj7Q8ABiYIu1vK"
      playlistName = 'Divers';
      break;

      case 'fr':
      id = "43WHnTqSJpySpR77ko7IqS"
      playlistName = 'Chansons françaises';
      break;

      case 'oldfr':
      id = "2Q8JUDcyYwie3XnExVVwhX"
      playlistName = 'Vieilles chansons françaises';
      break;

      default:
      case 'diversfr':
      id = "4KAmGsiF9ei65FtJ5M8ArD"
      playlistName = 'Divers et Chansons françaises';
      break;
    }

    return {"name": playlistName, 'id' : id};
  }

  var sendCommand = function (cmd){
    SARAH.runApp(config.spotify_plugin_uri+cmd+':'+Math.random().toString(36).substring(7));
  }

  switch (data.cmd) {

    case 'play' :
      sendCommand('play');
      speech = 'Voilà pour la musique !';
      console.log(config);
      break;

    case 'pause' :
      sendCommand('pause');
      speech = 'Je coupe la musique.';
      break;

    case 'next' :
      sendCommand('next');
      speech = 'Morceau suivant !';
      break;

    case 'prev' :
      sendCommand('prev');
      speech = 'Morceau précédent !';
      break;

    case 'playTrack' :
      track = cleanSearch(data.dictation);
      console.log('---> Morceau : '+track);
      sendCommand("playTrack:"+encodeURI(track));
      speech = 'Voici ce que j\'ai trouvé.';
      break;

    case 'playArtist' :
      artist = cleanSearch(data.dictation);
      console.log('---> Artiste : '+artist);
      sendCommand("playArtist:"+encodeURI(artist));
      speech = 'Voici ce que j\'ai trouvé.';
      break;

    case 'playlist' :
      if (data.playlist) {
        var playlist = setPlaylist(data.playlist);
        sendCommand("setPlaylist:"+playlist.id);
        speech = 'Je met la playlist '+playlist.name;
      } else {
        speech = 'Je n\'ai pas trouvé cette playlist';
      }
      break;

    default:
    speech = 'Je n\'ai pas compris.';
    break;

  }

  callback({'tts':speech});

}

var cleanSearch = function(s){
  regex = /(?:(?:chanson|album)(?:s)?)+(?:(?: )de|des|du|de la)? (.*)$/i;
  var match = s.match(regex);
  return match[1];
}