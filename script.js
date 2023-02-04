import Math from './math.js';

def getBackgroundColor(){
  colors = { "red": "#FF0000", "green": "#00FF00", "blue": "#0000FF", "yellow": "#FFFF00", "orange": "#FF6600", "purple": "#800080", "pink": "#FF00FF", "brown": "#A52A2A", "grey": "#808080" };

  return colors[Math.floor(Math.random() * colors.length)];
  // const random = Math.floor(Math.random() * colors.length);
  // return colors[random];
}