---
layout: blog
title: Scraping the internet for relevant domains
thumbnail: ../../../static/images/uploads/screen-shot-2018-01-07-at-8-56-06-pm.png
---
[Relevant Domains ↗](http://relevant.domains "Relevant Domains") scrapes the last year or so of Urban Dictionary words and definitions, turns them into dot coms, checks those against the Domainr API for availability and churns out a static website to flick through them all.

[Relevant Bot ↗](https://twitter.com/relevant_bot "Relevant Bot") (thanks to Chloe for the idea) sits alongside Relevant Domains. Every day it selects a random available Relevant Domain, find someone on Twitter who has used that relevant jargon recently, and @'s them the URL of the associated Relevant Domain. Goal is to give the site more exposure and hopefully they click through to purchase on Namecheap.

The bits:

* X-Ray
* Domainr API
* Metalsmith
* Airtable
* Netlify
* Ziet Now