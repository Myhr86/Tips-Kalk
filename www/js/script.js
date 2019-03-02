function calculateTip() {
  var billAmount = document.getElementById('regning').value;
  var service = document.getElementById('dropdown').value;
  var persons = document.getElementById('personer').value;


  var sumPerPerson = (billAmount / persons);

  if(service === 'bra') {
    var braSum = sumPerPerson * 20 / (100);
    if(persons == 1) {
    document.getElementById('output').innerHTML = "Du kan tipse " + braSum + " kr";
  } else {
    document.getElementById('output').innerHTML = "Dere kan tipse " + braSum + " kr hver";
  }
  } else if(service === 'middels') {
    var middelSum = sumPerPerson * 10 / (100);
    if(persons == 1) {
    document.getElementById('output').innerHTML = "Du kan tipse " + middelSum + " kr";
  } else {
    document.getElementById('output').innerHTML = "Dere kan tipse " + middelSum + " kr hver";
  }
  } else {
    var dårligSum = sumPerPerson * 5 / (100);
    if(persons == 1) {
    document.getElementById('output').innerHTML = "Du kan tipse " + dårligSum + " kr";
  } else {
    document.getElementById('output').innerHTML = "Dere kan tipse " + dårligSum + " kr hver";
  }
  }
}
