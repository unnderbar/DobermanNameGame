window.onload = function() {
  generatePerson();
};

//Matris med förnamn, efternamn, bild
var names = [
  { name: 'Adrian', lastname: 'Tomic', image: 'bilder/adrian.jpg' },
  { name: 'Albert', lastname:'Cordenius', image: 'bilder/abbe.jpg'},
  { name: 'Alexandra', lastname:'Rashem', image:'bilder/Alexandra.jpg' },
  { name: 'Angela', lastname:'Tillman Sperandio', image:'bilder/angela.jpg' },
  { name: 'Anna', lastname:'Esseen', image:'bilder/anna_2.jpg' },
  { name: 'Anna', lastname:'Strömberg', image:'bilder/anna_stromberg.jpg' },
  { name: 'Bjarne', lastname:'Melin', image:'bilder/bjarne.jpg' },
  { name: 'Daniel', lastname:'Hägglund', image:'bilder/Daniel.jpg' },
  { name: 'David', lastname:'Engzell', image:'bilder/David_E.jpg' },
  { name: 'Edvard', lastname: 'Scott', image:'bilder/Edvard.jpg'},
  { name: 'Elin', lastname:'Ankerblad' , image:'bilder/elin.jpg'},
  { name: 'Elinore', lastname:'Brandén', image:'bilder/Elinore.jpg' },
  { name: 'Erik' , lastname:'Lindebratt', image:'bilder/erik_l.jpg'},
  { name: 'Gunilla' , lastname:'Boström', image:'bilder/gunilla.JPG'},
  { name: 'Gustav' , lastname:'Rådström', image:'bilder/gustav_radstrom.jpg'},
  { name: 'Hanna' , lastname:'Öquist', image:'bilder/hanna_oquist.jpg'},
  { name: 'Hannes' , lastname:'Strassburg', image:'bilder/Hannes.png'},
  { name: 'Henrik' , lastname:'Karlsson', image:'bilder/henrik_k.jpg'},
  { name: 'Herman' , lastname:'Carlsson', image:'bilder/herman.jpg'},
  { name: 'Hilary' , lastname:'Persson', image:'bilder/hilary.png'},
  { name: 'Ida' , lastname:'Lind', image:'bilder/ida.jpg'},
  { name: 'Jacob' , lastname:'Gunnarsson', image:'bilder/jacob_gunarsson.jpg'},
  { name: 'Jennifer', lastname:'Fernandez', image:'bilder/Jennifer.png'},
  { name: 'Jens' , lastname:'Lindkvist', image:'bilder/jens_lindkvist.jpg'},
  { name: 'Johan' , lastname:'Bernunger', image:'bilder/johan_b.jpg'},
  { name: 'Johan' , lastname:'Dovelius', image:'bilder/johan_d.jpg'},
  { name: 'Jonatan' , lastname:'Pettersson', image:'bilder/jonatan.JPG'},
  { name: 'Kim' , lastname:'Kelly', image:'bilder/kim_kelly.jpg'},
  { name: 'Klara' , lastname:'Leander', image:'bilder/klara_leander.jpg'},
  { name: 'Klas' , lastname:'Thorsén', image:'bilder/klas.jpg'},
  { name: 'Kristina' , lastname:'Carlander', image:'bilder/Kristina_Carlander.jpg'},
  { name: 'Lars' , lastname:'Ericsson', image:'bilder/Lars_ericsson.jpg'},
  { name: 'Linnea' , lastname:'Becker', image:'bilder/linnea_becker.jpg'},
  { name: 'Lisa' , lastname:'Lindström', image:'bilder/lisa_lindstrom.jpg'},
  { name: 'Liva' , lastname:'Lager', image:'bilder/liva_lager.jpg'},
  { name: 'Magnus' , lastname:'Bergmark', image:'bilder/Magnus_Bergmark.jpg'},
  { name: 'Magnus' , lastname:'Karlsson', image:'bilder/Magnus_Karlsson.jpg'},
  { name: 'Maria' , lastname:'Lübeck', image:'bilder/maria_l.jpg'},
  { name: 'Maria' , lastname:'Nohlström', image:'bilder/maria_nohlstrom.jpg'},
  { name: 'Marith' , lastname:'Fält', image:'bilder/marith.jpg'},
  { name: 'Mattias' , lastname:'Jonsson', image:'bilder/mattias.jpg'},
  { name: 'Melodie' , lastname:'Sandström', image:'bilder/Mel.png'},
  { name: 'Michael' , lastname:'Burkin', image:'bilder/Michael_Burkin.jpg'},
  { name: 'Nanna' , lastname:'Bergh', image:'bilder/Nanna.png'},
  { name: 'Nils' , lastname:'Westerlund', image:'bilder/NIls.jpg'},
  { name: 'Nina' , lastname:'Lind', image:'bilder/nina_lind.jpg'},
  { name: 'Olof' , lastname:'Ålenius', image:'bilder/olof_alenius.jpg'},
  { name: 'Patricia' , lastname:'Richter', image:'bilder/patricia_richter.jpg'},
  { name: 'Peter' , lastname:'Olofsson', image:'bilder/peter.jpg'},
  { name: 'Petter' , lastname:'Eriksson', image:'bilder/petter_eriksson.jpg'},
  { name: 'Richard' , lastname:'Sellgren', image:'bilder/Richard_Sellgren.jpg'},
  { name: 'Robert' , lastname:'Lindgren', image:'bilder/robert.jpg'},
  { name: 'Robin' , lastname:'Karlsson', image:'bilder/robin.jpg'},
  { name: 'Sanna' , lastname:'Wickman', image:'bilder/sanna.jpg'},
  { name: 'Sara' , lastname:'Johannesson', image:'bilder/Sara_Johannesson.jpg'},
  { name: 'Simon' , lastname:'Bohm', image:'bilder/Simon.JPG'},
  { name: 'Sofie' , lastname:'Nilsson', image:'bilder/Sofie_Nilsson.jpg'},
  { name: 'Therese' , lastname:'Björkqvist', image:'bilder/Therese.jpg'},
  { name: 'Tove' , lastname:'Blomgren', image:'bilder/tove_blomgren.jpg'},
  { name: 'Ulrika' , lastname:'Roth', image:'bilder/ulrika_roth.jpg'},
  { name: 'Unn' , lastname:'Swanström', image:'bilder/unn.png'},
  //additions 2018-08-12
  { name: 'Anne' , lastname:'Hellman Vold', image:'bilder/anne.jpg'},
  { name: 'Abe' , lastname:'Poultridge', image:'bilder/abe.jpg'},
  { name: 'Andy' , lastname:'Kang', image:'bilder/andy.jpg'},
  { name: 'Anna' , lastname:'Oddbjörn', image:'bilder/oddbjorn.png'},
  { name: 'Anna' , lastname:'Palleschitz', image:'bilder/annapalle.png'},
  { name: 'Cornelia' , lastname:'Hermelin', image:'bilder/cornelia.png'},
  { name: 'Joe' , lastname:'Fraga', image:'bilder/joe.png'},
  { name: 'Daniel' , lastname:'Persson', image:'bilder/danielp.png'},
  { name: 'David' , lastname:'Lillewarg', image:'bilder/lillewarg.png'},
  { name: 'Elly' , lastname:'Billqvist', image:'bilder/elly.png'},
  { name: 'David' , lastname:'Lillewarg', image:'bilder/lillewarg.png'},
  { name: 'Emil' , lastname:'Jonsson', image:'bilder/emil.png'},
  { name: 'Emma' , lastname:'Gillingsjö', image:'bilder/emma.png'},
  { name: 'Frances' , lastname:'Ferris Crocker', image:'bilder/frances.png'},
  { name: 'Garrett' , lastname:'Wexler', image:'bilder/garrett.png'},
  { name: 'Hanna' , lastname:'Kulin', image:'bilder/hannakulin.png'},
  { name: 'Hanna' , lastname:'Hein', image:'bilder/hein.png'},
  { name: 'Hannes' , lastname:'Johansson', image:'bilder/hannesj.png'},
  { name: 'Ivey' , lastname:'Inman', image:'bilder/ivey.png'},
  { name: 'Jaime' , lastname:'Munoz', image:'bilder/jaime.png'},
  { name: 'Johan' , lastname:'Frössén', image:'bilder/johanfro.png'},
  { name: 'Johan' , lastname:'Frössén', image:'bilder/johanfro.png'},
  { name: 'Johan' , lastname:'Börjesson', image:'bilder/johanborje.png'},
  { name: 'Jonas' , lastname:'Beck', image:'bilder/jonas.png'},
  { name: 'Linus' , lastname:'Nord', image:'bilder/linus.png'},
  { name: 'Musse' , lastname:'Nord', image:'bilder/musse.png'},
  { name: 'Lovis' , lastname:'Dahl', image:'bilder/lovis.png'},
  { name: 'Lucas' , lastname:'Lima', image:'bilder/lucas.png'},
  { name: 'Lukas' , lastname:'Nässil', image:'bilder/lukas.png'},
  { name: 'Malin' , lastname:'Hankvist', image:'bilder/malin.png'},
  { name: 'Maria' , lastname:'Norström', image:'bilder/marianor.png'},
  { name: 'Moa' , lastname:'Corriera', image:'bilder/moa.png'},
  { name: 'Molly' , lastname:'Boid', image:'bilder/molly.png'},
  { name: 'Neil' , lastname:'Woolfries', image:'bilder/neil.png'},
  { name: 'Paul' , lastname:'Jones Winlund', image:'bilder/paul.png'},
  { name: 'Patrik' , lastname:'Von Knorring', image:'bilder/vonknorring.png'},
  { name: 'Patrik' , lastname:'Hjelm', image:'bilder/patrik.png'},
  { name: 'Sara' , lastname:'Everskog', image:'bilder/saraever.png'},
  { name: 'Victor' , lastname:'Essnert', image:'bilder/victoress.png'},
  { name: 'Vivian' , lastname:'Kamen', image:'bilder/vivian.png'},
  { name: 'Klara' , lastname:'Wieslander', image:'bilder/klarawie.png'},









];

