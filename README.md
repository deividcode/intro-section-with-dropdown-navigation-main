# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Intro section with dropdown navigation solution](#frontend-mentor---intro-section-with-dropdown-navigation-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/images/dropdown-navigation-finished.png)



### Links

- Solution URL: [Add solution URL here](https://github.com/deividcode/intro-section-with-dropdown-navigation-main/tree/main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
  - Flexbox
  - CSS Grid
  - Variables
  - Methodology BEM  
- Mobile-first workflow


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<details class="menu__items">
  <summary>Features <img src="images/icon-arrow-down.svg" alt=""></summary>
  <nav class="menu__colapse">
    <a class="menu__link" href="#"><img src="images/icon-todo.svg"> Todo List</a>
    <a class="menu__link" href="#"><img src="images/icon-calendar.svg"> Calendar</a>
    <a class="menu__link" href="#"><img src="images/icon-reminders.svg"> Reminders</a>
    <a class="menu__link" href="#"><img src="images/icon-planning.svg"> Planning</a>
  </nav>
</details>

<picture>
  <source srcset="images/image-hero-mobile.png" media="(max-width: 768px)">
  <source srcset="images/image-hero-desktop.png" media="(min-width: 820px)">
  <img src="images/image-hero-mobile.png" alt="MDN Web Docs">
</picture>

```

## Author

- Frontend Mentor - [@deividcode](https://www.frontendmentor.io/profile/deividcode)
- Twitter - [@yourusername](https://twitter.com/deividCoder)

