'use strict'

//library has a name and creator
//library has many playlists ([])
//playlist objects can be added to instance of library
//playlist has a nmae upon creaction
//playlist has many tracks
//track has a title, rating(1-5), length(interger in secs) req'd upon creation
//playlist has overallRating function calculate rating by average all tracks
//playlists has totalDuration function sum length of all tracks

class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    if (playlist instanceof Playlist) {
      this.playlists.push(playlist)
    }
  }

}

class Playlist {
  constructor(name){
    this.name = name;
    this.tracks = [];
  }

addTrack(track) {
    if(track instanceof Track) {
      this.tracks.push(track);
    }
  }

  overallRating() {
    let sum = 0;
    this.tracks.forEach((element) => {
      sum += element.rating;
    })
    return sum / this.tracks.length
  }

  totalDuration() {
    let total = 0;
    this.tracks.forEach((element) => {
      total += element.length;
    })
    return total;
  }
}

class Track {
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const library1 = new Library("workout", "Karen");
const playlist1 = new Playlist("cycling");
const track1 = new Track("cycle", 5, 240);


playlist1.addTrack(track1);
library1.addPlaylist(playlist1);


console.log("library1:      ", library1);
console.log("playlist1:     ", playlist1);
console.log("track1:        ", track1);
console.log("playlist1.overallRating():      ", playlist1.overallRating());
console.log("playlist1.totalDuration():      ", playlist1.totalDuration());



