$(document).ready(function () {
  $('#download').click(function () {
    console.log('test');
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      $(this).after('<div id="dane-programisty">' + json.imie
      + ' ' + json.nazwisko + ' ' + json.zawod + ' ' + json.firma + '</div>');
      
    })
  })
});