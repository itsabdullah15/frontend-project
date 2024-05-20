const quoteWrapper = document.querySelector('.quote-wrapper');
const refreshButton = document.querySelector('.refresh-button');


function fetchRandomQuote(){
    fetch('https://api.quotable.io/quotes/random')
    .then(response => response.json())
    .then(result => displayQuote(result[0]))
    .catch((e) => console.log(e))
}


function displayQuote(getQuote){
    console.log(getQuote);
    quoteWrapper.innerHTML = `
    <div class="quote-item">
    <p><b>Author: </b>${getQuote.author}</p>
    <p><b>Content: </b>${getQuote.content}</p>
    <p>${getQuote.dateAdded}</p>
    <p>${getQuote.tags[0]}</p>
    </div>`;
}
fetchRandomQuote()

refreshButton.addEventListener("click", () => {
    fetchRandomQuote();
});