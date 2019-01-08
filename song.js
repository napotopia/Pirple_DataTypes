/**
 * This file provides information about "Have a Cigar",
 * a song written by Roger Waters and produced by
 * Pink Floyd in 1975. It contains 15 variables each
 * with different attributes about the song.
 */


/**
 * @type {string}
 * @const
 * @description Title of the song.
 */
const title = "Have a Cigar";


/**
 * @type {string}
 * @const
 * @description Name of the artist.
 */
const artist = "Pink FLoyd";


/**
 * @type {string}
 * @const
 * @description Name of the album.
 */
const album = "Wish You Were Here";


/**
 * @type {object}
 * @const
 * @description Release date of the song.
 */
const releaseDate = { year: 1975, month: "November", day: 15 }


/**
 * @type {number}
 * @const
 * @description Duration of the song in seconds.
 */
const runningTime = 308; // seconds


/**
 * @type {string}
 * @const
 * @description Duration of the song formatted in MM:SS.
 */
const runningTimeFormatted = "5:08";


/**
 * @type {string}
 * @const
 * @description Genre of the song.
 */
const genre = "Progressive Rock";


/**
 * @type {string}
 * @const
 * @description Country in which the song was recorded.
 */
const country = "England";


/**
 * @type {string}
 * @const
 * @description City in which the song was recorded.
 */
const city = "London";


/**
 * @type {string}
 * @const
 * @description Studio in which the song was recorded.
 */
const studio = "Abbey Road Studios";


/**
 * @type {string}
 * @const
 * @description Name of the producer of the song.
 */
const producer = "Pink Floyd";


/**
 * @type {string}
 * @const
 * @description Writer of the song.
 */
const songWriters = "Roger Waters";


/**
 * @type {array}
 * @const
 * @description Labels under which the song was produced.
 */
const label = ["Harvest", "Columbia"];


/**
 * @type {boolean}
 * @const
 * @description Wether artist is active as current date.
 */
const artistActive = false;

console.log("Title: " + title);
console.log("Artist: " + artist);
console.log("Album: " + album);
console.log("Release Date (data): " + releaseDate.day + " " + releaseDate.month + " " + releaseDate.year);
console.log("Duration (seconds): " + runningTime);
console.log("Duration: " + runningTimeFormatted);
console.log("Genre: " + genre);
console.log("Country: " + country);
console.log("City: " + city);
console.log("Studio: " + studio);
console.log("Producer: " + producer);
console.log("Song Writer(s): " + songWriters);
console.log("Label: " + label);
console.log("Artist Active: " + artistActive);