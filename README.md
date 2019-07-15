# Color Game

Started: 09/07/2019
Author: Daniel Oberbillig (danieloberbillig.com)

Purpose: Refresh learnings of DOM manipulation basics

Inspired by udemy course https://www.udemy.com/the-web-developer-bootcamp/learn/lecture/3861466#overview


# TODO
- add daniel footer
- add proper readm
- change left side to flex items as currently things overlap when resize to mobile
- click on restart should end sound effect
- sass style.scss style.css
- exact mobile vh
- turn off/on music


# DONE
- centralize load spinner
- bug fix: after a while the correct color returns undefined
- vertical center control dark background buttons
- different font types more bold and narrow, more hipster schreibschrift
- resize / position correct/wrong message
- add animation if wrong
- add sound effects
- center controls
- align copyright flex item to bottom page
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
- add 3, 6, 9 color tiles 
- add loop through buttons (for more levels) class to add eventlisteners
- loop through all squares and only show / set color if color[i] exist

## Outlook
- add sound effects
- add animations of breaking/exploding tiles
- add score
- show hint rgb for developer, else only show rgb if incorrect
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