function form_state() {
  all_objects = document.getElementsByName('object')
  let object = getCheckedRadio().value;
  let  log = document.getElementById('log');
  let object_text = '';

  switch (controller) {
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
  log.innerHTML = object_text;
}
function getCheckedRadio(radio_group) {
  for (var i = 0; i < radio_group.length; i++) {
    var submit = radio_group[i];
    if (submit.checked) {
      return submit;
    }
  }
  return undefined;
}