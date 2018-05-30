var jour = 03;
var mois = 07;
var an = 1997;

var date = new Date();
var jourDate = date.getDate();
var moisDate = date.getMonth() + 1;
var anDate = 1900 + date.getYear();

var moisJour = mois.toString() + jour.toString();
var moisJourDate = moisDate.toString() + jourDate.toString();

if (moisJour < moisJourDate) {
  var age = anDate - an + ' ans';
}
else {
  var age = anDate - an - 1 + ' ans';
}

document.getElementById('age').innerHTML = age;
