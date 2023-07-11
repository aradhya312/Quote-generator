const quotes = [
    {
      text: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela"
    },
    {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison"
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    }
  ];
  
  const quoteElement = document.querySelector('#quote');
  const newQuoteButton = document.querySelector('#new-quote');
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  function renderQuote() {
    const quote = getRandomQuote();
    quoteElement.innerHTML = `
      <blockquote>"${quote.text}"</blockquote>
      <cite>- ${quote.author}</cite>
    `;
  }
  
  newQuoteButton.addEventListener('click', renderQuote);
  
  renderQuote();