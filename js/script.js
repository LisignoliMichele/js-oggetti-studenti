// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var student = {
  name: "Michele",
  surname: "Lisignoli",
  age: 29
}
for (var info in student) {
  console.log(info + ": " + student[info])
}




var class27 = [
  {
    name: "Michele",
    surname: "Lisignoli",
  },
  {
    name: "Aessandro",
    surname: "Falcone",
  },
  {
    name: "Alessandro",
    surname: "Giordano",
  },
  {
    name: "Andrea",
    surname: "Benvenuti",
  },
  {
    name: "Andrea",
    surname: "Inzaghi",
  },
  {
    name: "Alessandro",
    surname: "Marega",
  },
  {
    name: "Alfredo",
    surname: "Ficocelli",
  },
  {
    name: "Caterina",
    surname: "Bertotti",
  },
  {
    name: "Daniele",
    surname: "Fortuna",
  },
  {
    name: "Daniele",
    surname: "Lai",
  },
  {
    name: "Daniele",
    surname: "Vengani",
  },
  {
    name: "Davide",
    surname: "Sadotti",
  },
  {
    name: "Filippo",
    surname: "Garota",
  },
  {
    name: "Francesca",
    surname: "Lai",
  },
  {
    name: "Francesca",
    surname: "Petraroia",
  },
  {
    name: "Gabriele",
    surname: "Corti",
  },
  {
    name: "Gianluca",
    surname: "Forgia",
  },
  {
    name: "Gianluigi",
    surname: "Spisto",
  },
  {
    name: "Giorgio",
    surname: "Rindonone",
  },
  {
    name: "Giuseppe Maria",
    surname: "Lana",
  },
  {
    name: "Jacopo",
    surname: "Vinanti",
  },
  {
    name: "Lorena",
    surname: "Spiller",
  },
  {
    name: "Luca",
    surname: "Memeo",
  },
  {
    name: "Matia",
    surname: "Casu",
  },
  {
    name: "Matteo",
    surname: "Greco",
  },
  {
    name: "Matteo",
    surname: "Sabbatini",
  },
  {
    name: "Mattia",
    surname: "Polli",
  },
  {
    name: "Nicolas",
    surname: "De Santis",
  },
  {
    name: "Nicolò",
    surname: "Matassoli",
  },
  {
    name: "Stefano",
    surname: "Borditti",
  },
  {
    name: "Tommaso",
    surname: "Borsatti",
  },
  {
    name: "Tommaso",
    surname: "Dossena",
  },
  {
    name: "Tommaso",
    surname: "Plinio",
  },
  {
    name: "Beatrice",
    surname: "Castagno",
  },
  {
    name: "Davide",
    surname: "Vignozzi",
  },
  {
    name: "Luca",
    surname: "Lorenzetti",
  },
]
for (var student in class27) {
  console.log(class27[student].name + " " + class27[student].surname)
}
