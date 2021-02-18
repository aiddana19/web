var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var img = document.createElement('img');
    img.src = "https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo.png";
    img.style.width='50px'
    span.className = "close";
    span.appendChild(img);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inp").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("my").appendChild(li);
    document.getElementById("inp").value = "";
        var span = document.createElement("SPAN");
        var img = document.createElement('img');
        img.src = "https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo.png";
        img.style.width='50px'
        span.className = "close";
        span.appendChild(img);
        li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}



