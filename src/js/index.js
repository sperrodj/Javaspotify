import Player from './Player.js';
import songs from '../assets/songs/*.mp3';

const map = { };

let aux = 1;
for (var key of Object.keys(songs)) {
    map [`.item-${aux}`] = songs [key];
    console.log(map)
    aux++;
}

const player = new Player (map);
