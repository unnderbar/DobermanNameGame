var hej = { name: 'Unn' };

console.log(hej.name);

var names = [
  { name: 'Adrian', lastname: 'Tomic', image: 'bilder/adrian.jpg' },
  { name: 'Albert', lastname:'Cordenius', image: 'bilder/abbe.jpg'},
  { name: 'Alexandra', lastname:'Rashem', image:'bilder/Alexandra.jpg' },
  { name: 'Anders', lastname:'Frostenson', image:'bilder/anders.jpg' },
  { name: 'Angela', lastname:'Tillman Sperandio', image:'bilder/angela.jpg' },
  { name: 'Anna', lastname:'Esseen', image:'bilder/anna_2.jpg' },
  { name: 'Anna', lastname:'Strömberg', image:'bilder/anna_stromberg.jpg' },
  { name: 'Annika', lastname:'Tersmeden', image:'bilder/Annika.jpg' },
  { name: 'Bjarne', lastname:'Melin', image:'bilder/bjarne.jpg' },
  { name: 'Daniel', lastname:'Hägglund', image:'bilder/Daniel.jpg' },
  { name: 'David', lastname:'Engzell', image:'bilder/David_E.jpg' },
  { name: 'Edvard', lastname: 'Scott', image:'bilder/Edvard.jpg'},
  { name: 'Elin', lastname:'Ankerblad' , image:'bilder/elin.jpg'},
  { name: 'Elin', lastname:'Aram', image:'bilder/Elin_Aram.jpg'},
  { name: 'Elinore', lastname:'Brandén', image:'bilder/Elinore.jpg' },
  { name: 'Emma', lastname:'Laurentz', image:'bilder/Emma.png'},
  { name: 'Erik' , lastname:'Almenberg', image:'bilder/erik_almenberg.jpg'},
  { name: 'Erik' , lastname:'Lindebratt', image:'bilder/erik_l.jpg'},
  { name: 'Gunilla' , lastname:'Boström', image:'bilder/gunilla.JPG'},
  { name: 'Guri' , lastname:'Venstad', image:'bilder/guri.png'},
  { name: 'Gustav' , lastname:'Rådström', image:'bilder/gustav_radstrom.jpg'},
  { name: 'Hanna' , lastname:'Öquist', image:'bilder/hanna_oquist.jpg'},
  { name: 'Hannes' , lastname:'Strassburg', image:'bilder/Hannes.png'},
  { name: 'Henrik' , lastname:'Bornhede', image:'bilder/henrik.jpg'},
  { name: 'Henrik' , lastname:'Karlsson', image:'bilder/henrik_k.jpg'},
  { name: 'Henrik' , lastname:'Sundqvist', image:'bilder/henrik_sundqvist.jpg'},
  { name: 'Herman' , lastname:'Carlsson', image:'bilder/herman.jpg'},
  { name: 'Hilary' , lastname:'Persson', image:'bilder/hilary.png'},
  { name: 'Ida' , lastname:'Lind', image:'bilder/ida.jpg'},
  { name: 'Jacob' , lastname:'Gunnarsson', image:'bilder/jacob_gunarsson.jpg'},
  { name: 'Jennifer', lastname:'Fernandez', image:'bilder/Jennifer.png'},
  { name: 'Jenny' , lastname:'Pettersson Lindberg', image:'bilder/jenny_p.jpg'},
  { name: 'Jens' , lastname:'Lindkvist', image:'bilder/jens_lindkvist.jpg'},
  { name: 'Joakim' , lastname:'Oscarsson', image:'bilder/Joakim.jpg'},
  { name: 'Johan' , lastname:'Bernunger', image:'bilder/johan_b.jpg'},
  { name: 'Johan' , lastname:'Dovelius', image:'bilder/johan_d.jpg'},
  { name: 'Johan' , lastname:'Strömgren', image:'bilder/johan_s.jpg'},
  { name: 'Jonatan' , lastname:'Pettersson', image:'bilder/jonatan.JPG'},
  { name: 'Karl' , lastname:'Sandgren', image:'bilder/karl.jpg'},
  { name: 'Katie' , lastname:'Miller', image:'bilder/katie_miller.jpg'},
  { name: 'Kim' , lastname:'Kelly', image:'bilder/kim_kelly.jpg'},
  { name: 'Klara' , lastname:'Leander', image:'bilder/klara_leander.jpg'},
  { name: 'Klas' , lastname:'Thorsén', image:'bilder/klas.jpg'},
  { name: 'Kristina' , lastname:'Carlander', image:'bilder/Kristina_Carlander.jpg'},
  { name: 'Lars' , lastname:'Ericsson', image:'bilder/Lars_ericsson.jpg'},
  { name: 'Linnea' , lastname:'Becker', image:'bilder/linnea_becker.jpg'},
  { name: 'Lisa ' , lastname:'Lindström', image:'bilder/lisa_lindstrom.jpg'},
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
  { name: 'Petra' , lastname:'Farinha', image:'bilder/petra.png'},
  { name: 'Petter' , lastname:'Eriksson', image:'bilder/petter_eriksson.jpg'},
  { name: 'Phi-Hong' , lastname:'Ha', image:'bilder/Phi.jpg'},
  { name: 'Razi' , lastname:'Kantorp-Weglin', image:'bilder/razi.jpg'},
  { name: 'Rebekka' , lastname:'Quiroz Wiberg', image:'bilder/rebekka.jpg'},
  { name: 'Richard' , lastname:'Sellgren', image:'bilder/Richard_Sellgren.jpg'},
  { name: 'Robert' , lastname:'Lindgren', image:'bilder/robert.jpg'},
  { name: 'Robin' , lastname:'Karlsson', image:'bilder/robin.jpg'},
  { name: 'Sandra' , lastname:'Hindskog', image:'bilder/Sandra_Hindskog.jpg'},
  { name: 'Sanna' , lastname:'Wickman', image:'bilder/sanna.jpg'},
  { name: 'Sara' , lastname:'Johannesson', image:'bilder/Sara_Johannesson.jpg'},
  { name: 'Simon' , lastname:'Bohm', image:'bilder/Simon.JPG'},
  { name: 'Sofie' , lastname:'Nilsson', image:'bilder/Sofie_Nilsson.jpg'},
  { name: 'Steinar' , lastname:'Danielsen', image:'bilder/Steinar.jpg'},
  { name: 'Stina' , lastname:'Carlsson Reich', image:'bilder/stina_carlssonreich.jpg'},
  { name: 'Therese' , lastname:'Björkqvist', image:'bilder/Therese.jpg'},
  { name: 'Therese' , lastname:'Mannheimer', image:'bilder/Therese2.png'},
  { name: 'Thomas' , lastname:'Färnström', image:'bilder/Thomas_Farnstrom.jpg'},
  { name: 'Tove' , lastname:'Blomgren', image:'bilder/tove_blomgren.jpg'},
  { name: 'Ulrika' , lastname:'Roth', image:'bilder/ulrika_roth.jpg'},
  { name: 'Unn' , lastname:'Swanström', image:'bilder/unn_swanstrom.jpg'},
  { name: 'Victor' , lastname:'Ginsburg Müller', image:'bilder/victor.jpg'},
  { name: 'Yvette', lastname:'Englund', image:'bilder/yvette_englund.jpg' }
];

console.log(names[0].image);

var i = Math.floor(Math.random() * names.length);

//Byter bilden man ska gissa
document.getElementById('guessWho').src =names[i].image;

function checkAnswer(){
  var guess = document.getElementById('guessbox').value;
  if(guess == names[i].name){
    document.getElementById('facit').innerHTML = "CORRECT";
  }  else {
    document.getElementById('facit').innerHTML = "FALSE, this is " + names[i].name;
  }
}
