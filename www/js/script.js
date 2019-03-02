function calculateTip() {
  var billAmount = document.getElementById('regning').value;
  var service = document.getElementById('dropdown').value;
  var persons = document.getElementById('personer').value;


  var sumPerPerson = (billAmount / persons);

  if(service === 'bra') {
    var braSum = sumPerPerson * 20 / (100);
    if(persons == 1) {
    document.getElementById('output').innerHTML = "Du kan tipse " + Math.round(braSum) + " kr";
  } else {
    document.getElementById('output').innerHTML = "Dere kan tipse " + Math.round(braSum) + " kr hver";
  }
  } else if(service === 'middels') {
    var middelSum = sumPerPerson * 10 / (100);
    if(persons == 1) {
    document.getElementById('output').innerHTML = "Du kan tipse " + Math.round(middelSum) + " kr";
  } else {
    document.getElementById('output').innerHTML = "Dere kan tipse " + Math.round(middelSum) + " kr hver";
  }
  } else {
    var dårligSum = sumPerPerson * 5 / (100);
    if(persons == 1) {
    document.getElementById('output').innerHTML = "Du kan tipse " + Math.round(dårligSum) + " kr";
  } else {
    document.getElementById('output').innerHTML = "Dere kan tipse " + Math.round(dårligSum) + " kr hver";
  }
  }
}
