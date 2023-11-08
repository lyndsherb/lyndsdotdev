---
title: Playing with Design Tokens
description: First-time setup with design tokens
tags:
    - post
    - blog
    - design tokens
    - development
date: 2023-11-07
layout: post.njk
permalink: '/posts/{{ date | shortDate | slugify }}/{{ title | slugify }}'
---

Welcome back to another post! Today I'm writing about design tokens!

To start with - what *are* design tokens? On initial reading, it sounds like different things across different projects. Courtesy of Google, the first few results tell me the following:

> Design tokens are a **single source of truth to name and store design decisions** ...
>
> <a href="https://atlassian.design/tokens/design-tokens" target="_blank" rel="noopener noreferrer">Design tokens - Atlassian Design System</a>

> ... represent the **small, repeated design decisions** that make up a design system's visual style. Tokens replace static values, such as hex codes for color, with self-explanatory names.
>
> <a href="https://m3.material.io/foundations/design-tokens/overview" target="_blank" rel="noopener noreferrer">Design tokens - Material Design 3</a>

> ... tokens, for short ... are **design decisions, translated into data**. They’re ultimately a communication tool...
>
> <a href="https://spectrum.adobe.com/page/design-tokens/" target="_blank" rel="noopener noreferrer">Design tokens - Spectrum (Adobe)</a>

> ... **like nicknames for your design elements**.
>
> Instead of using hard codes like color hex codes or pixel sizes, we give them names...
>
> <a href="https://thedesignsystem.guide/design-tokens" target="_blank" rel="noopener noreferrer">The Design System Guide</a>

To the developers out there - does this sound familiar? Surprise! **Design tokens are variables!** Often you'll include them in a JSON file and import them into your project.

For this 11ty blog, I followed a useful post from <a href="https://heydonworks.com/article/design-tokens-in-eleventy/" target="_blank" rel="noopener noreferrer">Heydon Works</a>. This has been great to build the styles; we can simply loop through the data to create CSS variables, like so:

<pre class="code css">
/* for example, the following loop... */
{% raw %}
:root {
  {% for size in theme.sizes -%}
    --size-{{ size.name -}}: {{ size.value }};
  {% endfor -%}
}
{% endraw %}

/* ... will output everything in your 'sizes' theme array: */
:root {
  --size-base: 1rem;
  --size-xxsmall: 0.25rem;
  --size-xsmall: 0.5rem;
  --size-small: 0.75rem;
  /* etc... */
}
</pre>

It's been great to try these out - to quickly make variables, adding the loop is super helpful, and you have one file to change them. It also means, further inspired by Heydon's blog post, I could easily use this to set the meta colours in the base site template, as you can see below:

<pre class="code js">
// file: _data/theme.json
// i've declared an array of colours, similar to the sizes:
 "colors": [
    // ...
    {"name": "mercury", "value": "232, 232, 232"},
    // ...
    {"name": "shiraz", "value": "179, 9, 75"},
    // ...
  ],
// later in the file I've declared the theme colour by name rather than by value
 "themeColor": "shiraz",
</pre>

<pre class="code html">
{% raw %}
<!-- todo: this snippet needs properly escaping! -->
<\!-- file: _layouts/base.njk  -->
<\!-- I use a helper function that's added in eleventy.config.js - this helps me find the right colour from the theme colours  -->
<\meta name="theme-color" content="{{ theme.colors.light | findColor(theme.themeColor) }}" />

<\!-- this outputs the following theme based off my theme colours: -->
<\meta name="theme-color" content="rgb(179, 9, 75)" />
{% endraw %}
</pre>

And with that, not only do I have the same colours everywhere, I can update one variable in one place and it changes sitewide!

For this project, this setup is great; my theme definitions are in one place for me to change, add to and remove as I will. I believe Tailwind already does something very similar, though. Tailwind is definitely on my list of things to investigate in the future, so look forward to seeing a post about that!

Design tokens are something I've wanted to use for a while, and where better to start on my own project? I've been wanting to try them ever since attending a talk at <a href="https://frontendnorth.com/" target="_blank" rel="noopener noreferrer">Frontend North</a> a few years ago.

The concept of design tokens really fired my imagination - I wanted to start using them as soon as possible in projects because it could really help our designers and developers work more smoothly together. We use (S)CSS variables in our styles, of course - but currently it's a very manual process of picking the variable from the design document and adding it manually. If we could automate that process even slightly, that'd really help!

Anyway, I think that's all for now - thank you for reading and see you again soon!
