var quotes = [

	{quote: "WUBBA LUBBA DUB DUBS!!!", character: "Rick Sanchez"},

	{quote: "Get off the high road Summer. We all got pink eye because you wouldn't stop texting on the toilet.", character: "Rick Sanchez"},

	{quote: "I'm not looking for judgement, just a yes or no. Can you assimilate a giraffe?", character: "Rick Sanchez"},

	{quote: "25 shmeckles? I-I-I-I don't even know what that- what is that? Is that a lot?", character: "Rick Sanchez"},

	{quote: "Don't break an arm jerking yourself off Morty.", character: "Rick Sanchez"},

	{quote: "It's like the N word and the C word had a baby, and it was raised by all the bad words for Jews.", character: "Rick Sanchez"},

	{quote: "Yo! What up my glip glops!", character: "Rick Sanchez"},

	{quote: "Like nothing shady ever happened in a fully furnished office? You ever hear about Wall Street Morty? You know what those guys do in their fancy board rooms? They take their balls and dip 'em in cocaine and wipe 'em all over each other. You know grandpa goes around and he does his business in public because grandpa isn't shady.", character: "Rick Sanchez"},

	{quote: "Me irresponsible?? All I wanted was for you to hand me a screwdriver! But instead you had me buckle down and...make you a...ruphie...juice serum, so you can ruphie that poor girl at your school. W-w-w-w--are you kidding me, Morty?! You're really gonna try to take the high road on this one?? Y'know your-you're a little creep, Morty! Your-your-your-you're just a little creepy creep person!!", character: "Rick Sanchez"},

	{quote: "It's just Rick and Morty. Rrrick and Morty and their adventures, Morty. Rick and Morty, forever and forever, a hundred years Rick and Morty, s... things. Me and Rick and Morty runnin' around and Rick and Morty time. Aaall day long forever. All, a hundred days Rick and Morty forever a hundred times. Over and over Rick and Morty adventures dot com W W W dot Rick and Morty dot com W W W Rick and Morty adventures all hundred years. Every minute Rick and Morty dot com W W W hundred times Rick and Morty dot com.", character: "Rick Sanchez"},

	{quote: "Listen, Morty, I hate to break it to you but what people call 'love' is just a chemical reaction that compels animals to breed.", character: "Rick Sanchez"},

	{quote: "It's a figure of speech, Morty! They're bureaucrats! I don't respect them. Just keep shooting, Morty! You have no idea what prison is like here!", character: "Rick Sanchez"},

	{quote: "Its a device Morty, that when you put it in your ear, you can enter people's dreams Morty. Its just like that movie that you keep crowing about.", character: "Rick Sanchez"},

	{quote: "I'm sorry Summer, your opinion means very little to me.", character: "Rick Sanchez"},

	{quote: "Morty, can you get to the left nipple?", character: "Rick Sanchez"},

	{quote: "Well then get your shit together. Get it all together and put it in a backpack, all your shit, so it's together. ...and if you gotta take it somewhere, take it somewhere ya know? Take it to the shit store and sell it, or put it in a shit museum. I don't care what you do, you just gotta get it together... Get your shit together.", character: "Morty Smith"},

	{quote: "Aww, gee, you got me there, Rick.", character: "Morty Smith"},

	{quote: "Don't be trippin dog we got you", character: "Morty Smith"},

	{quote: "Why are you doing this bit? We're gonna die.", character: "Morty Smith"},

	{quote: "You're like Hitler, except...Hitler cared about Germany, or something", character: "Morty Smith"},

	{quote: "Nobody exists on purpose. Nobody belongs anywhere. Everybody’s gonna die. Come watch TV?", character: "Morty Smith"}

];

var bgImages = [
  "https://i.imgur.com/3GnUFl2.jpg",
  "https://i.imgur.com/3GVmZmQ.png",
  "https://i.imgur.com/Anvgc5p.jpg",
  "https://i.imgur.com/csZT6UN.jpg",
  "https://i.imgur.com/IaWNWDY.png",
  "https://i.imgur.com/l7drcs8.jpg",
  "https://i.imgur.com/p8X7lph.jpg",
  "https://i.imgur.com/nUIM3x0.jpg",
  "https://i.imgur.com/QBTUWjI.jpg",
  "https://i.imgur.com/iiwySkL.jpg",
  "https://i.imgur.com/KdY2BN9.jpg",
  "https://i.imgur.com/7zRWP6K.jpg",
  "https://i.imgur.com/mLTLJzj.jpg"
];

function rndmBackground(){
  return bgImages[Math.floor(Math.random() * bgImages.length)];
}

function rndmQuote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function newQuote(){
  var random = rndmQuote();
  $(".quote").html('"' + random.quote + '"');
  $(".character").html("-" + random.character);
}

function newBackground(){
  $("body").css("background-image", "url(" + rndmBackground() + ")");
}

$(document).ready(function(){
  newBackground();
  newQuote();
  $(".quote-button").on("click", function(){
    newQuote();
  });
  $(".bg-button").on("click", function(){
    newBackground();
  });
});
