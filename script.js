let tavolo = $("#tavolo")
let pacco = $("#pacchetto")

let background;
let gradient;
let img_background;
pacco.
    hover(function () {
        pacco.
            animate({ rotate: '10deg' }, 200).
            animate({ rotate: '-10deg' }, 200).
            animate({ rotate: '0deg' }, 200).
            css("cursor", "pointer");
    }, function () { }).
    click(function () {
        pacco.
            hide(500, function () {
                for (i = 0; i < 5; i++) {
                    let carta = ($("<div>"))
                    $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1024)}`, function (data, status) {
                        console.log(data)
                        if (data.types[0].type.name == "fire") {
                            background = "red"
                            gradient = "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,145,0,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/foco.jpg)"
                        }
                        else if (data.types[0].type.name == "water") {
                            background = " rgb(0,26,255)"
                            gradient = "  radial-gradient(circle, rgba(0,26,255,1) 0%, rgba(30,178,255,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/mare.jpg)"
                        }
                        else if (data.types[0].type.name == "ice") {
                            background = " rgb(0,26,255)"
                            gradient = "  radial-gradient(circle, rgba(0,26,255,1) 0%, rgba(30,178,255,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/neve.jpg)"
                        }
                        else if (data.types[0].type.name == "grass" || data.types[0].type.name == "bug") {
                            background = " rgb(22,101,0)"
                            gradient = "radial-gradient(circle, rgba(22,101,0,1) 0%, rgba(1,190,58,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/erba.jpg)"
                        }
                        else if (data.types[0].type.name == "electric") {
                            background = "rgb(214,172,0)"
                            gradient = "radial-gradient(circle, rgba(214,172,0,1) 27%, rgba(242,239,0,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/fulmini.png)"
                        }
                        else if (data.types[0].type.name == "ghost") {
                            background = " rgb(122,0,214)"
                            gradient = "radial-gradient(circle, rgba(122,0,214,1) 27%, rgba(186,0,242,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/ghost.jpg)"
                        }
                        else if (data.types[0].type.name == "psychic") {
                            background = " rgb(122,0,214)"
                            gradient = "radial-gradient(circle, rgba(122,0,214,1) 27%, rgba(186,0,242,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/psico.jpg)"
                        }
                        else if (data.types[0].type.name == "poison") {
                            background = " rgb(122,0,214)"
                            gradient = "radial-gradient(circle, rgba(122,0,214,1) 27%, rgba(186,0,242,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/poison.webp)"
                        }
                        else if (data.types[0].type.name == "ground" || data.types[0].type.name == "fighting" || data.types[0].type.name == "rock") {
                            background = " rgb(184,62,0)"
                            gradient = "radial-gradient(circle, rgba(184,62,0,1) 41%, rgba(214,123,1,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/roccia.png)"
                        }
                        else if (data.types[0].type.name == "steel") {
                            background = " rgb(120,120,120)"
                            gradient = "radial-gradient(circle, rgba(120,120,120,1) 41%, rgba(182,182,182,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/steel.jpg)"
                        }
                        else if (data.types[0].type.name == "fairy") {
                            background = "rgb(251,45,240)"
                            gradient = "radial-gradient(circle, rgba(251,45,240,1) 41%, rgba(255,136,234,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/fairy.jpg)"
                        }
                        else if (data.types[0].type.name == "dark") {
                            background = "rgb(32,32,32)"
                            gradient = "radial-gradient(circle, rgba(32,32,32,1) 41%, rgba(85,85,85,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/dark.webp)"
                        }
                        else if (data.types[0].type.name == "normal") {
                            background = "rgb(175,175,175)"
                            gradient = "radial-gradient(circle, rgba(175,175,175,1) 41%, rgba(244,240,240,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/normale.jpeg)"
                        }
                        else if (data.types[0].type.name == "flying") {
                            background = "rgb(175,175,175)"
                            gradient = "radial-gradient(circle, rgba(175,175,175,1) 41%, rgba(244,240,240,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/flying.jpg)"
                        }
                        else if (data.types[0].type.name == "dragon") {
                            background = "rgb(175,175,175)"
                            gradient = "radial-gradient(circle, rgba(175,175,175,1) 41%, rgba(244,240,240,1) 100%, rgba(255,255,255,1) 100%)"
                            img_background = "url(img/drake.jpg)"
                        }
                        let nome = $("<div>").
                            css("color", "black").
                            append($("<div>").text(`${data.species.name[0].toUpperCase() + data.species.name.slice(1)}`));
                        let carta = $("<div>").
                            addClass("carta").
                            append($("<div>").
                                addClass("testo").
                                append($("<div>").text(data.species.name[0].toUpperCase() + data.species.name.slice(1))).
                                append($("<div>").text(`HP ${data.stats[0].base_stat}`))).
                            append($("<div>").
                                css("background-image", `${img_background}`).
                                addClass("content_img").
                                html(`<img class="fix_img" src="${data.sprites.other['official-artwork'].front_default}">`)).
                            append($("<div>").
                                addClass("mosse").
                                append($("<div>").text(data.moves[3].move.name)).
                                append($("<div>").text(data.stats[1].base_stat))).
                            append($("<div>").
                                addClass("mosse").
                                append($("<div>").text(data.moves[2].move.name)).
                                append($("<div>").text(data.stats[1].base_stat + 15)))

                        carta.
                            css("background", `${background}`).
                            css("background", `${gradient}`);

                        img_background = " "
                        background = " "
                        gradient = " "
                        tavolo.append(carta)
                        carta.show(500)
                    })
                }
            });
    })
function colore() {

}


