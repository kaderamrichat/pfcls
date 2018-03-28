/* jshint esversion:6 */
const app = (function(){
  "use strict";

let choice01 = "";//choix player 01
let choice02 = "";//choix player 02
let scoreJ1 = 0;
let scoreJ2 = 0;


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

//Fonction de selection par selecteur
const _All = function(elems){
  return document.querySelectorAll(elems);
};

const init = function(){
  //Listener sur btn joueur 01
   _All(".card-p1").forEach((elem)=> {
     elem.onclick = getValueP1;
   });

  //Listener sur btn joueur 02
   _All(".card-p2").forEach((elem)=> {
     elem.onclick = getValueP2;
   });

   _("get-result").onclick  = () => {
     if((choice01 !== "") && (choice02 !== "")){
       compare(choice01, choice02);
      //On réinitialise pour recommencer
       choice01 = "";
       choice02 = "";
     }
   };

   _("reset").onclick = resetFn;
};

//Récupérer la valeur du btn joueur 01 et la stocker dans une variable
const getValueP1 = () => {
  let target = event.target || event.srcElement;
  if(choice01 === ""){
    choice01 = target.value;
    display(choice01, "output-player01",1);
  }else {
    _("result").innerHTML = "Le joueur 01 a déjà joué";
  }
};

//Récupérer la valeur du btn joueur 02 et la stocker dans une variable
const getValueP2 = () => {
  let target = event.target || event.srcElement;
  if(choice02 === ""){
    choice02 = target.value;
    display(choice02, "output-player02",2);
  }else {
    _("result").innerHTML = "Le joueur 02 a déjà joué";
  }
};


//Afficher le resultat dans une div
const display = (choice, output, num) => {
    _(output).innerHTML = `<span class="msg-choice">${choice}</span>`;
};

//fonction de comparaison des résultats
const compare = function(choice01, choice02){
  if(choice01 === choice02){
    _("result").innerHTML = "Egalité";
  }
  else if(list[choice01].hasOwnProperty(choice02)){
    _("result").innerHTML = ` >> Le joueur 01 gagne !!! << <span class="explication">  (${choice01} bat  ${choice02})</span>` ;
    scoreJ1++;
    _("scoreJ1").innerHTML = scoreJ1;
  } else {
    _("result").innerHTML =   `>> Le joueur 02 gagne << <span class="explication">${choice02} bat ${choice01}</span>  `;
    scoreJ2++;
    _("scoreJ2").innerHTML = scoreJ2;
  }
};


//Fonction de resetFn (les scores & les affichages)
const resetFn = () => {
  scoreJ1 = 0;
  _("scoreJ1").innerHTML  = scoreJ1;
  scoreJ2 = 0;
  _("scoreJ2").innerHTML  = scoreJ1;
  _("result").innerHTML   = "";
};

window.addEventListener("DOMContentLoaded",init); //On attend que le DOM se charge avant de lancer init

}());
