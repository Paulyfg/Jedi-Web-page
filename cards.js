var url = 'https://catsworld.herokuapp.com/cards';

var cards = [];

$( window ).on( "load", ()=> {

    axios.get(`${url}`)
    .then( response => {
        cards = response.data;
        console.log(cards);
        makecards(cards);
    } )
    .catch( err => {
        console.log(err);
    } )

});

const makecards = cards => {
    
    if(!cards) return;

    cards.forEach(function(item) {

        console.log(item);
        
        $('#containercards').append(
            `<div class="col-lg-4 col-md-6 col-xs-12">
                <div class="center containershop px-2">
                    <div class="cardshop">
                        <div class="middle backgroundshop"> <img src=${item.image} alt=${item.name} height="250" width="auto" class="mt-3">
                            <h5>${item.name}</h5> <span><b>Genre:</b> ${item.genre} - <b>Age:</b> ${item.age}</span>
                        </div>
                    </div>
                </div>                
            </div>`
        )
    })
    
};


