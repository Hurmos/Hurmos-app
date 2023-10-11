# Hurmos-app Readme

## Quick Links
- [TL;DR](#tldr)
- [Introduction](#introduction)
- [Customer Segments](#customer-segments)
- [Value Propositions](#value-propositions)
- [Channels](#channels)
- [Customer Relationships](#customer-relationships)
- [Revenue Streams](#revenue-streams)
- [Key Resources](#key-resources)
- [Key Activities](#key-activities)
- [Key Partnerships](#key-partnerships)
- [Cost Structure](#cost-structure)
- [Dealing with Cheaters and Trollers](#how-will-you-deal-with-cheaters-and-trollers)
- [Dealing with No-Goers](#how-will-you-deal-with-no-goers)
- [Solutions to Problems](#solutions-to-problems)
- [Additional Functionalities](#additional-functionalities)

## TL;DR
A sports matchmaking system using players' online calendars.

## Introduction
The goal is to provide a league game experience for racket sports and stick games (badminton, tennis, basketball, football, ice hockey) with 2-22 players using private and public sports resources.

Hurmos uses a user's calendar connected to the app-backend to suggest sport game matches at nearby sports resources using users' favorite sports and skill level at empty calendar slots. Matchmaking works by using the pool of other players available at the times the user could play, the user's distance from the nearest sports resources, and skill level.

For sports facility owners, it provides the possibility to list their resources to be used in the matchmaking. It suggests matches for players at these sports facilities using real-time resource information. Accepted matches result in billing the player's cut of the sport-field rent, and afterwards, funds will be transferred to the resource owner.

The app generates revenue only through a 10% fee added to the sport-field reservation fee paid by players. Additionally, the app provides a free reservation system for resource owners. This system allows reception employees to input reservations made via phone or in-person, linking them to the app for resource-specific reservation time data.

## Customer Segments
### Who are your target customers?
#### Player Role
- Currently, non-club-member players of ball games, who are semi-active or have a history with some of the sports.
#### Resource Owner Role
- Authorities owning a sports facility for ball games, with an interest in integrating usage system and, if wanted, making money with it. This includes public institutions like schools and towns, and sports facility businesses like tennis centers.

### What are their needs and wants?
#### Player
- A less intimidating way of starting a new sport than belonging to a club.
- Playing matches without weekly practices.
- Playing at a cheaper price compared to belonging to a club.
- Organizing games without a large enough number of players for the sport.
- Finding a group with a similar skill level, making the play interesting but not intimidating.
- Selecting a suitable time for the game, fitting all the players.
- Selecting a sports resource with a distance possible for each of the players.
- Knowledge of the sporting facility properties, including rental equipment, shower facilities, and field quality.
#### Resource Owner
- Bringing new people to sports as customers.
- Offering active users new opponents and a local community around the sport.
- Enhancing players' performance and the process of learning a sport, not depending on their skill level.
- A booking system combining reservations made in different ways.
- An online billing system for internet-based reservations.
- Information about their business performance in the local area and business suggestions for action.
- Easy inventory management and maintenance.
- Customers who know how to use the equipment.

## Value Propositions
### What value do you offer your customers?
#### Player
- A full-size team gathering for your own team and the opposite one, currently done often by group chats and polls in various messaging apps.
- The possibility to play with your chosen party, even if the number of players is not equal to the size of the opponent team.
- Game difficulty even between the players.
- Mental reassurance of randomly selected players at your own skill level, provided with profile pictures and a short description of them.
- Competitive games without any organizational fees.
- The possibility to get harder opponents when improving.
- A community feeling with meeting the same sports practitioners in the local area, consisting of opposite and own team players assigned by the app.
#### Resource Owner
- A new customer base consisting of inactive beginner and intermediate players.
- An automatically updating reservation calendar system from bookings through the app, with the possibility to manually insert reservations.
- An online billing system that transfers the reservations made through the service.

## Channels
### How will you reach your target customers?
### What distribution channels will you use?
#### Resources
#### Players
- University channels

## Customer Relationships
### What kind of customer relationships do you want to build?
#### Player
- Joining the competitive part of the system should be better than belonging to a club. Finding each competitive match should give you the same excitement as hours before a big game, and winning alone should feel as good as winning with your own team.
- Starting as a newbie or being a casual player, they have deep trust in the platform that provides safe experiences with exercising.
#### Resource Owner
- A happy initial reaction to the product.
- Interest in using the product to grow their business, not just to survive.
- Creating interest in the data about the business and acting based on that data.
- Deep trust in the platform to help it grow as a business.
- A symbiotic relationship where the provider wants to help the platform grow by marketing in their own channels.

### How will you acquire and retain customers?

## Revenue Streams
### How will you generate revenue?
- A 10% fee added to the reservation fee for each player on sports resources that the resource owner has set a price for. Using matchmaking will be free for sports resources that do not have a pricing set by the owner.

### What are your pricing model and payment terms?
- The app is free to use for both sports resource owners and players.
- After you have accepted a game suggestion, you cannot return your money.
- Your account is only billed after you have accepted the game; searching for one does not affect it.

## Key Resources
### What resources do you need to implement your business model? This could include physical resources (e.g., office space, equipment), human resources (e.g., employees, contractors), and financial resources.
- Tech lead
- List of private sports resources and access to field-specific booking calendars
- A small amount of funding to sustain the system until revenue from booked games can support it

### How are you going to get these resources?
- Tech lead
  - Networks from a successful MVP
  - Networking in the Aalto gamer and Aaltoes communities
- List of private sports resources and access to field-specific booking calendars
  - Sports resource companies need to get more customers through the platform
  - Public sports resources need it for organizing field reservations

## Key Activities
### What activities do you need to perform to deliver your value proposition? This could include product development, marketing and sales, and customer support.
- Product development
- Design and customer data team

## Key Partnerships
### What partnerships do you need to form to be successful? This could include partnerships with suppliers, distributors, and marketing partners.
- Partnership with resource owners for access to their property's reservation data

## Cost Structure
### What are your costs? This could include variable costs (e.g., cost of goods sold) and fixed costs (e.g., rent, salaries).
- Salaries of the employees
- Rewarding the open-source community
- Cloud computing

## How will you deal with cheaters and trollers?
- Authentication to the platform is needed
- Short bans from the platform

## How will you deal with no-goers?
- Bans with growing lengths from the service depending on the frequency of no-shows
- Support from a "game starting very soon" search option for players to save the game
- Default-off notifications for inactive players currently nearby.

## Solutions to Problems
### Solutions and problems yet to be finalized and categorized
- Low advanced-intermediate player numbers affecting the pool size and increased matchmaking time.
  - Creating games with unequal team sizes with the noob side having a few players more.
- Requiring a minimum number of choices from the player
  - Integrated scoreboard system for skill-level approximation
  - Dynamic matchmaking looping following properties in stages
    1. Distance from player
    2. Pricing until
    3. Skill level range
  - Automated billing when accepting matches
- Possibility to play different player roles
  - Profile of which roles you can represent
- Low supply of player roles
  - Discounted prices for games in very low demand roles
- Critical amount of players in the beginning
  - Calendar-integrated queuing, suitable for people with routines

### Very important problems and solutions
- How is the skill level signified to the player
  - Percentage of people you are expected to win, like "you win 88% of the players in Helsinki."
  - Quantified named ranks without user background understanding of the system, like [Counter-Strike](https://dmarket.com/blog/csgo-ranks/), Silver 1 - Global Elite
  - Numerical score between distinct values like range 1-1000
  - Quantified named ranks with background understanding, like the [Elo model](https://en.wikipedia.org/wiki/Elo_rating_system) ranging from 1-1000

### Important problems yet to be solved
- Players declining from games in search of a cheaper match
  - Offering use of public fields which is free
- -||- closer location
- Giving the user the possibility to understand the matchmaking process in real time.
- How the skill level curve of sports inside a population depends on culture and the cost of starting the sport effect.

### Non-important problems and solutions

### Non-important problems yet to be solved and categorized
- A person creating a party with a non-signed-up player.

## Additional Functionalities
- Using data on local sports resource supply and player growth to suggest the optimal resources and quantities to offer, maximizing your income.
- Real-time queuing for matches
- Information about average waiting times for each role
- Tips based on data for when to build new resources and for which sport.