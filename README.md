# My to do list

My to do list is a websit to help you to organize and prioritize your tasks. You can add your tasks, then check it, if the task has been done, or edit or remove it.

Those who are organized can plan their tasks and dedicate a better time for each activity, without wasting it. It is worth mentioning that generally those who lack planning tend to procrastinate during their day, which greatly hinders their activities and performance. 


## Demo

A live demo can be found [here](https://luandretta.github.io/my-to-do-list/)

- - -

# Contents
# Contents
* [Languages Used](#languages-used)
* [User Experience](#user-experience-ux)
* [Design](#design)
  * [Features](#features)
  * [Acessibility](#accessibility)
  * [Color Scheme](#color-scheme)
  * [Typography](#typography)
  * [Icons](#icons)
* [Deployment](#deployment)
  * [Run locally](#run-locally)
  * [Testing](#testing)
* [Credits](#credits)

- - - 

# Languages Used
* JavaScript
* HTML5
* CSS3
- - - 

# User Experience (UX)

## The ideal users for this website is:
* Users who want to have planning improves productivity.
* Users who want to organize their tasks.

## User stories:
* As a new user, I expetc to easily to understand the main purpose of the site and navigate without complications.
* I can create my to do list, either edit, or check or remove the tasks.
* If I have many tasks, I expect to find a task easily so I can check it out.
* I also want to select the done and not done tasks.

- - -
# Design


## Features

The website have only one page, the index page that contains a background image and a centralized main area.
The first input is the task generator, where the user will add his or her tasks.
Each added task will be added below the search and filter tools.
Each task listed will have three buttons, to check, edit or remove.
Clicking the **check button** will change the color of the task and give you a line about the task.
By clicking on the **edit button** the user can edit the task and save it.
By clicking the **remove button** the user will delete the task.

Using the search tool the users can find the desired task to check, and using the filter tool the users can select either all tasks, or tasks done, or tasks that need to be done.

The footer with Social Icon allows the users to get in touch with the creator of the page.

## Accessibility
The website is as accessible as possible:
- Using semantic HTML
- Ensuring that there is a sufficient colour contrast throughtout the site.
- Using descriptive aria-label in the buttons
- Providing information for screen readears where there are icons used and no text.
- Confirming through lighthouse in devtools.

## Color Scheme
Blue tones were chosen to have harmony on the site, matching the background, which radiates peace. The color blue is linked to productivity and success, and also transmits tranquility; perfect for looking at your tasks without feeling under pressure.

## Typography
The fonts Ubuntu and Lora are imported from Google Fonts.

## Icons
The icons were from [font awesome](https://fontawesome.com/icons).

- - -
# Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/luandretta/night-clicks), the following steps were taken: 
1. Login or Sign Up to GitHub.
2. Open the project repository.
3. From the menu items near the top of the page, select **Settings**.
4. Click on "Pages" in the left hand navigation panel.
5. Under "Source", choose which branch to deploy. This should be Main for newer repositories (older repositories may still use Master).
6. Choose which folder to deploy from, usually "/root".
7. Click "Save", then wait for it to be deployed. 
It can take some time for the page to be fully deployed.
8. Your URL will be displayed above "Source"

### Run locally
**Fork**
1. Login or Sign Up to GitHub.
2. Open the project [repository](https://github.com/luandretta/night-clicks).
3. Click the Fork button in the top right corner.

**Clone**
1. Login or Sign Up to GitHub.
2. Open the project [repository](https://github.com/luandretta/night-clicks).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in the code editor of your choice and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

# Testing 
The different aspects of the site work as intended and have an expected outcome providing an easy and straightforward way for the users to achieve their goals.
Chrome development tools were used during the development of the site to identify and resolve any issues as it progressed.
The performance was tested manual and automated testing.

## Functionality
1. W3C Markup Validator, W3C CSS Validator Services and Jshint were used to validate this project to ensure that there were no syntax errors.

2. Lighthouse within the Chrome Developer Tools are used to test performance, accessibility, best practices and SEO of the My to do list Website.

3. Manual as an user.

| Test Label | Test Action | Expected Outcome | Test Outcome |
|:--- | :--- ||:--- | :--- |
|


## Compatibility
The website displays correctly across different browsers and screen sizes.

It was checked on Chrome, Firefox, Safari and Edge.

## Responsiveness
Chrome developer tool have been used to check the responsivness. The application was tested on very small screens e.g. iPhone 5(320px wide) and very large screens e.g. 5k iMac Pro(5120x2880px).

Media queries are used for more responsiveness.

## Solved bugs
* When clicking on the icon button as content, it did not activate the event, only if I clicked on the area outside the icon. Rewrote the function of each button using e.currentTarget to fix it.

# Credits
## Code
The code was based on a tutorial from [w3schools](https://www.w3schools.com/howto/howto_js_todolist.asp) with some changes and additions.

##
* My family for their patiences as I disappeared to code during the Christmas time.

* My husband for all the support.

* My Mentor Brian Macharia for continuous helpful feedback.