const quotes = [
  {
    quote:
      'The road to success and the road to failure are almost exactly the same.',
    author: 'Colin R. Davis'
  },
  {
    quote: 'It is better to fail in originality than to succeed in imitation.',
    author: 'Herman Melville'
  },
  {
    quote:
      'Success is walking from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill'
  },
  {
    quote: 'All progress takes place outside the comfort zone.',
    author: 'Michael John Bobak'
  },
  {
    quote:
      'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney'
  },
  {
    quote:
      'Success seems to be connected with action. Successful people keep moving.',
    author: 'Conrad Hilton'
  },
  {
    quote: 'In order to succeed, we must first believe that we can.',
    author: 'Nikos Kazantzakis'
  },
  {
    quote:
      'The only place where success comes before work is in the dictionary.',
    author: 'Vidal Sassoon'
  }
];

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;
