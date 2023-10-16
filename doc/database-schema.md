#TLDR 
For the Hurmos-app to work, we need database to hold information for the usage of the matchmaking tool, calendar game-event details like participants, and business-analythics. In the beginning, we will provide only the matchmaking possibility using user-data, playerProfile-data, sport-data, and calendar data. By combining that data, we can create information about a player in the queue for the matchmaking tool. After a match is created, we will inform the participants about it, and store the data in a matches table, to which we update the information about the participants as they provide "yes" and "no" calls. Note that you may need to expand and refine this schema based on the actual requirements and functionalities of your application.

# Database Schema README

## Overview

This README provides an overview of the database schema used in the project. The schema defines the structure of the database, including tables, relationships, and data types.

## Database Schema

The database consists of several tables that are interconnected to store information about users, matches, player profiles, match statuses, player skills, and sports. Here's an overview of the tables:

1. **Match_players Table**
  - Stores information about players in matches.
  - Columns:
    - player_id (Primary Key, FK from Player_profiles) 
      - Matchmaking
    - match_id (Primary Key, FK from Matches)
      - MatchMaking
    - team_number 
      - Matchmaking 
    - status_coming
      - Default 0, pre-event actions
    - rating_friendliness
      - Default 5, after-event actions

2. **Match_statuses Table**
  - Stores information about match statuses.
  - Columns:
    - id (Primary Key)
      - Generated
    - delay_amount
      - Default 0, pre-event actions
    - has_ended
      - Default FALSE, after-event actions

3. **Matches Table**
  - Stores information about matches.
  - Columns:
    - id (Primary Key)
      - Generated 
    - start_time
      - Matchmaking
    - end_time
      - Matchmaking
    - winner_team
      - After-event actions
    - sport_id (FK to Sports)
      - Matchmaking
    - match_status_id (Foreign Key to Match_statuses)
      - Matchmaking
     

4. **Passwords Table**
  - Stores password-related information for users.
  - Columns:
    - id (Primary Key)
      - Generated at initialization phase
    - accesstoken_google
      - google oauth2
    

5. **Player_profiles Table**
  - Stores player profiles.
  - Columns:
    - id (Primary Key)
      - Generated
    - skill_range
      - Default 1500, cloud-function based on After-event action


6. **Player_skills Table**
  - Stores information about player skills in different sports.
  - Columns:
    - player_id (Primary Key, Foreign Key to Player_profiles)
      - Input from user UI at initialization phase 
    - sport_id (Primary Key, Foreign Key to Sports)
      - Input from user UI at initalization phase
    - skill_level
      - Input from user UI

7. **Sports Table**
  - Stores information about sports.
  - Columns:
    - id (Primary Key)
      - Generated 
    - team_amount
      - manual input from users
    - team_size
      - manual input from users

8. **Users Table**
  - Stores user-related information.
  - Columns:
    - id (Primary Key)
      - Google generated
    - email
      - oauth2 at initialization phase
    - home_location (stored as JSON)
      - Input from user UI at initialization phase
    - created_at
      - Google generated/cloud function
    - password_id (Foreign Key to Passwords)
      - Generated at initialization phase

## Database Structure

The database uses primary keys and foreign keys to establish relationships between tables. Ensure that data integrity is maintained when inserting or updating records. The 'home_location' column in the 'Users' table is stored as JSON data.

## Data Sources

The data in this database can be sourced from various channels, including user registrations, match entries, and skill level updates. Ensure that data is validated and stored securely.

## Contribute

If you need to make changes to the database schema, update this documentation accordingly to reflect the changes.

## License

This database schema is provided under the terms of the [LICENSE NAME] license.

## Contact

If you have any questions or need further assistance, please contact [Your Name] at [Your Email Address].
