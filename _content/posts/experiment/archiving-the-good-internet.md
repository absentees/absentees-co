---
layout: blog
title: Archiving the good internet
thumbnail: ../../../static/images/uploads/screenshot2020-02-18-hello-world-good-internet.png
---
I'm constantly looking at multiple sites for references, I was collecting them using an old Mac App called Ember. It's great at what it did but was no longer under development.

Good Internet Online started as a place to upload the 1500 screenshots i had taken of websites over the years, but i decided to keep it a bit more niche.

A cron job scrapes Designer News Site Design category everyday, if a new one is found it takes screenshots using the headless browser PhantomJS, grabs a bit of metadata and uploads to DatoCMS. This triggers Netlify to build and deploy the site.

More recently i've become a fan of [are.na](https://www.are.na/)

The bits:

* [Netlify CI](https://www.netlify.com/)
* [Heroku](https://www.heroku.com/) Daily Schedular with a Node script
* [Metalsmith](https://metalsmith.io/)
* [Pageres](https://github.com/sindresorhus/pageres) (uses PhantomJS)
* [DatoCMS](https://www.datocms.com/)