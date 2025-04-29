// Soyut Bir Sınıf
abstract class MusicPlayer {
  constructor(public apiUrl: string) {}

  getMusic() {
    console.log(this.apiUrl + " api'ından müzikler çekiliyor");
  }

  abstract playMusic(name: string): void;
}

// Soyut sınıfı miras alan sınıf
class Spotify extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " spotify'da çalıyor");
  }
}

// Soyut sınıfı miras alan sınıf
class AppleMusic extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " applemusic'de çalıyor");
  }
}

const spotify = new Spotify("www.spotiy.api.com");
const apple = new AppleMusic("www.api.apple.com");

spotify.getMusic();
spotify.playMusic("test");

apple.getMusic();
apple.playMusic("test");
