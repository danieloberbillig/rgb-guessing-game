# Color Game

Started: 09/07/2019
Author: Daniel Oberbillig (danieloberbillig.com)

Purpose: Refresh learnings of DOM manipulation basics

Inspired by udemy course https://www.udemy.com/the-web-developer-bootcamp/learn/lecture/3861466#overview

# DONE
- outline: none to avoid surrounding blue line of objects
- add height: 100% to button to ensure it takes 100% of parent element (not just the line height)
- fade out wrong color
- span between buttons to show message: display inline-block and width 20% creates gap
- create init() function that runs all from start
- write 'try again' instead of 'start game' after first try
- implement correct math.random (code bottom of js)
- add letter-spacing: 1px for controls
- add button tag
- hover button effect
- fade: transition all 0.5s for button / background 0.6 for square
- display 'correct / wrong' instead of alert
- transition of appearing cubes

## Outlook
- add sound effects
- add animations of breaking/exploding tiles
- add score
- add 3, 6, 9 color tiles 
- show hint rgb for developer, else only show rgb if incorrect
- loop through all squares and only show / set color if color[i] exist
- add loop through buttons (for more levels) class to add eventlisteners
- consider splitting up code in more functions (all >10 lines)
- extract more into single functions (eg math.random)
- use ternary operator if ? then : else (for 2 options useful) -> NOT SUITABLE
- avoid global variables and move into functions and return values from function
- show rgb of wrong selection to learn
- re-style differently
- consider creating objects with properties and methods
- deploy
- google analytics
- add advertising
- PWA
- consider line-height in styling