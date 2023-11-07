---
title: Playing with Design Tokens
description: New features, including recent posts and design tokens
tags:
    - post
    - blog
    - design tokens
    - development
date: 2023-11-07
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

Welcome back to another post! This time we're all about design tokens!

Design tokens are something I've wanted to use for a while, and where better to start on my own project? I've been wanting to try them ever since attending a talk at <a href="https://frontendnorth.com/" target="_blank" rel="noopener noreferrer">Frontend North</a> a few years ago.

The concept of design tokens really fired my imagination - I wanted to start using them as soon as possible in projects because it could really help our designers and developers work more smoothly together. We use (S)CSS variables in our styles, of course - but currently it's a very manual process of picking the variable from the design document and adding it manually. If we could automate that process even slightly, that'd really help!

Of course, there are great tools that help with this now! But for the time being, on this project, I've added these manually.

To do this, for now, I followed a useful post from <a href="https://heydonworks.com/article/design-tokens-in-eleventy/" target="_blank" rel="noopener noreferrer">Heydon Works</a>. This has been great to build out the styles as we can simply loop through the styles to create all of the variables, such as the below:

<pre>
/* the loop in the layout style... */
:root {
    {% for size in theme.sizes -%}
        --size-{{ size.name -}}: {{ size.value }};
    {% endfor -%}
}

/* ... generates and outputs the variables for you: */
:root {
    --size-base: 1rem;
    --size-yorkie: 0.25rem;
    --size-beagle: 0.5rem;
    --size-collie: 0.75rem;
    --size-labrador: 1.25rem;
    --size-akita: 1.5rem;
    --size-dane: 1.75rem;
    --size-wolf: 2rem;
}
</pre>


Immediately I wanted to incorporate them into our work somehow; I felt it could be very useful especially at the beginning of a project.
