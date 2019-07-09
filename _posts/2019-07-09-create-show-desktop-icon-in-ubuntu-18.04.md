---
layout: post
title:  "Create 'Show Desktop' launcher icon in Ubuntu 18.04+"
date:   2019-07-09 15:21:00 +0530
description: "Learn how you can create a 'Show Desktop' launcher in Ubuntu 18.04+ distros"
categories: ['Tutorial']
author: "Jay Mistry"
keywords: "ubuntu 18.04 desktop launcher, show desktop ubuntu 18.04, ubuntu show desktop, technokami"
comments: true
---

Ubuntu 18.04 and it's later short term support distros boast a plethora of different useful features.

But it disappointed many users by not providing a Show Desktop launcher out of the box, as it had done with it's predecessors.

But worry not, today I will show you how you can create your own Show Desktop launcher in Ubuntu 18.04 and later distros!

# Install MenuLibre
To create new launchers, you will need to install MenuLibre, an advanced menu editor with a clean interface. You can download it from [launchpad](https://launchpad.net/menulibre){:target="_blank"}.

You can also download MenuLibre from Ubuntu Software.

# Add a directory
This is an optional step. Open up MenuLibre & create a directory where you will place your custom launchers. 

<img class='post-image' src="/assets/images/show-desktop/1.gif" alt="Create a directory where we will place our Show Desktop launcher" />

  * Launch MenuLibre
  * Click on the **+** icon in top left, and select 'Add directory'
  * Give a name to this directory
  * Select an icon for this directory
  * Click on the save icon ( next to **+** icon in top left) or `Ctrl+S` to save

# Add the launcher
Now that the directory is created, we will create a launcher.

<img class='post-image' src="/assets/images/show-desktop/2.gif" alt="Create the Show Desktop Launcher for Ubuntu 18.04" />

  * Select the 'Custom Launchers' directory you just created
  * Click on the **+** icon in top left, and select 'Add Launcher'
  * Give the name 'Show Desktop' to this launcher
  * In the command field, insert `wmctrl -k on` command
  * Save the launcher

# Pin the launcher to the Dock
Our launcher is created, and now we will pin it to our dock.

<img class='post-image' src="/assets/images/show-desktop/3.gif" alt="Pin launchers to dock in Ubuntu 18.04" />

  * Search for 'Show Desktop' launcher
  * Right click on the launcher
  * Select 'Add to favourites'

And now, it's done! You have created the 'Show Desktop' launcher.

That's it for today, people. See you in the next post.

Adios folks!