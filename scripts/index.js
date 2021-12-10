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
    {
        title: 'TRANSFORMERS',
        image: '../images/posters/poster1.jpg',
        rating: 3,
        year: 2007,
        genre: 'Sci-Fi',
        match: 65,
        description: '',
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
var current_movie_id = null;
var current_movie = [];

setCurrent_movie(0);

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

$('.rec-wrapper').on('click', '.rec-item', (e) => {
    console.log('clicked');
    console.log(e.target.id);
    var id = e.target.id;
    var $id = '#' + id;
    var movie_id = $($id).data('movie_id');
    console.log("movie_id:" + movie_id);
    selectMovie(movie_id)

})

function setCurrent_movie(id) {
    current_movie_id = id;
    current_movie = movies[current_movie_id];
}


function selectMovie(movie_id) {
    var old_movie_id = current_movie_id;
    console.log('old_movie_id:' + old_movie_id);
    current_movie_id = movie_id;
    console.log('current_movie_id:' + current_movie_id);

    // REMOVED OLD SELECT
    var $old_movie_id = '#rec-item-main_' + old_movie_id;
    $($old_movie_id).removeClass('rec-item-main-select');

    // SET NEW SELECT
    var $current_movie_id = '#rec-item-main_' + current_movie_id;
    $($current_movie_id).addClass('rec-item-main-select');

    setCurrent_movie(current_movie_id);
    setFilmDetails(current_movie);


}


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
    setColorStuff(image); // !!! BUG - MAKING BODY INCREASE IN SIZE (temp fix hml overflow hidden)
    fillRecommendations('.rec-wrapper', movies);

}

function fillRecommendations(div, movieArray) {
    $(div).html(``);
    for (var m = 0; m < movieArray.length; m++) {
        var movie = movieArray[m];
        var title = movie.title;
        var image = movie.image;
        var rating = movie.rating;
        var year = movie.year;
        var genre = movie.genre;
        var match = movie.match + '% Match';
        var description = movie.description;
        var id = 'rec-item-main_' + m;
        var id_ = `#` + id;
        var image_link = `url(${image})`;
        console.log(title);
        console.log(image);
        console.log(id_);
        var template = `
        <div class='rec-item' >
            <div id='${id}' data-movie_id='${m}' class='rec-item-main'></div>
        </div>
        `;
        $(div).append(template);
        $(id_).css('background-image', image_link);
        if (m == current_movie_id) {
            $(id_).addClass('rec-item-main-select');
        }
    }
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

    // !!! BUG - MAKING BODY INCREASE IN SIZE
    v.getPalette().then((palette) => {
        var p = palette;
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