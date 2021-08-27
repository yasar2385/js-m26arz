// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();

img.onload = function() {
  // set size proportional to image
  canvas.height = canvas.width * (img.height / img.width);

  // step 1 - resize to 50%
  var oc = document.createElement('canvas'),
    octx = oc.getContext('2d');

  oc.width = img.width * 0.25;
  oc.height = img.height * 0.25;
  octx.drawImage(img, 0, 0, oc.width, oc.height);

  // step 2
  octx.drawImage(oc, 0, 0, oc.width * 0.25, oc.height * 0.25);

  // step 3, resize to final size
  ctx.drawImage(
    oc,
    0,
    0,
    oc.width * 0.5,
    oc.height * 0.5,
    0,
    0,
    canvas.width,
    canvas.height
  );
};
img.src = '//i.imgur.com/SHo6Fub.jpg';
