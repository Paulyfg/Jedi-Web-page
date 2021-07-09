var url = "https://catsworld.herokuapp.com/db";

// function isEmpty(value){
//     return (value == null || value.length === 0);
// }

$( window ).on( "load", () => {

   $( '#submitbutt' ).on( "click", () => {

        var username = $('#username').val();
        var password = $('#password').val();

        axios.get(`${url}?name=${username}`)
            .then( response => {
                var data = response.data;
                if(data.password===password) {
                    alert('Welcome');
                }
            } )
            .catch( err => {
                console.log(err);
            } )

        // axios.post(${url}, )
        //     .then( response => {
        //         var data = response.data;
        //         if(data.password===password) {
        //             alert('Welcome');
        //         }
        //     } )
        //     .catch( err => {
        //         console.log(err);
        //     } )
    });

});

