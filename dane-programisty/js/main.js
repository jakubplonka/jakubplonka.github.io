$(document).ready(function () {
  $('#download').click(function () {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(response => response.json())
    .then(json => {
      $(this).after('<div id="dane-programisty">' + json.imie
      + ' ' + json.nazwisko + ' ' + json.zawod + ' ' + json.firma + '</div>');
      
    })
  })
});