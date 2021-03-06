# LifeHack 2022 Team ExceptionallyGoodException

# Tech Stack 
<img src="https://user-images.githubusercontent.com/52826683/177026366-27647836-2b4e-4af6-ab7a-00ec5a67ecda.svg" width="50" height="50"> <img src="https://user-images.githubusercontent.com/52826683/177026379-786e8b79-67f8-4383-baf5-4ff8c656d904.svg" width="50" height="50">
<img src="https://user-images.githubusercontent.com/52826683/177026381-417f1eb2-8487-4103-9a8d-88351f62f176.svg" width="50" height="50">
<img src="https://user-images.githubusercontent.com/52826683/177026383-48634a68-82e6-42f2-bcb0-1242854b6152.svg" width="50" height="50">

Python | React | JavaScript | Node.js

- [Giving Back - Question 1](#giving-back---question-1)
  * [Motivation](#motivation)
  * [User Stories](#user-stories)
- [Our Solution](#our-solution)
  * [Benefits of Scaling Up](#benefits-of-scaling-up)
  * [Telegram Bot](#telegram-bot)
  * [Website Application](#website-application)
    + [Filter by Preferred Beneficiaries](#filter-by-preferred-beneficiaries)
    + [Add Telegram ID](#add-telegram-id)
    + [Group Registration](#group-registration)
    + [Volunteer Hours Leaderboard](#volunteer-hours-leaderboard)
    + [Share Volunteer Experiences](#share-volunteer-experiences)
- [Application Prototype and Visualisation](#application-prototype-and-visualisation)
  * [Registration Page](#registration-page)
  * [Login Page](#login-page)
  * [Friends Page](#friends-page)
  * [Community Page](#community-page)
  * [History Page](#history-page)
  * [Page of Other Users](#page-of-other-users)
  * [Volunteer Events List](#volunteer-events-list)
- [Our Extent of Implementation](#our-extent-of-implementation)
  * [Frontend](#frontend)
    + [Landing Page](#landing-page)
    + [User Signups and Logins](#user-signups-and-logins)
    + [Upload Profile Picture and Crop Profile Picture](#upload-profile-picture-and-crop-profile-picture)
    + [View Profile Pages](#view-profile-pages)
    + [Clickable Tabs](#clickable-tabs)
  * [Backend](#backend)
    + [Login Authentication](#login-authentication)
    + [Database](#database)
  * [Telegram Bot](#telegram-bot-1)
    + [Add or Record Volunteer Experiences](#add-or-record-volunteer-experiences)
    + [Volunteer Experience Summary](#volunteer-experience-summary)
    + [PDF Generation](#pdf-generation)
    + [Telegram Bot Database](#telegram-bot-database)
- [Future Improvements and Extensions](#future-improvements-and-extensions)
  * [Database Migration](#database-migration)
  * [Singpass Log-in](#singpass-log-in)
  * [Connecting to Official School Volunteering Ecosystems](#connecting-to-official-school-volunteering-ecosystems)
  * [Cloud Deployment](#cloud-deployment)


# Giving Back - Question 1
Question Statement:
Volunteering is one of the best ways to give back to our community. What creative ideas do you have to make volunteering easier, widespread, and more beneficial to those in need?

## Motivation
We chose this question because we realised that we had the shared experience of having to go through unnecessary hurdles when wanting to volunteer in the past. We have documented common user stories below.

## User Stories
1. I want to volunteer but I am not sure how to look for volunteering opportunities that are suitable for me. 
2. I want to volunteer with friends but all opportunities require individual signups, and we are not sure if we are going to be able to volunteer together as a group.
3. I want to be able to keep track of all my volunteering records and add them to my portfolio easily.
4. I want to be able to document my new self-directed volunteering experiences, but I had to go through a tedious volunteer-verification process with my school/organisation.
5. I want to be able to receive accolades for my volunteering efforts.

# Our Solution
We have decided to create a centralised volunteering platform where visitors will be able to quickly navigate to volunteering opportunities that best suits them. This means that visitors will be quickly able to filter events that are tailored to their preferred beneficiaries (such as the elderly, children, or animals).

## Benefits of Scaling Up
We believe that our platform will be able to benefit from significant Economies of Scale. This is because as our platform grows and potentially becomes the nation's leading centralised volunteering platform, the documents generated by our system will be considered to be of high validity and can be readily submitted and accepted as official documents. Furthermore, virtual awards distributed by our system (such as medals or achievements based on number of hours volunteered) may be held in higher regard, thus serving as an additional incentive for volunteers to participate in more events.

## Telegram Bot
To augment the effectiveness of the whole system, we have created a Telegram bot that users will be able to interact with to record their new volunteering efforts, as well as to generate a summary of their volunteering efforts thus far.

<img src="https://user-images.githubusercontent.com/52826683/178099645-2bd47ddc-e5a7-40c3-a3b6-0f9537cada08.jpg" width="275" height="600">

## Website Application
Visitors will be able to visit our website, which will lead them to a beautiful landing page where they can sign up and look at the various volunteering opportunities that will be presented to them.

### Filter by Preferred Beneficiaries
Users will be able to filter by preferred beneficiaries and be presented with a whole list of volunteering opportunities. This will save users a lot of time as they will be able to quickly narrow down their options to events that are best suited for them.

### Add Telegram ID
Users will be able to link their Telegram account to their user profile, which will enable the use of the Telegram bot for recording new events and generating summaries of their volunteer experiences.

### Group Registration
Users will be able to join Groups, where they are treated as a collective. Groups will then be able to sign up for volunteering events together, where organisers will be presented with the option to either accept the entire Group or reject the Group entirely, thus ensuring that members of a Group will be able to volunteer together. This will solve a huge problem for volunteers who hope to volunteer with their friends but are afraid of not being assigned to volunteer in the same timeslot/event.

### Volunteer Hours Leaderboard
We intend to gamify the process of volunteering by creating a leaderboard, which incentivises users to volunteer more. They will be able to measure their rankings against their friends, as well as against all users of the platform.

### Share Volunteer Experiences
Volunteers will be able to create Experiences, which functions like posts, where they are able to share their thoughts and reflections following a volunteer event. This can help potential volunteers to get a better idea of how what their own experiences may be like.

# Application Prototype and Visualisation

## Registration Page

<img src="https://user-images.githubusercontent.com/52826683/178120176-1dd4431f-d352-4fc9-9ad8-b7ec5b648058.jpg" width="428" height="303">

## Login Page

<img src="https://user-images.githubusercontent.com/52826683/178120203-517c53df-72bd-4249-938f-9bd794ba035c.jpg" width="428" height="303">

## Friends Page
A list of the user's friends will be shown, alongside a leaderboard showing a list of friends sorted by number of hours volunteered, in descending order. Challenges that the user is currently participating in will also be displayed.

<img src="https://user-images.githubusercontent.com/52826683/178120418-9a798f7d-5a5a-4ca5-8a2b-32343b8533fb.jpg" width="428" height="303">

## Community Page
A global leaderboard with users with the highest number of hours volunteered will be displayed in descending order. Popular volunteer experiences shared will be showcase and shared with all users on this page.

<img src="https://user-images.githubusercontent.com/52826683/178120228-8c3a8adb-1f6f-4888-a42a-c08334168578.jpg" width="428" height="303">

## History Page
This page provides a clear breakdown of what you have volunteered for, and allows for exporting to a pdf file.

<img src="https://user-images.githubusercontent.com/52826683/178120237-20f47ff0-7022-4720-afd5-fe46ef558f4a.jpg" width="428" height="303">

## Page of Other Users
This is how other users' accounts will show up, whereby you are able to see their details, look at the number of mutual friends you have, as well as add them as a friend.

<img src="https://user-images.githubusercontent.com/52826683/178120261-6df2ad24-2472-40ed-a688-a9a67f7527a5.jpg" width="428" height="303">

## Volunteer Events List
Volunteers will be able to click on the "Events" tab to take a look at a list of events that they can join. This intuitive UI will allow users to easily navigate and identify activities that they would like to be part of, before signing up as an interested participant.

The following is a prototype design of how the events page would look like.

<img src="https://user-images.githubusercontent.com/52826683/178110395-6d4af849-c127-4b05-9631-7ec2cfe03e9b.jpg" width="428" height="303">

Upon clicking on a desired volunteering event, users will be brought to another page where more information of the site would be shown.

<img src="https://user-images.githubusercontent.com/52826683/178110899-6e738a49-eece-423a-846f-4f76f6c234f6.jpg" width="428" height="303">

# Our Extent of Implementation
The extent to which we have implemented our solution in 24 hours will be documented in this section.

## Frontend
Our visualisation and initial prototype designs has largely been converted to React, powered by Bootstrap. Currently, our web application is able to support the following functions.

### Landing Page
The link to our landing page is http://givingback-sg.herokuapp.com/

### User Signups and Logins
Users will be able sign up and conduct logins through our web application.

### Upload Profile Picture and Crop Profile Picture
Users are able to upload profile pictures and also crop them properly to fit into a circular display.

### View Profile Pages
Users' own profile pages as well as the profile pages of other users can be viewed, with a display of their own profile details(name, email, phone number, telegram id, profile picture).

### Clickable Tabs
Users are able to click on the various tabs (Events, Community, Friends, History) to navigate to different pages of our web app.

## Backend
### Login Authentication
Login authentication has been implemented via Supabase Auth, users are now able to create an account using their email account, whereby they will be required to authenticate their emails after they create their account.

### Database
The user's data will then be stored on Supabase, which allows us to verify that users are registered before logging in, and users that are not registered will not be able to use the site until they successfully register an account.

## Telegram Bot
Telegram bot was successfully implemented (although the bot has to be run locally). The bot is equipped with a clear and concise prompt/response flow which creates a user-friendly experience for all. Currently, the Telegram bot supports all of its main functions. The bot can be interacted with via @Giving_back_bot on Telegram.

### Add or Record Volunteer Experiences
In order to make allow for volunteer events to be recorded rapidly, we have created a Telegram Bot that allows users to input a volunteer event code (unique for every event) that will quickly record the user's attendance and add the event to the user's profile. 

Our prototype volunteer response capture prompt/response flow can be seen in the screenshots below

<img src="https://user-images.githubusercontent.com/52826683/178111536-591083eb-0ed1-4b80-82c4-0abe98bd54d8.jpeg" width="275" height="600"> <img src="https://user-images.githubusercontent.com/52826683/178111548-2140426c-6378-4a3a-b3fa-5269e8c7e683.jpeg" width="275" height="600">

### Volunteer Experience Summary
Through the bot, users can quickly generate a summary of the volunteering experience that the user has thus far. This is done by sending a request via the Telegram bot to the GivingBack database which will return all the volunteering information of the user in a neatly formatted message. Users will then be provided an option to generate a pdf file of their volunteering experiences, which can be submitted as an official document (for events such as scholarship applications).

<img src="https://user-images.githubusercontent.com/52826683/178099727-8bc12c65-5fd4-4112-9bfe-325ee75ec9ef.jpg" width="275" height="600">

### PDF Generation
The bot will be able to retrieve volunteering information of each user using their Telegram id, and convert this information into a neatly formatted PDF file which will be returned to the user. 
The user will prompt for the bot to convert the information into a pdf file. The information is then processed and then the pdf file will then be sent by the bot to the user.

<img src="https://user-images.githubusercontent.com/52826683/178121382-e50eaa06-8c60-40e4-af88-65bf6a330943.jpeg" width="275" height="600">

Formatting of the pdf file:
<br><br>
![Screenshot 2022-07-09 171523](https://user-images.githubusercontent.com/52826683/178099695-b644d533-56ac-43be-a120-68e8c14ef901.jpg)

### Telegram Bot Database
Currently, we are able to access a temporary database (Google Sheets) and update/retrieve data for unique users through the Telegram bot. Specifically, volunteering information is retrieved from the our Google Sheets database to be displayed to the user, and this information can then be used to generate a pdf file. Additionally, users are able to input a volunteer event code to record a new event in the database. (Currently, any code can be typed in, and a random number will be generated to select one out of nine different sample volunteer event details to be recorded in the database)

For the sake of testing, users are provided with an option to register using their Telegram ID through the bot. This will then allow users to be able to upload and record new test volunteering activities, and generate pdf files of their test volunteering experiences. Ideally, we would have liked to have users to be able to register via typing in their Telegram ID on our website.

The following database started out empty, and was filled up and edited solely through the use of our fully functional Telegram bot.
<br>
<br>
<br>
![InkedDatabase](https://user-images.githubusercontent.com/52826683/178111791-4d8f60be-ed22-4d37-8709-9e6d77fa0059.jpg)

# Future Improvements and Extensions
We believe that our application has the potential to become integrated with the heart of Singapore's volunteering ecosystem. Users can be linked up to the platform from the very beginning of their education journey and use it to track their lifetime's volunteering work.

## Database Migration
From the short time that we've worked with the project, it became very apprent very early on that a relational database will work much better. Given more time, we would have selected Supabase as our database of choice to launch this application.

## Singpass Log-in
If we are able to secure a Singpass log in from users, volunteers will be able to quickly onboard themselves onto our application, and use tie their volunteering records to their Singpass account, thus making information verification extremely efficient and effective.

## Connecting to Official School Volunteering Ecosystems
Schools will be able to retrieve official data directly from the platform to be used as reference for verifying students' volunteering records.

## Cloud Deployment
Currently, the bot can only be run locally and thus will not have 100% uptime. Testers will need to reach out to our team members in order to test the bot. Given more time, we would be able to prepare the bot to be run on the cloud, which will allow it to constantly be available for use.
