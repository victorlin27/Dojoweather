function choosecity() {
    alert ("Loading Weather Report... ")
}

var message = document.querySelector("#alert")

console.log(message)

function accept(){
        message.remove();
}

function pickdegree(element){
    console.log(element.value);
    celone.innerText = "75°"
    celtwo.innerText = "80°"
    celthree.innerText = "69°"
    celfour.innerText = "78°"
    farone.innerText = "65°"
    fartwo.innerText = "66°"
    farthree.innerText = "61°"
    farfour.innerText = "70°"
}

var celone = document.querySelector("#hot1")
var celtwo = document.querySelector("#hot2")
var celthree = document.querySelector("#hot3")
var celfour =document.querySelector("#hot4")

var farone = document.querySelector("#cold1")
var fartwo = document.querySelector("#cold2")
var farthree = document.querySelector("#cold3")
var farfour = document.querySelector("#cold4")