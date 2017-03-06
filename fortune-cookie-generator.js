///////////////////////////////////////////
//
// Fortune Cookie Generator
//
//////////////////////////////////////////

var generateFortuneCookie = function() {
    // Grab the paragraph with the ID
    // `fortune-cookie-text` to insert text into that element.
    var getFortune = document.getElementById('fortune-cookie-text');
  
    // Create a new `li` element
    var list = document.createElement('li');
  
    // Set the `innerHTML` of the li element equal to the `innerHTML` of
    // the `#fortune-cookie-text` element.
    list.innerHTML = getFortune.innerHTML;
  
    // Select the `#previous-fortunes-container` container and use
    // `appendChild()` to append the previous fortunes element you created above.
    var previousFortunes = document.getElementById('previous-fortunes-list');
    previousFortunes.appendChild(list);
  
    // Select a new (random) fortune cookie saying from the fortunesList
    // Update the `innerText` of the `#fortune-cookie-text` element.
    getFortune.innerHTML = fortunesList[Math.floor(Math.random() * fortunesList.length)];

}

// The following data list will generate the fortunes. 
var fortunesList = [
    "People are naturally attracted to you.",
    "You learn from your mistakes... You will learn a lot today.",
    "If you have something good in your life, don't let it go!",
    "What ever your goal is in life... embrace it, visualize it, and it will be yours.",
    "You cannot love life until you live the life you love.",
    "Be on the lookout for coming events; They cast their shadows beforehand.",
    "If trouble comes knocking on the door, you don't need to offer it a place to sit down.",
    "Meeting adversity well is the source of your strength.",
    "A dream you have will come true.",
    "If you feel like you're always struggling, it's because you never give up.",
    "Your smile will be infectious today.",
    "Our deeds determine us, as much as we determine our deeds.",
    "Never give up. You're not a failure if you don't give up.",
    "You will become great if you believe in yourself.",
    "There is no greater pleasure than seeing your loved ones prosper.",
    "The greatest love is self-love.",
    "A very attractive person has a message for you.",
    "You already know the answer to the questions lingering inside your head.",
    "It is now, and in this world, that we must live.",
    "You must try, or hate yourself for not trying.",
    "You can make your own happiness.",
    "The greatest risk is not taking one.",
    "Love can last a lifetime, if you want it to.",
    "Adversity is the parent of virtue.",
    "The future is non-binary.",
    "Serious trouble will bypass you.",
    "Now is the time to try something new.",
    "Wealth awaits you very soon.",
    "If you feel you are right, stand firmly by your convictions.",
    "If winter comes, can spring be far behind?",
    "Keep your eye out for someone special.",
    "Call your local senator today, every voice counts!",
    "You are very talented in many ways.",
    "A stranger, is a friend you have not spoken to yet.",
    "A new voyage will fill your life with untold memories.",
    "Your ability for accomplishment will follow with success.",
    "Its amazing how much good you can do if you dont care who gets the credit.",
    "Everyone agrees. You are the best.",
    "Live consists not in holding good cards, but in playing those you hold well.",
    "Jealousy doesn't open doors, it closes them!",
    "It's better to be alone sometimes.",
    "When fear hurts you, conquer it and defeat it!",
    "Let the deeds speak.",
    "You will be called in to fulfill a position of high honor and responsibility.",
    "The person on the top of the mountain did not fall there.",
    "You will conquer obstacles to achieve success.",
    "Joys are often the shadows, cast by sorrows.",
    "Fortune favors the brave."
]
