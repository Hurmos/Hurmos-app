# Hurmos-app

## tldr
A sport matchmaking system using players online-calendars. 

## introduction
The goal is to provide a league game experience for racket sports and stick games (badminton, tennis, basketball, football, ice hockey) with 2-22 players using private and public sport-resources.

Hurmos uses user-calendar connected to the app-backend, to suggest sport-game matches at nearby sport-resources using users favorite sports, and skill level, at empty calendar slots. Matchmaking works by using the pool of other players available at the times the user could play, the user distance from nearest sport-resources and skill level. 

For sport-facility owner it provides possiblity to list their resources to be used in the matchmaking. It suggests matches for players at these sport-facilities using real-time resource information. Accepted matches results billing the players cut of the sport-field rent, and afterwards funds will be transferred to the resource owner.

The app generates revenue only through a 10% fee added to the sport-field reservation fee paid by players. Additionally, the app provides a free reservation system for resource owners. This system allows reception employees to input reservations made via phone or in-person, linking them to the app for resource-specific reservation time data. 

## Customer segments

### Who are your target customers?
#### Player-role
* currently non club-member players of ball-games, who are semi-active or have history with some of the sports 
#### Resource-owner role 
Authorities owning an sport facility for ball-games, with an interest of integrating usage system and if wanted, making money with it. Including public instituations like schools and towns, sport facility businesses like tennis-centers. 

### What are their needs and wants?
#### Player 
* Less intemidating way of starting a new sport than belonging to a club.
* Play matches without weekly practises. 
* Playing with cheper price compared to belonging to a club. 
* Organazing games without big enough amount of players for the sport. 
* Finding an group with a similar skill level, in order for the play to be interesting but not scary.
* Selecting a suitable time for the game, fitting all the players. 
* Selecting sport-resource with distance possible for each of the players.
* Knowledge of the sporting facility properties including rental equipment, shower properties, quality of the field. 
#### Resource
* Bringing people new to sports as customers. 
* Offering active users new opponents and local community of around the sport
* Enhancing players performance and process of learning of sport, not depending on their level.
* Booking system combining reservations made in different ways.
* Online billing system for internet based reservations.
* Info about their business performance in local area, and business suggestions for action.  
* Easy inventory management and maintainance
* Customers who how to use the equipment 
## Value propositions 

### What value do you offer your customers 

#### player
* Full size team gathering for your own team and opposite one currently done often by group chats and polls in variuous messaging apps. 
* Possiblity to play with your chosen party, even if the amount of players is not equal to the size of opponent team.
* Game difficulity even between the players.
* Mental reassurance of randomly selected players at your own skill level, provided with profile pictures and short description of them.
* Competitive games without any organisational fees.
* Possibility to get harder opponents when improving.
* Community feeling with meeting the same sport practisioners in local area, consisting of opposite and own team players that were assigned by the app. 
#### resource 
* New customer base consisting of inactive beginner and intermediate players.
* Automatically updating reservation calendar system from bookings through the app, with possiblity to manually insert reservations.
* Online billing system that transfers the reservations made through the service.
## Channels

### How will you reach your target customers?
### What distribution channels will you use?
#### Resources

#### Players 
* University channels
## Customer Relationships
### What kind of customer relationships do you want to build?
#### player 
* Joining the competitive part of the system should be better that belonging to a club. Finding the each competitive match should give you same goosebumbs as hours before a big game, and winning alone should feel as good as winning with your own team.
* Starting as noobie, being an chill-player, they have a deep trust to the platform that provides safe experiences with exersicing.   
#### resource owner
* Happy initial reaction of the product.
* Interest usign the product to grow business, not stay alive.
* Creating interest for the data about the business, and acting based on that data.
* Deep trust to the platform to help to grow as business.
* Symbiosis where provider wants to help the platform to grow by marketing in their own channels. 
### How will you acquire and retain customers?
## Revenue Streams
### How will you generate revenue?
* 10% add to the reservation fee for each player on sport-resources that the resource owner has set a price.  Using Matchmaking will be free for sport-resources that do not have a pricing set by the owner. 
### What are your pricing model and payment terms?
* The app is free to use both for the sport resource owners and for the players 
* After you have accepted a game suggestion, you cannot return your money.
* Your account be only billed after you have accepted the game, searching for a one does not affect.  
## Key Resources
### What resources do you need to implement your business model? This could include physical resources (e.g., office space, equipment), human resources (e.g., employees, contractors), and financial resources.
* Tech lead 
* List of private sport-resources and access to field-specific booking calendar
* Small amount of funding to hold until revenue from booked games can hold the system together   
### How are you going to get these resources 
* Tech lead 
  * Networks from succesfull MVP 
  * Networking in the Aalto gamer and Aaltoes communties 
* List of private sport-resources and access to field-specific booking calendar
  * sport-resources-companies need to get more customers through the platform 
  * public-sport-resources need for organizing the field reservations
## Key Activities
### What activities do you need to perform to deliver your value proposition? This could include product development, marketing and sales, and customer support.
* product development 
* design and customer-data team 
## Key Partnerships
### What partnerships do you need to form to be successful? This could include partnerships with suppliers, distributors, and marketing partners.
* Partnership with resource-owners for access to their properties reservation data 
## Cost Structure
### What are your costs? This could include variable costs (e.g., cost of goods sold) and fixed costs (e.g., rent, salaries).
* Salaries of the employees 
* Rewarding the open-source community 
* Cloud computing  
## How will you deal with cheaters and trollers 
* Authentication to the platform is needed
* short-ban from platform
## How will you deal with no-goers 
* Ban with growing length from the service depending on times of no-goes
* Support from "game starting very soon" search option for players, in order to save the game
* Default-off notification for inactive players currently nearby.  

## Solutions to problems
### solutions and problems yet to be finalized and categorized
* Low advanced-intermediate player amount affect on the pool size and increased matchmaking time.
  * Creating games with unequal team sizes with noob side having few players more.
* Requiring minimum amount of choices from the player
  * Integrated scoreboard system for skill-level approximation
  * Dynamic matchmaking looping following properties in stages 
    1. Distance from player
    2. Pricing until 
    3. Skill level range
  * automated billing when accepting matches 
* Possiblitity to play different player-roles 
  * profile of which roles you can represent
* Low supply of player-roles
  * Discounted prices for games in very low demand roles
* Critical amount of players in the beginning
  * Calendar integrated queuing, suitable for people with routines
### Very important problems and solutions 

### Very important problems yet to be solved

* How is the skill level signified to the player
  * percentage of people you are expected to win, like "you win 88% of the players in Helsinki" 
  * quantified named ranks without user background understanding of the system, like [counterstrike] (https://dmarket.com/blog/csgo-ranks/) silver 1 - Global elite 
  * numerical score between distinct values like range 1-1000 
  * quantified named ranks with background understanding, like [Elo model](https://en.wikipedia.org/wiki/Elo_rating_system) ranging from 1-1000
### important problems yet to be solved  
* Players declining from games in the search of a cheaper match
  1. Offering use of public fields which is free
* -||- closer location 
* Giving the user possiblity to understand the matchmaking process in real time.
* How the skill level curve of sport inside a population dependens on culture and cost of starting the sport effect. 
### nonimportant problems and solutions

### nonimportant problems yet to be solved and categorized
* Person creating a party with a non signed up player.  

### Additional functionalities
* Using data on local sport-resource supply and player growth to suggest the optimal resources and quantities for you to offer, maximizing your income.
* Real time queueing for matches
* Information about average waiting lines for each role
* tips based on data for when to build new resources and for which sport. 