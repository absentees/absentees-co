---
layout: blog
title: Rewriting this website's codebase
thumbnail: ../../../static/images/uploads/screenshot-2021-08-12-211056.png
---
This site has taken on many forms and is mainly used as a test bed for the new framework I read that will be the next big thing. It's had Airtable, DatoCMS and plain text CMS', and Middleman was being used to build it for a while. What it is now is a setup i have reused for several site builds and it works for me. 

* [NetlifyCMS](https://www.netlifycms.org) as the ... CMS.
* [Gridsome](https://gridsome.org/) to generate a static build but allow for easy data binding and data sources.
* [Netlify](https://www.netlify.com/) to host, build, provide authentication and a SSL cert.
* Hooks into [Instapaper](https://www.instapaper.com) and [Are.na](https://www.are.na/) for other data sources.