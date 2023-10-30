---
title: Playing with Design Tokens
description: New features, including recent posts and design tokens
tags:
    - post
    - blog
    - design tokens
    - development
date: 2023-10-13
layout: post.njk
permalink: '/posts/{{ date | shortDate | slugify }}/{{ title | slugify }}'
---

* Newest features:
  * Added 'Recent Posts' on homepage
  * Split out 11ty funcs
  * Added design tokens!
* Why design tokens?
  * Because they're cool! - Great at keeping styles all in one place (in theory)
  * Saw a talk that involved them and became enamoured
  * Like using variables in SASS but in a config file
* How design tokens?
  * Started very much with this tutorial: https://heydonworks.com/article/design-tokens-in-eleventy/
  * Used this to build out structural CSS and start normalising theme colours
  * Useful - allows me to define things in a single file and change them if I want to
  * Struggling with consistency - colours are CSS vars, layout is injected directly
  * For now, just while I figure out the positives and negatives of how they work, see how effective they might be on larger projects
  * Similar to Tailwind's config files, I guess? Something I want to explore in the future
