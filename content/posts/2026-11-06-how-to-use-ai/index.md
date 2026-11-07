---
title: How to use AI (if you're AI-averse)
description: Some tips and tricks on using AI in the workplace if you're not a fan! 
date: 2026-11-06
tags: 
    - development
    - AI
background: 
  image: ./mohammad-rahmani-code-view.jpg
  credit:
    url: https://unsplash.com/photos/laptop-screen-displaying-colorful-code-8qEB0fTe9Vw
    text: Mohammed Rahmani (Unsplash)
---

AI is the new 'big thing' in tech - and that's putting it very, *very* mildly. Between the [environmental](https://unric.org/en/ais-environmental-costs-threaten-water-land-and-climate/) and [financial impacts](https://isaiprofitable.com/), amongst other reasons, I know a few people who struggle to justify using it!

However, AI usage is everywhere, especially in tech. It's used in projects, [frameworks](https://github.com/withastro/astro/tree/main/.agents), [libraries](https://github.com/react/react/tree/main/.claude) and [even in programming languages](https://github.com/php/php-src/pull/25157); to avoid it, at this point we'd have to start from the ground up! 

Below is how I've been using it; whilst this is mostly catered to working in development, I hope these tips can help anyone adapt to using it with less worry:

## Don't use it outside of work
What it says on the tin, really. I'm keeping my work with AI agents strictly professional for the time being; this helps me improve my understanding whilst keeping my baseline skills sharp on my personal projects. 

## Set up a global instruction file
Making a local instructions file, such as [AGENTS.md](https://agents.md/) or [CLAUDE.md](https://claude.com/resources/articles/using-claude-md-files) is one of the most helpful things you can do. One of the first things I added to mine was to keep it's communication style concise - no cheery language, no 'Good catch' or 'Great question's. I like it to be straightforward. 

## Take it slow
AI agents more often than not have different modes - certainly, Claude does (my go-to up to now). Keep it in 'Manual' to review what commands it's executing, so you understand what it's doing. 

## Start with what you know
It sounds counterintuitive, right? Why ask the agent to do the work you can already do? My answer is - to help you understand what it's doing and how it works. This makes it easier to review and discuss changes; especially if it suggests doing something you know isn't correct. 

When you get more used to it's quirks, then you can work with it on less familiar tasks.

## Question everything
Make sure you're reviewing what it's outputting, especially code-wise. Ask it questions. Push back if you don't think those changes are a good idea (or if it's suggesting something totally out of the blue). Request sources. With this, you're learning to corral it and make it more efficient for your needs. 

## Find places where it could actually be helpful to you
If there's anywhere in your workflow that bugs you, maybe you can use it to assist with that. I started out using it to help with giving me a 'peer' review, prior to raising a PR to the team. I don't necessarily action all of the changes it suggests, but it can catch something you've missed (code formatting, incorrect comments and so on). 

I also make use of Learning mode when I'm moving around parts of the codebase I'm less familiar with. It's no substitute for pair programming, but it can help you understand *how* to implement something (if not necessarily the *why*).

---

And that's it, for now. A huge caveat that AI is not perfect; you will still find you're pushing back on it's suggestions. But hopefully with these tips, you'll keep yourself well-honed for any work scenario. 

Best of luck on your journeys, friends! 
