---
layout: blog
title: Emailing the cheapest fuel in your area
thumbnail: ../../../static/images/uploads/fuel-check.png
---
Fuel Check notifier was an idea for a project to try out some of the AI coding tools that were available at the time. It's a straightforward Vue single page app with Supabase used for storage and authentication. This was also my first time using Amazon Simple Email Service.

It has a simple frontend, sign up and add your postcode. Then at a certain time daily a cron job finds the cheapest fuel and sends out an email notification to let you know how much and where.

There are plenty of apps that do the same thing here but I'm the sort of person who checks their emails in the morning and this was handy for me.

[NSW Fuel Check Notifier ↗](https://fuelchecknotifier.app)