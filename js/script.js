/* global $ */
let imageLinks = ["https://i.ytimg.com/vi/djV11Xbc914/hqdefault.jpg", "https://i.ytimg.com/vi/xB9MLUAWkAw/maxresdefault.jpg", "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjg4MTE2MjM4/frank-sinatra-9484810-3-402.jpg", "https://lwlies.com/wp-content/uploads/2018/06/george-michael-freedom-film-1108x0-c-default.jpg", "https://i.scdn.co/image/7da0877636b199b27e64ee117f71f5b97758349a", "https://images.indianexpress.com/2016/11/mission-impossible-759.jpg", "https://img.taste.com.au/hyE5dSN3/taste/2016/11/spaghetti-with-meatballs-and-spicy-tomato-sauce-102298-1.jpeg"];
let songs = ["Take On Me", "Spanish Flea", "Fly Me To The Moon", "Careless Whisper", "Yakety Sax", "Mission Impossible (Corrupted)", "ASMR (I'm Sorry)"];
let artists = ["A-Ha", "Herb Alpert", "Frank Sinatra", "George Michael", "Unknown", "Adam Clayton and Larry Mullen Jr.", "BlovesASMR Eating Her Way"];
let songLengths = ["3:47", "60:00", "2:28","5:01:", "4:34", "0:47", "16:16"];
let links = ["https://www.youtube.com/watch?v=djV11Xbc914", "https://www.youtube.com/watch?v=1sruEnQ9HkU", "https://www.youtube.com/watch?v=5hxibHJOE5E", "https://www.youtube.com/watch?v=izGwDsrQ1eQ", "https://www.youtube.com/watch?v=ZnHmskwqCCQ", "https://www.youtube.com/watch?v=Erm8wJVXVao", "https://www.youtube.com/watch?v=PMCA5znLBD0"];
let allArrays = [imageLinks, songs, artists, songLengths, links];
let elem1 = $("#images");
let elem2 = $("#songs");
let elem3 = $("#artists");
let elem4 = $("#lengths");
let elem5 = $("#links");
let elems = [elem1, elem2, elem3, elem4, elem5];
for (let i = 0; i < allArrays.length; i++) {
    allArrays[i].forEach(function(element){
        if (i === 0) {
            elems[i].append("<img src='" + element + "'>");
        } else if (i === 4) {
            elems[i].append("<a href='" + element + "'>Link</a>");
        } else {
            elems[i].append("<h1>" + element + "</h1>");
        }
    });
}
function addSongInfo(){
    imageLinks.unshift($("#image").val());
    songs.unshift($("#song").val());
    artists.unshift($("#artist").val());
    songLengths.unshift($("#length").val());
    links.unshift($("link").val());
}
$("#add").click(function() {
    addSongInfo();
});