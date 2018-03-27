/* jshint esversion:6 */
const app = (function(){
  "use strict";

let choice01 = "";
let choice02 = "";


//Plutôt que de faire des tests de conditions on va regarder si la valeur du player01 possède les valeur du player 02
//hasOwnProperty

let list = {
    "pierre" : {
              "ciseaux" : "émousse",
              "lezard"  : "écrase"
    },
    "feuille" : {
              "pierre" : "recouvre",
              "spock"  : "discrédite"
    },
    "ciseaux" : {
              "lezard" : "décapite",
              "feuille"  : "coupe"
    },
    "lezard" : {
              "spock" : "poison",
              "feuille"  : "mange"
    },
    "spock" : {
              "ciseaux" : "casse",
              "pierre"  : "vaporise"
    }

};

//Fonction de sélection par l'id
const _ = function(id){
  return document.getElementById(id);
};

//Initialisaiton de l'app quand tout est chargé
const init = function(){
  //Listener sur btn joueur 01
   _("pierre-p1").onclick  = getValueP1;
   _("feuille-p1").onclick = getValueP1;
   _("ciseaux-p1").onclick = getValueP1;
   _("lezard-p1").onclick  = getValueP1;
   _("spock-p1").onclick   = getValueP1;

  //Listener sur btn joueur 02
   _("pierre-p2").onclick  = getValueP2;
   _("feuille-p2").onclick = getValueP2;
   _("ciseaux-p2").onclick = getValueP2;
   _("lezard-p2").onclick  = getValueP2;
   _("spock-p2").onclick   = getValueP2;

   _("get-result").onclick  = () => {
     if((choice01 !== "") && (choice02 !== "")){
       compare(choice01, choice02);
     }
   };
};

//Récupérer la valeur du btn joueur 01 et la stocker dans une variable
const getValueP1 = () => {
  let target = event.target || event.srcElement;
  if(choice01 === ""){
    choice01 = target.value;
    display(choice01, "output-player01",1);
  }else {
    console.log("Player01 a déjà choisi");
  }
};

//Récupérer la valeur du btn joueur 02 et la stocker dans une variable
const getValueP2 = () => {
  let target = event.target || event.srcElement;
  if(choice02 === ""){
    choice02 = target.value;
    display(choice02, "output-player02",1);
  }else {
    console.log("Player02 a déjà choisi");
  }
};


//Afficher le resultat dans une div
const display = (choice, output, num) => {
    _(output).innerHTML = `le choix du joueur ${num} est ${choice}`;
};

//fonction de comparaison des résultats
const compare = function(choice01, choice02){
  console.log(list);
  if(list[choice01].hasOwnProperty(choice02)){
    _("result").innerHTML = "Joueur 01 gagne !!! <br> " + choice01 + " " + list[choice01][choice02] + " " + choice02 ;
    console.log("Player01 Win !!!!");
  } else {
    _("result").innerHTML = "Joueur 02 gagne";
    console.log("Player02 Win !!!!");
  }
};


window.addEventListener("DOMContentLoaded",init); //On attend que le DOM se charge avant de lancer init

}());
