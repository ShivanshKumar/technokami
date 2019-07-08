---
layout: post
title:  "Jekyll Blog design using Sass"
date:   2019-07-07 00:21:00 +0530
description: "Learn how to add custom styles to your blog using Sass."
categories: ['Build your blog with Jekyll']
author: "Jay Mistry"
keywords: "blog design, sass jekyll, add sass to jekyll blog, jekyll scss, scss, sass, css"
comments: true
---

In the [previous tutorial](/display-posts-in-jekyll-site){:target="_blank"}, we learnt how to display posts in your Jekyll blog! In this post, we will see how we can add custom styles using Sass in your Jekyll Blog for a better blog design.

Sass is a stylesheet language that is compiled into CSS. It gives you the superpowers to use variables, nested rules, mixins, functions and much more with a fully compatible CSS syntax. To visit the official [Sass Documentation](https://sass-lang.com/documentation){:target="_blank"} to learn more about Sass. Sass can prove to be a very powerful tool for better blog design.

Now let's start on enabling styles for blog design using Sass.

# Edit the `_config.yml` file
First off, we will let Jekyll know that we intend to use Sass with our website, and so we will add the following to our site's `_config.yml` file-

```ruby
sass:
  sass_dir: _scss
  style: compressed
```

With `sass_dir`, we specify the directory where we will store our Sass files, which can be included easily later on.

With `style`, we instruct Jekyll to compress our compiled CSS files, so that it squeezes out every last space and new line break, to decrease the file size, thus decreasing the loading speed.

# Creating required directories & files
Now, we will create a `_scss` directory, to store our Sass files, and also create a `css` directory, where we will save our `style.css` which will include all the Sass files, and will be available at `css/style.css/` path.

```sh
  $ mkdir _scss css
  $ touch _scss/_base.scss css/style.scss
```
We also created the Sass files in both the folders. Let's add some content to them.

##### _scss/_base.scss
```scss
body {
  background: linear-gradient(to bottom, #fafafa, #f3bc2a);
  height: 100vh;
}

.card {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }
}

a {
  &:hover {
    text-decoration: none;
  }
}
```

##### css/style.scss
```scss
---
---

@import "base"
```

The '\-\-\-' lines for the front matter let Jekyll know that we intend to compile this Sass file into CSS, and place it in it's current folder as `<name>.css`.

Also, as we specified our Sass directory in _config.yml, the compiler will know where to import the files from.

Now, all we need to do is to link the `style.css` to our website.

We can do this by adding the following line in `_layouts/default.html`, preferably in the header.
```html
<link rel="stylesheet" href="css/style.css" />
```

And now we are done! You can create multiple files in the `css` directory, import Sass files as needed and link them accordingly.

That's it for today, hope you learnt something new!

Adios Folks!