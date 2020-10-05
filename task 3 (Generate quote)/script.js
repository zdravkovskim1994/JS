var object = [
    {
        quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:
        "Nelson Mandela"
    },
    {
        quote:
        "The way to get started is to quit talking and begin doing.",
        author:
        "Walt Disney"
    },
    {
        quote:
        "Life is what happens when you're busy making other plans.",
        author:
        "John Lennon"
    },
    {
        quote:
        "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author:
        "Benjamin Franklin"
    },
    {
        quote:
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author:
        "Helen Keller"
    },
    {
        quote:
        "It is during our darkest moments that we must focus to see the light.",
        author:
        "Aristotle"
    },
    {
        quote:
        "Whoever is happy will make others happy too.",
        author:
        "Anne Frank"
    },
    {
        quote:
        "You will face many defeats in life, but never let yourself be defeated.",
        author:
        "Maya Angelou"
    },
    {
        quote:
        "In the end, it's not the years in your life that count. It's the life in your years.",
        author:
        "Abraham Lincoln"
    },
    {
        quote:
        "Never let the fear of striking out keep you from playing the game.",
        author:
        "Babe Ruth"
    }
    
]


    
function generateQuote() {
    var randomNumber = Math.floor(Math.random() * object.length);
    document.getElementById('quoteDisplay').innerHTML = object[randomNumber].quote;
    document.getElementById('author').innerHTML = object[randomNumber].author;
}