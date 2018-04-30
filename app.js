// li collection for laws
const laws = document.getElementsByTagName('li');
// get input
const indexText = document.getElementById('whichBold');
// get button
const button = document.getElementById('bolden');

// button listener
button.addEventListener('click', (e) => {
  // get input as int
  const index = parseInt(indexText.value, 10);

  // loop through law in laws collection and change fontWeight
  for (let i = 0; i < laws.length; i++){
    let law = laws[i];
    if (index === i){
      law.style.fontWeight = 'bold';
    } else {
      law.style.fontWeight = '';
    }
  }
  // reset input field
  indexText.value = '';
});
