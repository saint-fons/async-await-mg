console.log("hello")
window.onload = pageLoaderHandler;
function pageLoaderHandler() {
    alert("Iam alive!");
}


function init() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + ".jpg";
    image.src = name;
}



window.onload = init;