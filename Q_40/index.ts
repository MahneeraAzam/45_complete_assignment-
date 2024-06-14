//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


type Talbum = {Name:string, album:string, Track_num ?:number}


function make_album(Artist_name:string, album_title:string, track?:number): Talbum {
  
  let album :Talbum = {
    Name : Artist_name,
    album : album_title,

  }

if (track !== undefined) {
  album.Track_num = track
}

  return album
  
}
console.log(make_album("Arijit", "Arijit's_Album",));
console.log(make_album("Vishal", "Vishal's_Album"));
console.log(make_album("Shreya", "Shreya's_Album", 8))
  




//.................................................2nd way...........................


// function make_album(Artist_name:string, album_title:string, track?:number) {
  
//   let album: {Artist_name:string, album_title:string, track?:number} = {
//     Artist_name : Artist_name,
//     album_title : album_title,
//     track : track
//   }

//   return album
  
// }
// console.log(make_album("Arijit", "KK",));
// console.log(make_album("Vishal", "sanam"));
// console.log(make_album("Shreya", "Arman", 8))