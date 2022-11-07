import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (event) {
    localStorage.setItem(STORAGE_KEY, event.seconds);
  }),
  1000
);

player.on('loaded', () => {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  player.setCurrentTime(currentTime);
});
