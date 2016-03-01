# Project Feedback + Evaluation

Good job on Project 1.  A good, solid project.  You kept it simple, writing

## Project Workflow:

>Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?


**Exceeds expectations:**
Nice readme.  "Approach Taken" is a clear explanation of what you expect of your code.  This is a great example of pseudocode.  It shows that you have an obvious understanding of what is required.  Good job with many, small commits. I hope your User Stories were helpful, they were prioritized well, to ensure you made stpe-by-stpe progression.

<aside>When we asked for your "approach", we were looking for your project workflow.  How did you tackle the problem, overall?  We'll work on making this request clearer.</aside>


## Technical Requirements

>Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

**Exceeds Expectations:**
You did what was required and added the complexity of choosing the number of cards.

For future projects, please do not clone the GA project repo.  Start with a fresh `git init`.  It makes grading harder and there's no benefit (no start code, no solution, etc).  Our instructions were not clear on this.

## Code Quality

>Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

**Meets expectations:**
You code has decent organization and uses semantic names.  I recommend you extract some functions, to group functionality and to move your code toward self-documenting.  When you feel you need to use a comment to indicate which loop/conditional is ending, consider that a smell.  Your loop/conditional is probably too long.

Because we had a long discussion, as we worked to refactor your project, I will only put a few inline comments.

Make sure to take a look at the inline code comments I made in this [diff](https://github.com/mattscilipoti/wdi8_project1_mv/compare/feedback_mms).

## Problem Solving

>Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

**Meets requirements:**
Good job working with an instructor for `var frontCards = document.querySelectorAll("div.image:not(.match)");`   As we discussed, when you run into that type of complexity, it usually means you should check your design.  In this case, it would have simplified a few places (including this), if you had just waited to add the "match" class once they actually were matched.

## Unsolved Problems

> Need help on line 67 in my javacript file. I'm trying to add a count down to my project in my h2 tag in HTML. However the following code won't change the number in my HTML tag according to the number of clicks:

``` javascript
document.getElementsByClassName('counter').innerHTML='HELLO';
```


What does `document.getElementsByClassName('counter')` return?
Try using an intermediary variable:
``` js
var counterEl = document.getElementsByClassName('counter')
```
