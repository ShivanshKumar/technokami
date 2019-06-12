---
layout: post
title:  "How to access local servers on remote devices - Chrome port forwarding"
date:   2019-06-13 00:26:00 +0530
description: "Access your local development server from your development system to your mobile devices"
categories: ['Dev-Hacks', 'Tutorial']
author: "Jay Mistry"
keywords: "tecnokami, tech no kami, google chrome, port forwarding, local server on mobile phone, frontend mobile development hack"
comments: true
---

Testing your projects directly on your mobile devices instead of the responsive design tool in your browser can give you the ability to test out the feel of your app/site in your hand along with the looks.

For mobile application development, most of the development environments provide support for this feature natively, but for web development, the support isn't available in the development server. You can access your projects in this scenario if you are connected to the same network.

But if you would like to view your project on your mobile device without connecting to the same network, the port forwarding feature of Chrome Developer Tools can come in handy!

**Note:** This also works for emulated mobile devices.

# Setting up your mobile device
First off, we need to turn on the 'Developer Mode' on our mobile device. To learn how to turn on developer mode on your device, visit the [official docs](https://developer.android.com/studio/debug/dev-options){:target="_blank"}.

I am using a Xiaomi Redmi Note 4 for this tutorial, and have already turned on the developer mode. To check if you have developer mode turned on or not, tap on your **build number**. If it is turned on, you would get a similar response as below.

<img class='post-image' src="/assets/images/port-forwarding/mobile/1-developer-mode.gif" alt="Turn on Developer Mode" />

# Local server
For this post, I will set up a simple server using an NPM module [serve](http://npmjs.com/serve){:target="_blank"} in `Music` directory which has two video music files.

<img class="post-image" src="/assets/images/port-forwarding/pc/lserver-term.png" alt="Create a local server" />

As you can see, we are able to access this server on `localhost:5000`, and if we visit on our PC browser, we get to see the following.

<img class="post-image" src="/assets/images/port-forwarding/pc/0-local-server.gif" alt="View local server on browser" />

Currently, if we connect our mobile device using USB and try to access this local server, we are unable to do so.

Now we will access this server on our mobile device.

# Google Chrome DevTools Remote Devices
What we are looking for is the Remote Devices tool of Chrome DevTools. First, open the Chrome DevTools by pressing **F12** key. Now, you can access the Remote Devices tool as follows.

<img class="post-image" src="/assets/images/port-forwarding/pc/00-remote-dev.gif" alt="Open Remote Devices tool in Chrome DevTools" />

After we open this tool, we need to check the checkboxes of *Port Forwarding* and *Discover USB devices* options. 

After you do so, the browser will start the search for connected remote devices. I have connected my mobile device to the PC via a USB cable. 

After it detects the connected device, it will show **Pending Authorization** status under the **Devices** tab. You will get a prompt on your mobile devices asking for permission to allow USB debugging on the connected PC.

If you do not receive a prompt, the reason may be that you have not turned on USB debugging in your developer options.

# Turn on USB debugging
To debug our code on our mobile device, we need to turn on **USB Debugging** in *Settings* &rarr; *Developer options* &rarr; *USB debugging*.

<img class="post-image" src="/assets/images/port-forwarding/mobile/2-usb-debug.gif" alt="Turn on USB debugging on your mobile device" />

Here, as soon as we turn on the USB debugging option, we receive a prompt asking for permission on the connected PC. We allow this action, and then see that the status changes to **Connected** in the Devices tab of Remote Devices tool and can also see the connected device name.

# Configure port forwards
Now, our device has connected successfully and we need to configure the port forward.

Under the **Port forwarding** checkbox, we can see the port mappings. Currently, there is no port map as we can see below.

<img class="post-image" src="/assets/images/port-forwarding/pc/port-map-1.png" alt="Port Forwarding on Google Chrome DevTools" />

There are two input fields for a map, one is the *device port*, which is the localhost port where the current port will be forwarded. In easy words, it is the port where the server will be available on the mobile device. You can select any number, but for this post, I am selecting 3000.

The next field is the address we want to forward, that is, the address of our local server ( in this case it is `localhost:5000` ).

We input the data accordingly as follows and click on **Add**.

<img class="post-image" src="/assets/images/port-forwarding/pc/port-map-2.png" alt="Port Forwarding on Google Chrome DevTools" />

Now we try to access the server on our mobile device on `localhost:3000`.

<img class="post-image" src="/assets/images/port-forwarding/mobile/4-port-w.gif" alt="Access local server on mobile devices" />

...and hurray! We can access the local server on our mobile device.

This feature can greatly enhance your responsive frontend development. Leave a comment down below sharing how this feature helped you!

That's it for this post, thank you for your time!

Adios folks!
