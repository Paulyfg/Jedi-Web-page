var url = "https://catsworld.herokuapp.com/users";

function isEmpty(value){
    return (value == null || value.length === 0);
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$( window ).on( "load", ()=> {

   $( '#login' ).on( "submit", function(event) {

        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        if (isEmpty(username) || isEmpty(password)) {

            $("#Warning").html(
                `<div class="alert alert-danger alert-dismissible fade show" role="alert"> 
                    <strong>Error!</strong> All fields are required.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`
            );

        } else {

            axios.get(`${url}?name=${username}`)
                .then( response => {
                    var data = response.data;
                    console.log(data[0]);
                    if(!isEmpty(data[0]) && data[0].password===password) {
                        alert(`Welcome, ${username}! We are glad to see you again. ♥`);

                        window.location.replace('cats.html');

                    } else alert('Incorrect username or password.');
                } )
                .catch( err => {
                    console.log(err);
                } )
        }
    });

    $( '#register' ).on( "submit", function(event) {
        
        event.preventDefault();

        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();

        if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {

            $("#Warning").html(
                `<div class="alert alert-danger alert-dismissible fade show" role="alert"> 
                    <strong>Error!</strong> All fields are required.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`
            );

        } else {

            if (isEmail(email)){

                axios.get(`${url}?name=${username}`)
                .then( response => {
                    var data = response.data;
                    console.log(data[0]);
                    if (isEmpty(data[0])) {

                        let data = { name: username, email: email, password: password };
    
                        axios.post(`${url}`, data)
                            .then( response => {
                                var data = response.data;
                                console.log(data);
                                alert(`Welcome, ${username}! You will receive an email in a few minutes to verify your account. Thank you to join us! ♥`);
        
                                window.location.replace('cats.html');
                        } )
                        .catch( err => {
                            console.log(err);
                        } )
    
                    } else alert('That username has been taken. Please choose another.');
                    
                } )
                .catch( err => {
                    console.log(err);
                } )

            } else alert('Incorrect email');

        }
    });

});

const istaken = async (username) => {
    try {
        var response = await axios.get(`${url}?name=${username}`);
        taken = response.data;
        console.log(taken[0]);
    } catch (err) {
        console.error(err);
    }
};


