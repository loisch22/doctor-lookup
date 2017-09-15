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

_I want to gain a better understanding of how to get values from an API. I was able to get the values that were in the 'profile' key, but all else gave me undefined or cause my application to break. (See 'known bugs' for more details)._


## Known Bugs

_Search by doctors name started to return empty array after including this commented out code:
```
$("#doctors-result table").append("<br>" + "Address: " + body.data[i].practices.visit_address.street + "<br>" + body.data[i].practices.visit_address.city + ", " + body.data[i].practices.visit_address.state + " " + body.data[i].practices.visist_address.zip + "<br>" + "Phone number: " + body.data[i].phones.number + "<br>" + "Website: " + body.data[i].practices.website + "<br>" + "<p>Accepts new patients: " + body.data[i].practices.accepts_new_patients + "<br>");
```
_


## Technologies Used

_API, JavaScript, gulp, jQuery_

### License

*MIT License*

Copyright (c) 2017 **_Lois Choi_**
