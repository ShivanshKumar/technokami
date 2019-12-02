---
layout: post
title:  "Create a 3D hover effect using JavaScript animations & CSS in HTML"
date:   2019-12-02 11:21:00 +0530
description: "Learn how to create an awesome 3D hover effect using minimal JavaScript animations and CSS."
categories: ['Tutorial', 'Web-Development']
author: "Jay Mistry"
keywords: "JavaScript animation, 3d javascript animation, 3d hover effect, 3d hover effect technokami, "
comments: true
---

In today's post, we will learn how to create a cool 3D hover effect using minimal JavaScript animations and CSS for styling.

You can apply these styles to Button elements, Cards or other elements users can interact with.

### HTML
```html
<div id="tilt">
  <!--  Container for our block  -->
</div>
```
A simple container for the elements you would like to have the animation on. The id `tilt` will be used to reference it in JavaScript.

### CSS
```css
/* Styles for the tilt block */
#tilt {
  display: block;
  height: 200px;
  width: 300px;
  background-color: grey;
  margin: 0 auto;
  transition: box-shadow 0.1s, transform 0.1s;
  
  /*
    * Adding image to the background
    * No relation to the hover effect.
    */
  background-image: url(http://unsplash.it/300/200);
  background-size: 100%;
  background-repeat: no-repeat;
}

#tilt:hover {
  box-shadow: 0px 0px 30px rgba(0,0,0, 0.6);
  cursor: pointer;
}
```
Styles to specify the width and height of the block. We also add some shadow on hover.

### JavaScript
```js
/* Store the element in el */
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 20 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})
```
This JavaScript animation code helps us in creating the 3D hover effect.

The `perspective` property gives our element a 3D perspective. In our case, we can say that we are 'seeing' our block from a distance of `500px`.

The `scale` property creates the effect of 'lifting up' of our block, or pushing down on click.

The `rotateX` property rotates the block along the X-axis.

Similarly, the `rotateY` property rotates the block along the Y-axis.


#### Codepen
You can play with the following Codepen, to see the JavaScript animation in action. You can also visit it to play around with the values and understand the effects more.

**Note:** If you are facing problems with the effect in the embed, you can try to reload this page or visit [Codepen](https://codepen.io/technokami/pen/abojmZa).
<p class="codepen" data-height="449" data-theme-id="dark" data-default-tab="js,result" data-user="technokami" data-slug-hash="abojmZa" data-preview="true" style="height: 449px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="3D Hover  Effect">
  <span>See the Pen <a href="https://codepen.io/technokami/pen/abojmZa">
  3D Hover  Effect</a> by Tech no Kami (<a href="https://codepen.io/technokami">@technokami</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>