# _Doctor Finder_

#### _An application that allows users to search for a doctor. September 15, 2017_

#### By _**Lois Choi**_

## Description

_This application allows users to search for a doctor in their city base on their medical issue(s) and by the doctors' name. The doctors information shown are the doctor's: first/last name, address, phone number, and whether they are accepting new patients._

## User Story Specifications (BDD)
_1. Download github repository: <a>https://github.com/loisch22/doctor-lookup.git</a>_
_2. Sign up to get API key from: <a>https://developer.betterdoctor_


## User Story Specifications (BDD)

| Behavior | Input | Output |
| :---         |     :---:      |          ---: |
| 1. User enters medical issue and the application will return a list of doctors who treat it. | 'Toothache' | List of doctors that treat this |
| 2. User can search a doctor by name | 'Jason' | All doctors named 'Jason' |
| 3. Doctors information should include his/her full name, address, phone number, accepting new patients | Click 'Jason' | View 'Jason' results |
| 4. If there is an error, an error message is shown | 'Search' | 'Sorry there was an error while processing your information. Please try again.' |
| 5. User is notified if no doctors match their search criteria | 'dance syndrome' | 'Sorry there are no doctors that match your search criteria.' |
| 6. User enters age and receives Jupiter years | 1 | 4,329 (actual 4328.9) |


## Exentensions/Wish list

_I would want to work on making this application more accurate, meaning I would want it to consider how many days each month has and incorporate that into the calculation._

_Have users enter which country they are from to get the average age for that country. Then give a more "accurate" prediction on their life expectancy on different planets._

## Known Bugs

_No known bugs_


## Technologies Used

_API, JavaScript, gulp, jQuery_

### License

*MIT License*

Copyright (c) 2017 **_Lois Choi_**
