const quote_area = document.getElementById("quote");
const author_area = document.getElementById("author");
const create_button = document.querySelector(".new-quote");
const tweet_button = document.querySelector(".tweet");

create_button.addEventListener("click",getQuote);

async function getQuote(){
    const apiUrl = "https://api.quotable.io/random"
    let response = await fetch(apiUrl);
    var data = await response.json();

    quote_area.innerHTML = data.content;
    author_area.innerHTML=data.author;

}
getQuote();

tweet_button.addEventListener("click",tweet);
function tweet(){
    const url = "https://twitter.com/intent/tweet?text=";
    window.open(`${url} ${quote_area.innerHTML}---by ${author_area.innerHTML}`,"Tweet Window", width="600", height="300");
}
