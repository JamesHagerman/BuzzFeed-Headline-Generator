var http = require("http");

var express = require('express');
var app = express();

// Original code:


var advArray = [
	"incredibly",
	"hilariously",
	"particularly",
	"fantastically",
	"totally",
	"literally",
	"definitely",
	"trendy",
	"simply",
	"deliciously",
	"unbelievably", 
	"only",
	"lovely",
	"tenderly",
	"wildly",
	"eagerly",
	"tightly",
	"safely",
	"rudely",
	"madly",
	"loosely",
	"foolishly",
	"always",
	"deliberately",
	"elegantly",
	"hopelessly",
	"perfectly",
	"selfishly",
	"totally",
	"badly",
	"awesomely",
	"fucking",
	"awkwardly",
	"tragically"
];

var adjArray =[
	"mundane",
	"hilarious",
	"stupid",
	"outrageous",
	"disgusting",
	"best",
	"vintage",
	"hipster",
	"surprising",
	"disturbing",
	"funniest",
	"juicy",
	"sacred",
	"mind-bending",
	"coma-inducing",
	"90's",
	"80's",
	"70's",
	"drool-worthy",
	"aggressive",
	"bloody",
	"next-level",
	"colorful",
	"handsome",
	"magnificent",
	"shiny",
	"sparkling",
	"ugly",
	"expensive",
	"horrible",
	"impossible",
	"innocent",
	"modern",
	"mushy",
	"odd",
	"outstanding",
	"powerful",
	"prickly",
	"real",
	"super",
	"talented",
	"wild",
	"awful",
	"bad",
	"clumsy",
	"confused",
	"crazy",
	"creepy",
	"dangerous",
	"disgusted",
	"evil",
	"fierce",
	"grumpy",
	"lazy",
	"mysterious",
	"nasty", 
	"naughty",
	"obnoxious",
	"outrageous",
	"scary",
	"terrible",
	"funny",
	"fat",
	"gigantic",
	"huge",
	"massive",
	"teeny-tiny",
	"noisy",
	"filthy",
	"life-changing",
	"unfathomable",
	"teeny-weeny",
	"fuzzy",
	"greasy",
	"prickly",
	"uneven",
	"chewy",
	"wet"
];

var verbArray =[
	"you won't believe",
	"you can't imagine",
	"you're unable to comprehend",
	"that prove",
	"about",
	"you turn down for what that",
	"you can't watch at work",
	"you'll want to do in bed",
	"you know you love",
	"they did last Christmas",
	"you dreamt about at night",
	"you did when you were five",
	"you experienced on your last acid trip",
	"you hide from your mom",
	"Kanye interrupts",
	"you need to see",
	"you wish you did",
	"you fantasize about",
	"you'll never want to see again",
	"you'll start crying over",
	"you will never admit you do",
	"you lust after",
	"you know and love",
	"you can't tweet about",
	"you won't post on facebook",
	"you can't SnapChat",
	"you can Instagram",
	"you won't show your kids",
	"you have to try",
	"you'll be obsessing over",
	"you crave everyday",
	"your parents will never understand",
	"you wish happened to you",
	"you can put on your bucketlist"
];

