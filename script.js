let tavolo = $("#tavolo")
let pacco = $("#pacchetto")
let background;
let gradient;
pacco.
    hover(function () {
        pacco.
            animate({ right: '20px' }, 200).
            animate({ right: '0px' }, 200).
            css("cursor", "pointer");
    }, function () { }).
    click(function () {
        pacco.
            hide(500,function(){
                for (i = 0; i < 5; i++) {
                    let carta=($("<div>"))
                    $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1024)}`, function (data, status) {
                        console.log(data)
                        if(data.types[0].type.name=="fire"){
                            background = "red"
                            gradient= "linear-gradient(133deg, rgba(255,0,0,1) 0%, rgba(255,145,0,1) 67%, rgba(255,255,255,1) 100%)"
                        }
                        else if(data.types[0].type.name=="water") {
                            background = " rgb(0,26,255)"
                            gradient= "  linear-gradient(133deg, rgba(0,26,255,1) 0%, rgba(30,178,255,1) 76%, rgba(255,255,255,1) 100%)"
                        }
                        else if(data.types[0].type.name=="grass") {
                            background = " rgb(22,101,0)"
                            gradient= "linear-gradient(133deg, rgba(22,101,0,1) 0%, rgba(1,190,58,1) 76%, rgba(255,255,255,1) 100%)"
                        }
                        else if(data.types[0].type.name=="electric") {
                            background = "rgb(214,172,0)"
                            gradient="linear-gradient(133deg, rgba(214,172,0,1) 27%, rgba(242,239,0,1) 76%, rgba(255,255,255,1) 100%)"
                        }
                        else if(data.types[0].type.name=="ghost") {
                            background = "rgb(214,172,0)"
                            gradient="linear-gradient(133deg, rgba(214,172,0,1) 27%, rgba(242,239,0,1) 76%, rgba(255,255,255,1) 100%)"
                        }
                        let nome = $("<div>").
                            css("color", "black").
                            append($("<div>").text(`${data.species.name[0].toUpperCase() + data.species.name.slice(1)}`));
                        let carta = $("<div>").
                            addClass("carta").
                            append($(nome)).
                            append($("<div>").
                            addClass("content_img").
                            html(`<img class="fix_img" src="${data.sprites.other['official-artwork'].front_default}">`))
                        carta.
                        css("background",`${background}`).
                        css("background",`${gradient}`)
                        background = " "
                        gradient = " "
                        tavolo.append(carta)
                        carta.show(500)
                    })
                }
            });
    })
function colore(){

}


