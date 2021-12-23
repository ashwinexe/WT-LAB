var a = 1
var b = "hello"

console.log(a + b);

function showText() {
    document.getElementById('text').style.display="block";
	console.log('hello')


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

function loop()
{
    for(let i=0; i<5; i++){
        var list = document.createElement("li");
        var text = document.createTextNode("Hello World " + i);
        list.appendChild(text);
        document.getElementById('forLoop').appendChild(list);
        console.log("hello world");
    }
}

loop();