var nounArray =[
	"Kanye West",
	"Orange is the New Black",
	"Game of Thrones",
	"Jesus",
	"Kimye",
	"Breaking Bad",
	"Tim Howard",
	"Benedict Cumberbatch",
	"Enrique Iglesias' mole",
	"guacamole",
	"Lady Gaga",
	"Scientology",
	"Beyonce",
	"Sriracha",
	"Kimchi",
	"horse masks",
	"slippery eels",
	"itchy balls",
	"sausage fest",
	"hotdog legs",
	"Horse Masks",
	"kids these days",
	"Koala bears with untreated Chlamydia",
	"Pears that look like butts",
	"hotdog legs",
	"Yogurt commercials",
	"Wacky waving inflatable arm flailing tube man",
	"Miley cyrus’ tongue",
	"orphans and puppies",
	"man sideboob",
	"Sarah Palin",
	"edible thongs",
	"Justin Bieber's first pube",
	"sausage fest",
	"Oprah Winfrey",
	"Dumbledore's hat",
	"spirit fingers",
	"Ouija Board",
	"Selfie",
	"hotdog legs",
	"Paul the octopus",
	"Doge",
	"erotic cucumbers",
	"furious honey badgers",
	"Quesorito",
	"Ron Swanson",
	"Catholic nuns",
	"Nyan cat",
	"Coachella",
	"Instagram filter",
	"#hashtags",
	"Sharknado",
	"Let It Go cover",
	"Vine account",
	"Nicolas Cage",
	"the Fresh Prince of Bel-air",
	"Miley Cyrus’ snaggle tooth",
	"Sk8r Bois",
	"Zach Galifinakis",
	"Poop emoji",
	"Ice Bucket challenge",
	"Batman vs. Superman",
	"Chris Pratt",
	"Fanny Pack",
	"French bulldog",
	"chihuahuas",
	"Sriracha",
	"BitCoins",
	"Pornhub",
	"Helen Keller",
	"Playboy Mansion's Basement",
	"Tim Allen",
	"Lance Armstrong's only testicle",
	"The New Testament",
	"a big red dog",
	"the red rocket",
	"Barack Obama",
	"Old Lady Weenus",
	"James Dean",
	"Yellow Submarine",
	"Metta World Peace",
	"kegs of beer",
	"Kim Kardashian's booty",
	"Jimmy Fallon",
	"Curious George",
	"Helga from Hey Arnold",
	"unibrow",
	"Razor Scooter",
	"the man, the myth, the legend",
	"Woodstock",
	"Nickelback groupies",
	"Keith Richard's sweat",
	"Richard Simmons",
	"horse tranquilizer",
	"Kenny Power's K-Swiss Sneakers",
	"the MFCEO",
	"a brass monkey",
	"Bob Marley's dreadlock",
	"Guantanamo Bay",
	"an Angler Fish",
	"a young and hip Alec Baldwin",
	"Olive Garden"
];

var prepoArray =[
	"in",
	"to",
	"on",
	"up",
	"behind",
	"like",
	"without"
];

var outcomeArray = [
	"will melt your brain",
	"you have to see before you die",
	"will blow your mind",
	"Miley would twerk for",
	"you have to do in your 20s",
	"you have to do in your 30s",
	"make you go bananas",
	"only happen when you're high",
	"haters are gonna hate",
	"Kimye would give birth to",
	"Paris Hilton would like totally love",
	"make you projectile vomit",
	"give you the best orgasm",
	"make you cringe",
	"burn your retinas",
	"make you buy the next round",
	"make you jump for joy",
	"make you touch yourself at night",
	"will drop the bass",
	"should be a national holiday",
	"will induce seizures",
	"make you want to party",
	"make your heart skip a beat",
	"are just plain wrong",
	"are worse than aids",
	"were never explained",
	"will go down in history",
	"shouldn't be on the internet",
	"will soon be a George Bush painting",
	"make great song lyrics",
	"will soon be painted by George Bush",
	"make great song lyrics",
	"are better than tripping on Bath Salts",
	"you'll want to lather on your body",
	"just don't make sense",
	"will soon be trending",
	"Benjamin Franklin never invented",
	"will change the way you live",
	"will make you never eat tapioca again",
	"look better than moldy cottage cheese",
	"should be a viral meme",
	"will be on display in MOMA",
	"will break the internet"
];



var headline = function() {
	console.log("Headline called");
	var number = Math.floor((Math.random() * 100) + 2);
	var randomAdv = advArray[Math.floor(Math.random()*advArray.length)];
	var randomAdj = adjArray[Math.floor(Math.random()*adjArray.length)];
	var randomVerb = verbArray[Math.floor(Math.random()*verbArray.length)];
	var randomNoun = nounArray[Math.floor(Math.random()*nounArray.length)];
	var randomPrep = prepoArray[Math.floor(Math.random()*prepoArray.length)];
	var randomOutcome = outcomeArray[Math.floor(Math.random()*outcomeArray.length)];
	return number + " " + randomAdv + " " + randomAdj + " things "+ randomVerb + " happened " + randomPrep + " " + randomNoun + " that " + randomOutcome;
};

// Node.js Code:
// app.get('/', function(req, res){
//   console.log("Request received.");


//   // var index_page = loadPage("./index.html");
//   res.send(index_page);
// });


// OpenShift nonesense:
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 5000 // 8888 was my original port
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0' // 0.0.0.0 was my original ip. 127.0.0.1 also should work


app.use(express.static(__dirname + '/public'));

app.get('/headline.json', function(req, res){
  console.log("Request received.");
  res.send(headline());
});

var server = app.listen(server_port, server_ip_address, function() {
    console.log('Listening on port %d', server.address().port);
});






