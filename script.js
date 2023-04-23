//your JS code here. If required. const levelElement = document.getElementById('level');
let level = 0;

while (levelElement.parentNode) {
  level++;
  levelElement = levelElement.parentNode;
}

alert(`The level of the element is: ${level}`);

