
To create a database schema for the Hurmos-app project, we'll need several tables to store information about players, sport resources, reservations, matches, and more. Below is a simplified database schema that you can use as a starting point. Note that you may need to expand and refine this schema based on the actual requirements and functionalities of your application.

## Users Table:
* user_id (Primary Key)
* username
* email
* password
* role (Player or Resource Owner)
* home-location
* Other user-related information

## Player Profile Table:
* profile_id (Primary Key)
* user_id (Foreign Key)
* skill_level
* favorite_sports
* Other player-related information

## Resource Owners Table:
* owner_id (Primary Key)
* user_id (Foreign Key)
* business_name
* Other resource owner-related information
* Sport Resources Table:

## resource_id (Primary Key)
* owner_id (Foreign Key)
* name
* location
* sport_selection
* Other resource-related information

## Reservations Table:
* reservation_id (Primary Key)
* resource_id (Foreign Key)
* player_id (Foreign Key)
* reservation_datetime
* billing_amount
* payment_status (Paid or Unpaid)
* Other reservation-related information

## Matchmaking Queue Table:
* queue_id (Primary Key)
* player_id (Foreign Key)
* sport_selection
* skill_level_range
* desired_datetime
* Other matchmaking-related information

## Matches Table:
* match_id (Primary Key)
* sport_selection
* datetime
* location
* match_status (Upcoming, Ongoing, Completed)
* Other match-related information

## Match Players Table:
* match_player_id (Primary Key)
* match_id (Foreign Key)
* player_id (Foreign Key)
* team (Team A or Team B)
* Other match player-related information

## Billing History Table:

* billing_id (Primary Key)
* user_id (Foreign Key)
* transaction_datetime
* amount
* transaction_type (Reservation, Matchmaking Fee, etc.)

## Matchmaking Fee Table:

* fee_id (Primary Key)
* sport_selection
* percentage_fee

## Sport Resource Inventory Table:

* inventory_id (Primary Key)
* resource_id (Foreign Key)
* sport_selection
* equipment_available
* shower_facility
* Other inventory-related information

## Matchmaking Preferences Table:

* preference_id (Primary Key)
* player_id (Foreign Key)
* preferred_location
* preferred_skill_level_range
* preferred_sport_types
* Other preference-related information

This schema provides the basic structure for storing information about users, their profiles, sport resources, reservations, matches, and related data. We may need to further refine the schema and add more tables or fields to accommodate additional functionalities and features mentioned in your project description. Remember to establish relationships between tables using foreign keys for data integrity and maintain proper indexing for performance optimization.