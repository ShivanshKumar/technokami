---
layout: post
title:  "Displaying posts in your Jekyll site"
date:   2019-06-26 10:04:00 +0530
description: "Learn how to create and display posts in your Jekyll site in this post"
categories: ['Build your blog with Jekyll']
author: "Jay Mistry"
keywords: "tecnokami, tech no kami, jekyll blog, create posts in jekyll blog, blog free hosting, create jekyll blog, jekyll posts"
comments: true
---
In the [previous tutorial](/getting-started-with-jekyll){:target="_blank"}, we learnt how to setup our Jekyll site and host it for free on GitHub Pages. In this post, we will see how we can create posts for our site, and how to display them.

# Where should we store our posts?
First we will create a `_posts` directory in the root directory of our blog project. 
```sh
  $ mkdir _posts
```
All the posts you create in this folder will be available to you for use in the `site.posts` variable in [liquid syntax](https://jekyllrb.com/docs/liquid/){:target="_blank"}.

# Let's create some posts!
We will create three simple posts for three characters - Naruto, Goku & Luffy in Markdown. As we will mainly focus on text-based posts in this tutorial, we are using Markdown.
```sh
  $ touch _posts/2019-06-26-naruto.md 
  $ touch _posts/2019-06-26-goku.md
  $ touch _posts/2019-06-26-luffy.md
```

**Note :** The name of posts should be in the format `yyyy-mm-dd-post-name.<file-ext>`, where `yyyy` is the year of post's creation, `mm` is the month & `dd` is the date. After that, you can name your post accordingly. This name will be used to create the URL of your post. So, the URL of our post for Naruto will be `mydomain.com/2019/06/26/naruto.md'.

Let's create some content in the posts-

##### 2019-06-26-naruto.md
```md
{% raw %}
---
title: "Uzumaki Naruto"
anime: "Naruto, Naruto Shippuden"
author: "Tech no Kami"
description: "A descriptive post about Naruto Uzumaki"
layout: base
---
{% endraw %}

# Uzumaki Naruto

### Anime: Naruto, Naruto Shippuden

Naruto Uzumaki is a shinobi of Konohagakure's Uzumaki clan...
```

##### 2019-06-26-goku.md
```md
{% raw %}
---
title: "Son Goku"
anime: "Dragon Ball metaseries"
author: "Tech no Kami"
description: "A descriptive post about Son Goku"
layout: base
---
{% endraw %}

# Son Goku

### Anime: Dragon Ball series

Goku, born Kakarot, is the main protagonist of the Dragon Ball metaseries...
```

##### 2019-06-26-luffy.md
```md
{% raw %}
---
title: "Monkey D. Luffy"
anime: "One Piece"
author: "Tech no Kami"
description: "A descriptive post about Monkey D. Luffy"
layout: base
---
{% endraw %}

# Monkey D. Luffy

### Anime: One Piece

Monkey D. Luffy, also known as "Straw Hat Luffy" and commonly as "Straw Hat"...
````

All the variables defined in the front matter are available in the page as `page.variable`.

Now, let's list our posts on the Home Page of OtakuBook. Edit the `index.html` file and add the following code after the titles.
##### index.html
```html
{% raw %}{% for post in site.posts %}{% endraw %}
	<a href="{{ post.url }}" class="mx-4">
		<div class="card">
			<div class="card-header">{% raw %}{{ post.title }}{% endraw %}</div>
			<div class="card-body">{% raw %}{{ post.description }}{% endraw %}</div>
		</div>
	</a>
{% raw %}{% endfor %}{% endraw %}
```
The code enclosed between `{% raw %}{%...%}{% endraw %}` is liquid syntax. In the first statement, we are looping through all the posts of the website available through `site.posts`. 
In the next statements, we display the post links accordingly. Statements enclosed in `{% raw %}{{...}}{% endraw %}` are replaced by their outputs while the site is compiled. 
The last statement ends the loop.

Let's see how the site looks now with the posts!

<img class='post-image' src="/assets/images/jekyll/2/site-demo.gif" alt="Create posts in a Jekyll Blog" />

# Bonus!
As we can see, we are able to display the posts here. But let's do something more!

Let's create a separate layout for the posts, to make them more distinct from normal pages!

Create a new file in the `_layouts` directory for the post layout.

```sh
  $ touch _layouts/post.html
```

Insert the following contents in your `post.html` file.

```html
{% raw %}
---
layout: base
---
{% endraw %}

<h1>{{ page.title }}</h1>

<h3><b>Anime</b>: {{ page.anime }}</h3>

{% raw %}{{ content }}{% endraw %}
```

Now we will edit the post files, I will show you the changes for `2019-06-26-naruto.md` file, which you can apply similarly to the other posts.

##### 2019-06-26-naruto.md
```html
{% raw %}
---
title: "Uzumaki Naruto"
anime: "Naruto, Naruto Shippuden"
author: "Tech no Kami"
description: "A descriptive post about Naruto Uzumaki"
layout: post
---
{% endraw %}

Naruto Uzumaki is a shinobi of Konohagakure's Uzumaki clan...
```

As you can see here, we have changed the `layout` variable in the front matter from 'base' to 'post', and also removed the two titles here, as they are now created in the `post.md` layout.

Now, if you want to change how your posts look, you can make changes to the `post.html` layout, and it will be reflected in every post, without affecting the home and about pages. Pretty cool, huh?

In the next tutorial, we will see how we can customize our site using SCSS. Till then, you can practise whatever you have learnt till now!

See you then! Adios folks!