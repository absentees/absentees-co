---
layout: blog
title: Tabling colour tokens in Figma
thumbnail: ../../../static/images/uploads/figma-plugin.png
---

I had a fairly specific manual task that involved documenting some design tokens that i created into a table for a design system. It was tedious and even though there were some plugins that would get me half way there, i still had to do a lot of manual work. 

Token Table Generator takes a figma colour style in the format of `<Light/Dark>/<Colour Role>/<Colour State>/<Modifier>` and puts it into a table with labels. The token structure uses the Shopify Polaris, with a couple of modifications.

Code for the plugin here if you have a similar use case.

[Figma Token Table Generator ↗](https://github.com/absentees/figma-token-table-generator)