let title = document.querySelector(".title")
let nameC = document.querySelector(".name")
let email = document.querySelector(".email")
let message = document.querySelector(".message")
let submit = document.querySelector(".submit")


const requestBody = {
    title: title.innerHTML.trim(),
    name: nameC.innerHTML.trim(),
    sender: email.innerHTML.trim(),
    message: message.innerHTML.trim()
}


const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
};


submit.addEventListener("submit", function(e){
    e.preventDefault();
    fetch('https://goresume-api.herokuapp.com/messages', options)
    .then(data => {
        console.log(data);
        if (!data.status) {
            throw Error(data.status);
        }
        console.log(data)
        return data.json();
        }).then(update => {
        console.log(update);
    })

    cleanup()
})

function cleanup(){
    title.innerHTML=""
    nameC.innerHTML=""
    email.innerHTML=""
    message.innerHTML=""
}