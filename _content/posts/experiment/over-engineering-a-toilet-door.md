---
layout: blog
title: Over-engineering a toilet door
thumbnail: ../../static/images/uploads/2016-11-14-06-31-48-1.jpg
---
At a previous workplace we had one downstairs toilet. I noticed that staff would often walk to the toilet only to be disappointed that it was occupied.

To fix this i grabbed our dusty Rasbperry Pi, a lot of blutack and a reed switch to update a number stored in Firebase indicating the occupancy of the toilet. Staff could then visit a website or use the /peesee command within slack to check whether they were good to go.

The bits:

* [Firebase](https://firebase.google.com/)
* Raspberry Pi
* [Resin.io (now Balena.io)](https://www.balena.io/)
* [Express](https://github.com/expressjs/express)