/* 
we can use abstraction in two ways : 

1. interface 
2. abstract class

*/

/*
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

// implementation

class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log("playing music");
  }
  pause(): void {
    console.log("paused music");
  }
  stop(): void {
    console.log("stopped music");
  }
}


const MahbubPlayer = new MusicPlayer();

MahbubPlayer.play();
MahbubPlayer.pause();
MahbubPlayer.stop();

*/


abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}


class MahbubPlayer extends MediaPlayer {
  play(): void {
    console.log("playing music");
  }
  pause(): void {
    console.log("paused music");
  }
  stop(): void {
    console.log("stopped music");
  }
}

const player = new MahbubPlayer();
player.play();
player.pause();
player.stop();
