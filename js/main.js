var quotes = [
    "Be yourself; everyone else is already taken.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "So many books, so little time.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
    "A friend is someone who knows all about you and still loves you.",
    "To live is the rarest thing in the world. Most people exist, that is all."
];
var currentQuoteIndex = -1;
function getRandomQuoteIndex() {
    var index;

    for (var i = 0; i < 100; i++) {
        index = Math.floor(Math.random() * quotes.length);
        if (index !== currentQuoteIndex) {
            currentQuoteIndex = index;
        }
    }
    return index;
}

function displayNewQuote() {
     randomIndex = getRandomQuoteIndex();
    document.getElementById('quote').innerText = quotes[randomIndex];
}
 initialIndex = getRandomQuoteIndex();
document.getElementById('quote').innerText = quotes[initialIndex];