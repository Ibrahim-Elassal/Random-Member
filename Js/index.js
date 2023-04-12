
const quotes =[
    "Rawan Anwar", 
"Ahmed Basiouny",
"Ali hesham",
"aya ragab",
"basmala yasser",
"karim ezz",
"menna mohamed",
"mohamed gamal",
"mostafa abdo",
"mostafa mahmoud",
"mostafa mohamed",
"nada ashraf",
"omar ayman",
"omar sayed",
"rahma mokhtar",
"yara ahmed",
"zeyad sameh"

];


function generateQuotes() {
    let quote = ' ';
    for ( let i = 0; i < 1; i++ ) {
        quote += quotes[(Math.floor(Math.random() * quotes.length ))];
    }
    return  document.getElementById("demo").innerHTML =  quote;
}
