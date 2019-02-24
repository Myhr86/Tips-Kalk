function calculateTip() {
  var billAmount = document.getElementById('regning').value;
  var service = document.getElementById('dropdown').value;
  var persons = document.getElementById('personer').value;


  var sumPerPerson = (billAmount / persons);

  if(service === 'bra') {
    var braSum = sumPerPerson * 20 / (100);
    document.getElementById('output').innerHTML = "Du kan tipse " + braSum + " kr";
  } else if(service === 'middels') {
    var middelSum = sumPerPerson * 10 / (100);
    document.getElementById('output').innerHTML = "Du kan tipse" + middelSum + " kr";
  } else {
    var dårligSum = sumPerPerson * 5 / (100);
    document.getElementById('output').innerHTML = "Du kan tipse " + dårligSum + " kr";
  }
}
