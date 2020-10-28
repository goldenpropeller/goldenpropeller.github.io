const updateForm = (msg) => {
    //set clicked to true
    clicked = true;
    //grab form group with sign up text and button
    let fg = document.querySelector('form')
    //hide form group
    fg.remove()
    //grab message div
    let msgbox = document.querySelector('.success-message')
    //update the text with msg and display it
    msgbox.innerText = msg

}

const handleSubmit = (e) => {
    //halt page refresh
    e.preventDefault()
    //if clicked already, break out
    if (clicked) {
        return;
    }
    //update click status
    clicked = true;
    //update form with thank you
    updateForm("👍 You're all set! Thank you! 🎉🎉");
    //post data to google sheet
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            //log success and set localstorage flag for alreadysignedup check
            console.log('Success!👍', response)
            localStorage.setItem("s", "")
        })
        .catch(error => {
            //on error log error, but we won't set the signed up flag
            // that way user can try again later
            console.error('Error!', error.message)
        })
}

const scriptURL =
    'https://script.google.com/macros/s/AKfycbzMGJnn7YExlhKNA-M_Fgp3ZfC_av6GwEIQR8xmkvFkd5bEwEpO/exec'
const form = document.forms['submit-to-google-sheet']
const alreadysignedup = Object.keys(localStorage).includes("s");
let clicked = false

//if already signed up...
if (alreadysignedup) {
    // update the status div and stop
    updateForm("👍 You're already signed up! Thanks! 🎉🎉")
}else{
    // otherwise add submit button listener
    form.addEventListener('submit', handleSubmit)
}

