window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", e => {
    const transcipt = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join("")

    p.textContent = transcipt;

    if(e.results[0].isFinal) {
        p = document.createElement("p");
        words.appendChild(p);
    }

    // if(transcipt.includes("get the weather")) {
    //     console.log("weather");
    // }
    
    console.log(transcipt);
})
recognition.addEventListener("end", recognition.start);

recognition.start();