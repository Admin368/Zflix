// var v,p,c1,c2,c3 = '';

var image_background = '../images/posters/poster.webp';
// var image_background = '../images/posters/poster1.jpg';


$(document).ready(() => {
    // alert('sdsdssdd');
    setBackgroundImage(image_background);
    setColorStuff();


})

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

function setColorStuff() {
    // USING VIBRANT

    // Vibrant.from(image).getPalette(function(err, palette) {});-
    // // Promise
    // Vibrant.from(image).getPalette().then(function(palette) {});
    // // Or
    var c1 = 'rgba(0,0,0,0.165703781512605)';
    var c2 = 'rgba(230,14,14,0.16290266106442575)';
    var c3 = 'rgb(91,30,232,0.27494747899159666)';
    var p;
    let v = new Vibrant(image_background)
        // v.getPalette((err, palette) => console.log(palette))
        //     // Promise
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