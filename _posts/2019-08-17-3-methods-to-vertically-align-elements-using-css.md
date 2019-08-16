---
layout: post
title:  "3 methods to vertically align elements using CSS"
date:   2019-08-17 02:12:00 +0530
description: "Aligning elements vertically should be as easy as setting the 'vertical-align' property in CSS, but it is not. Learn 3 different methods to easily vertically align elements in CSS!"
categories: ['Tutorial', 'Web-Development']
author: "Jay Mistry"
keywords: "css vertical align, vertical align, css vertical center, vertical-align, vertically align css, css align"
comments: true
---

Vertically aligning elements using CSS can be a pain.

One would expect the `vertical-align` property to work as it is expected - align the elements vertically to top, middle or bottom.

But it doesn't. It doesn't come to your rescue if you need to center a div block vertically.

I have a good news for you, though!

Today, I will be sharing 3 methods, which you can use to vertically align elements in CSS.

# Vertical align using top, bottom and transform properties
To vertically align elements using this method, you need to add `position: absolute;` or `position: relative;` properties to the parent element.

Then to vertically align the elements in the middle, you need to add the following rules-
```css
.selector {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

To vertically align the elements to the bottom, you need to add the following rules-
```css
.selector {
  position: absolute;
  bottom: 0;
}
```

# Vertical align the elements using CSS Flex
To vertically align elements using CSS Flex property, you need to add the following styles to the parent element-
```css
.selector {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Here, the elements will be vertically aligned in the middle.

To vertically align the elements at the start, add the following rule to the element-
```css
.selector {
  align-self: flex-start;
}
```

To vertically align the elements at the end, add the following rule to the element-
```css
.selector {
  align-self: flex-end;
}
```

# Vertically align elements using CSS Grid
This method is my personal favourite!

You need to add a `display: grid;` property to the parent element.

Then, to vertically align the blocks in the middle, you need to add the following rule-
```css
.selector {
  align-self: center;
}
```

To vertically align the blocks at the end, you need to add the following rule-
```css
.selector {
  align-self: end;
}
```

##### Code in action
You can test out all these three methods in the following Pen-
<p class="codepen" data-height="422" data-theme-id="0" data-default-tab="css,result" data-user="technokami" data-slug-hash="gVGjxr" data-preview="true" style="height: 422px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vertical align items using CSS">
  <span>See the Pen <a href="https://codepen.io/technokami/pen/gVGjxr/">
  Vertical align items using CSS</a> by Tech no Kami (<a href="https://codepen.io/technokami">@technokami</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Thank you :)

See you in the next post!