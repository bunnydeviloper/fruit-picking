const apple = 'apple.html';
const orange = 'orange.html';
const cherry = 'cherry.html';

const pickFruit = (type) => {
  if (type === "") return; 
  const ajax = new XMLHttpRequest();
 // when the page is loaded, have a cb func to prefill our div
  ajax.onreadystatechange = function() {
    if (ajax.readyState === 4 && ajax.status === 200) {
      $('#infoDiv').html(ajax.responseText);
    }
  };
  let typeLink = '';
  if (type === 'apple') typeLink = apple;
  if (type === 'orange') typeLink = orange;
  if (type === 'cherry') typeLink = cherry;
  ajax.open('GET', typeLink, true);
  ajax.send();
};
