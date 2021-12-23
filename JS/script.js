function showText() {
    document.getElementById('text').style.display="block";
    console.log("message");
}

function hideText() {
    document.getElementById('text').style.display="none";
}

function confirmation() {
    var answer = window.confirm("Are you sure?");
    if(answer) {
        document.getElementById('confirmation').innerHTML = "<p>Confirmed</p>";
    }
    else {
        document.getElementById('confirmation').innerHTML = "<p>Rejected</p>";
    }
    
}


