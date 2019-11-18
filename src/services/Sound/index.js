import Sound from 'react-native-sound';

const song = {
      title: 'Beep',
      isRequire: true,
      url: require('../../assets/Sounds/beep.mp3')
};

export default class _Sound {
      static beep = async () => {
            callback = (error, sound) => {
                  if (error)
                        return;

                  song.onPrepared && song.onPrepared(sound, component);
                  sound.play(() => sound.release());
            };

            sound = new Sound(song.url, error => callback(error, sound));
      }
}