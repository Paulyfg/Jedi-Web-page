function isEmpty(value){
    return (value == null || value.length === 0);
}

window.onload = function(){
    
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {

            document.getElementById("Warning").innerHTML = 
                `<div class="alert alert-danger alert-dismissible fade show" role="alert"> 
                    <strong>Error!</strong> All fields are required.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`

        } else {
            alert(`Welcome, ${username}!`);
            console.log(email, password);

            //window.location.replace('video.html');

        }

    })

}

