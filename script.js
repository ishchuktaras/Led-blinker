function magicAction() {
  var all_objects = document.getElementsByName('object'), //Všechny množství objektu
    object = getCheckedRadio(all_objects).value, //Vybraný objekt
    response = document.getElementById('response'), //Kde vystavíme výsledek
    object_text = '' //Text pro objekt

  //Kontrola, na který přepínač ze skupiny "objekt" bylo kliknuto
  switch (object) {
    case 'off':
      object_text = 'OFF';
      break;
    case 'on':
      object_text = 'ON';
      break;
    case 'blinking':
      object_text = 'BLINKING';
      break;
  }
  //Zobrazení výsledku
  response.innerHTML = object_text;
}

//Funkce, která vybere zaškrtnutý přepínač ze seznamu
function getCheckedRadio(radio_group) {
  //Procházení celého seznamu přepínačů
  for (var i = 0; i < radio_group.length; i++) {
    var button = radio_group[i];
    //Nalezeno označené
    if (button.checked) {
      return button;
    }
  }
  //Žádné označené
  return undefined;
}