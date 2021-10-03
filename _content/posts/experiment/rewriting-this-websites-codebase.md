---
layout: blog
title: Rewriting this website's codebase
thumbnail: ../../../static/images/uploads/screenshot-2021-08-12-211056.png
---
This website, like many other designer's/developer's website, is a test bed for ideas and experimentation. It has been plaintext, HTML and CSS only, Wordpress, DatoCMS backend, Airtable backend, Middleman built in the past which have all had their pros and cons.

Now the setup is one which I have been using for some time on my own and client projects. It's simple, low cost, maintainable and fast.

Let's go back to front:

- Netlify CMS is the CMS. It is open source, git-based and has just enough features to build the majority of sites I need.
- Gridsome is the Vue version of Gatsby, an open source framework to build static websites/apps.
- Styling is always manual no frameworks or themes. JS is plain old javascript.
- All the hosting, CDN, DNS etc is on Netlify which I squeeze every last feature out of their free tier. The CMS is in the repo on Github.

Using this setup I can build and host this site, and most of my client websites for $0 ongoing costs (excluding the domain name).