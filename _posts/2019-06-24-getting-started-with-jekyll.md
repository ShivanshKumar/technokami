---
layout: post
title:  "Getting started with Jekyll - installation, project setup & deployment"
date:   2019-06-18 19:12:00 +0530
description: "Setup your PC to develop your blog in Jekyll & setup GitHub Pages to host it for free!"
categories: ['Build your blog with Jekyll']
author: "Jay Mistry"
keywords: "tecnokami, tech no kami, jekyll blog, create free blog, blog free hosting, create jekyll blog, jekyll"
comments: true
---

Hello everyone! This is the very beginning of the [Build your blog with Jekyll](http://localhost:4000/categories/#Build%20your%20blog%20with%20Jekyll) tutorial series.  
Let's answer some questions that you may have, before we start developing our blog!

#### Why use Jekyll when...
 * **We can directly create a site in HTML** - creating a site with just HTML is all well and good when you only have a few pages to create. But when you move on to more complex sites ( like blogs, multi-page sites ), the task of creating similar parts of the site in each and every page becomes tedious. In Jekyll, you can separate your website layout in different files, and include them wherever needed.
 * **We can create a blog easily using Wordpress** - Sure, Wordpress has a large pool of plugins, but Jekyll beats Wordpress in speed and cost effectiveness. Only static pages are generated, so there is no overload of requests back and forth to the server, increasing our serving speed. You can host Jekyll sites for free on GitHub Pages while a proper hosting for Wordpress would cost you hundreds of rupees every month. The complete comparison between Jekyll and Wordpress deserves a separate post.

 This site is also created using Jekyll, you can check out the [Lighthouse](https://developers.google.com/web/tools/lighthouse/){:target="_blank"} score of this site-

<img class='post-image' src="/assets/images/jekyll/1/lighthouse-score.png" alt="Tech no Kami lighthouse score" />

If you have any other questions in mind, you can ask me and I'll update the post accordingly. Now, with the common questions out of our way, we can start building our blog.

# Install Jekyll and Bundler
We need Jekyll and [Bundler](https://jekyllrb.com/docs/ruby-101/#bundler){:target="_blank"} gems to build our Jekyll site. Though Bundler is not a requirement, it is recommended as it will make sure that the version of Jekyll used for building your site is always the same. Jekyll gem is required to build our Jekyll site.

First make sure that you have Ruby installed on your system by executing the following command-
```sh
  $ ruby -v
  # ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-linux-gnu]
```
If you get an output similar to the one commented above, Ruby is installed. Else, you can visit official [Download Ruby](https://www.ruby-lang.org/en/downloads/){:target="_blank"} site and install it according to your operating system.

Now, install Jekyll and Bundler gems using the following commands-
```sh
  $ gem install bundler jekyll
```
You can check if it is installed by executing the following commands-
```sh
  $ jekyll --version # jekyll 3.8.5
  $ bundler --version # Bundler version 2.0.1
```
Now, we are good to go! If you are still facing problems in installation, you can visit [Official Docs](https://jekyllrb.com/docs/installation/){:target="_blank"} and view detailed installation steps as per your operating system.

# Setting up our project
Jekyll requires a `_config.yml` file and a `_layouts` folder to build a site. The configuration file `_config.yml` can be empty. We will keep our site layouts in the `_layouts` folder. We will also create a `base.html` layout which will serve as a parent layout for all the pages.

```sh
  $ mkdir _layouts
  $ touch _layouts/base.html
  $ touch _config.yml
```

For creating Jekyll pages, we can use HTML and Markdown. For text-rich content, Markdown is the way to go, but for pages with complex elements, HTML files can be a choice too. We will use HTML file for our home page and Markdown for our 'About' page. Let's create them.

```sh
  $ touch index.html about.md
```

Let's start creating our basic layout of the site. We will have a navigation bar at the top, content in the middle and a footer. To speed up development for the sake of this tutorial, I will use [Bootstrap 4](https://getbootstrap.com/){:target="_blank"} but I will also show you how you can style your pages using SCSS.

##### _layouts/base.html
```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <title>Jekyll Blog</title>
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Jekyll Blog</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about/">About</a>
          </li>
        </ul>
     </div>
    </nav>

    <!-- Our main content -->
    <div class="container">{% raw %}{{ content }}{% endraw %}</div>
  </body>
</html>
```
The classes used for the navbar are Bootstrap classes, and can be referred to on Bootstrap's documentation. In the navbar, we have two links, one to the home page and one to the about page. In the `div` tag of our main content, we see [liquid syntax](https://jekyllrb.com/docs/liquid/){:target="_blank"} that prints the content of the page which would use this file as it's layout in the `div`.

Let's create two pages for our website - a home page and an about page.

##### index.html
```html
{% raw %}
---
title: "Home"
permalink: "/"
layout: base
---
{% endraw %}

<h1>Home page</h1>
<p>This is the home page of our website.</p>

<p>Dummy content...</p>

<p>Dummy content...</p>
```
The statements enclosed between the '\-\-\-' is called the front matter of the page. It holds important information regarding the page like title, permalink, layout, tags, categories, etc.  
Permalink is the route at which the page should be displayed. For 'index.html', the permalink is '/', so it will be displayed at 'http://mydomain.com/' i.e. the home route.   
We want to use 'base.html' file as our layout, so we use the name of file - 'base' in the layout field.

##### about.md
```md
{% raw %}
---
title: "About"
layout: base
permalink: "/about/"
---
{% endraw %}

# About Page

This is the about page.  

Dummy content...

Dummy content...  
```
This file is in the Markdown format. As you can clearly see, for text-rich pages, Markdown offers a very clean syntax. You can learn more about Markdown [here](https://www.markdownguide.org/). I would recommend you to invest your time in learning Markdown syntax.

# That's it!

Believe it or not, our Jekyll site is ready to be served! We can serve our site locally using the following command-
```sh
  $ bundle exec jekyll serve
```
The site will be hosted on `http://localhost:4000` on your system. Let's take a look at what we built!

<img class='post-image' src="/assets/images/jekyll/1/site-demo.gif" alt="How to create a Jekyll blog demo" />

We will take a look at the real power of Jekyll in the next tutorial - **posts**. Till then, you can learn more about Jekyll from their [official docs](https://jekyllrb.com/){:target="_blank"}.

That's it for this tutorial, we will meet in the next one!

Adios folks!