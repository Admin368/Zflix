// var v,p,c1,c2,c3 = '';

// var image_background = '../images/posters/poster.webp';
// var image_background = '../images/posters/poster1.jpg';
var movies = [{
        title: 'MONEY HEIST',
        image: '../images/posters/poster.webp',
        rating: 4,
        year: 2021,
        genre: 'Action',
        match: 99,
        description: `
        With millions of ueros and their lives on the line, nine robbers attempt to pull off the greatest heist of all time
        `,
    },
    {
        title: 'TRANSFORMERS',
        image: '../images/posters/poster1.jpg',
        rating: 3,
        year: 2007,
        genre: 'Sci-Fi',
        match: 65,
        description: '',
    },
]

var current_movie = movies[0];

// SETTING IT MANUALLY
// var current_movie = {
//     title: 'TRANSFORMERS',
//     image: '../images/posters/poster1.jpg',
//     rating: 3,
//     year: 2007,
//     genre: 'Sci-Fi',
//     match: 65,
//     description: 0,
// };

$(document).ready(() => {
    // alert('sdsdssdd');
    setFilmDetails(current_movie);
});

function setFilmDetails(movie) {
    var title = movie.title;
    var image = movie.image;
    var rating = movie.rating;
    var year = movie.year;
    var genre = movie.genre;
    var match = movie.match + '% Match';
    var description = movie.description;

    setBackgroundImage(image);
    $('.preview-container-title').text(title);
    $('.preview-container-details-year').text(year);
    $('.preview-container-details-genre').text(genre);
    $('.preview-container-details-match').text(match);
    $('.preview-container-description').text(description);
    fillRatings(rating);
    setColorStuff(image);




}

function fillRatings(rating) {
    // var rating = movie.rating;
    var fullRatingIcon = `<i class="fas fa-star rating-icon"></i>`;
    var noRatingIcon = `<i class="far fa-star rating-icon"></i>`;
    if (rating > 5) { rating = 5; }
    for (let r = 1; r <= rating; r++) {
        let div = '#preview-container-details-rating-' + (r);
        $(div).html(fullRatingIcon);
    }
    for (let r = (rating + 1); r <= 5; r++) {
        let div = '#preview-container-details-rating-' + r;
        $(div).html(noRatingIcon);
    }
}

function setTitleGlow(color) {
    var value = `${color} 0px 0px 28px`;
    $('.preview-container-title').css('text-shadow', value);
}

function setTitleColor(color) {
    $('.preview-container-title').css('color', color);
}

function setBackgroundImage(image) {
    var image_link = `url(${image})`;
    $('.site-wrapper').css('background-image', image_link);
}

function setColorOverlay(c1, c2, c3) {
    var gradient = `radial-gradient(circle, ${c1}  0%, ${c2}   60%, ${c3}  100%)`
    $('.overlay').css("background", gradient);
}

function setColorStuff(image) {
    // USING VIBRANT
    var c1 = 'rgba(0,0,0,0.165703781512605)';
    var c2 = 'rgba(230,14,14,0.16290266106442575)';
    var c3 = 'rgb(91,30,232,0.27494747899159666)';
    var p;
    let v = new Vibrant(image)
    v.getPalette().then((palette) => {
        var p = palette;
        // console.log(palette);
        var c1 = p.Muted.getHex();
        var c2 = p.LightMuted.getHex();
        var c3 = p.Vibrant.getHex();
        var DarkMuted = p.DarkMuted.getHex();
        var DarkVibrant = p.DarkVibrant.getHex();
        var LightMuted = p.LightMuted.getHex();
        var LightVibrant = p.Vibrant.getHex();
        var Muted = p.Muted.getHex();
        var Vibrant = p.Vibrant.getHex();

        //SET GRADIENT COLOR
        setColorOverlay(c1, c2, c3);

        //SET TITLE COLOR
        // setTitleColor(Vibrant);

        //SET GLOW COLOR
        setTitleGlow(Vibrant);
    })

}