var correctGuesses =  [];
var i;
//För att räkna ut hur många man klarat i följd
var currentStreak = 0;
var highScoreVar = 0;
var currentPerson;
var guessBox = document.getElementById('guessbox');
var checkAnswerButton = document.getElementById('checkAnswerButton');
var nextButton = document.getElementById('nextPerson');


//Byter bilden man ska gissa
function generatePerson(){
  i = Math.floor(Math.random() * names.length);
  console.log(names.length);
  currentPerson = names[i];
  console.log('generated person:'+ currentPerson.name);
  document.getElementById('guessWho').src =currentPerson.image;
  names.splice(i, 1);
  nextButton.style.display='none';
  checkAnswerButton.style.display='block';
  emptyFields();
}

function checkAnswer(){
    console.log('answer is beeing checked...');
    console.log(currentPerson.name);
    var guess = guessBox.value;
    if(guess.toLowerCase() == currentPerson.name.toLowerCase()){
      document.getElementById('facit').innerHTML = "CORRECT";
      scored();
    } else {
      document.getElementById('facit').innerHTML = "Try again, this is " + currentPerson.name+'!';
      lost();
    }
    checkAnswerButton.style.display='none';
    nextButton.style.display='block';
  }

  function emptyFields(){
    guessBox.value ='';
    document.getElementById('facit').innerHTML='';
  }

function displayStreak(){
  document.getElementById('score').innerHTML='Your current streak is '+currentStreak;
  if(currentStreak > highScoreVar){
    highScoreVar = currentStreak;
    document.getElementById('highScore').innerHTML='High score: '+highScoreVar;
  }
}

function haveIWon(){
  if(names.length == false){
    document.getElementById('facit').innerHTML='CONGRATULATIONS! You know the name of every single Doberman!';
  }
}

//TODO om
function scored(){
  console.log('scored');
  currentStreak= currentStreak+1;
  displayStreak();
  correctGuesses.push(currentPerson);
}

function lost(){
  console.log('scored');
  currentStreak=0;
  displayStreak();
  names.push(currentPerson);

  while(correctGuesses.length){
    names.push(correctGuesses.pop());
  }
}

function runScript(e){
  if(e.keyCode==13){
    checkAnswer();
  }
  if(e.keyCode==39){
    generatePerson();
    console.log('högerpil');
  }
  console.log('typed');

}
