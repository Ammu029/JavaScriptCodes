// const api_url = "https://api.quotable.io/random";
// const quote = document.getElementById('quote1');
// const author = document.getElementById('author1');

//  async function getquote(url){
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data.content);
//     quote.innerHTML = data.content;
//  }

//  getquote(api_url);

const api_url = "https://api.quotable.io/random";

// Ensure DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    const quote = document.getElementById('quote1');
    const author = document.getElementById('author1');

    // Check if quote and author elements exist before calling getquote
    if (quote && author) {
        getquote(api_url);
    } else {
        console.error('Elements with IDs "quote1" and/or "author1" not found.');
    }
});

async function getquote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Ensure quote element exists before setting its innerHTML
        const quote = document.getElementById('quote1');
        const author = document.getElementById('author1');

        if (quote) {
            quote.innerHTML = data.content;
        } else {
            console.error('Element with ID "quote1" not found.');
        }

        if (author) {
            author.innerHTML = `- ` + data.author;
        } else {
            console.error('Element with ID "author1" not found.');
        }
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}
