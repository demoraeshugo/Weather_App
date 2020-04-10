# React Weather App

![](http://bestanimations.com/Site/Construction/under-construction-gif-6.gif)
![](http://bestanimations.com/Site/Construction/under-construction-gif-6.gif)
![](http://bestanimations.com/Site/Construction/under-construction-gif-6.gif)
![](http://bestanimations.com/Site/Construction/under-construction-gif-6.gif)
![](http://bestanimations.com/Site/Construction/under-construction-gif-6.gif)

## Generalized Overview of Component Hierarchy
- App
  - Header
    - AutoSuggest
  - Body
    - Location
    - Current
    - Forecast

## Purpose
- Reinforce React basics 
- Learn intermediate React: 
  - Asynchronous data & functions
  - Maintaining clean state management in a more complex application
- Reinforce HTML & CSS knowledge

## Project Status as of 04.07.20

Recently discovered AWS serverless architecture. I've been adding more and more AWS feaures into this app as it progresses.  

Major changes:
  - Setup an AWS backend 
  - Using Lambda to access and S3 bucket with JSON file containing list of cities and id's which this API can use
  - JSON list is displayed as "suggestions" as a user types into the search bar

All major features are functional and in place

To Do:
  - Currently using a JSON file a fraction of the size of the intended one for dev purposes
  - Need to implement real file and look at how to optimize configurations

## Project Status as of 02.10.20

I recently learned and fell in love with AWS Amplify, the current state of my project can be seen by clicking the link above

Done:
  - Integrated continuous deployment AWS Amplify
    - NOTE: The AWS version is not fetching API data currently (Dev version is)

To Do:
  - Create Node rest API to serve private keys to front end
  - More CSS work is required
  - Current CSS is static
  - Goal is to have responsive design that matches the mobile wireframe (below)
  
## Project Status as of 12.09.19
![](https://i.imgflip.com/3iybib.gif)

Done:
  - API Data Fetching & Rendering
  - Components & Props
  
To Do:
  - CSS

## Wireframe
### Web:

![Web_Frame@2x](https://user-images.githubusercontent.com/45345315/57752356-e7682b80-76b6-11e9-97e7-e809d108e5cc.png)


### Mobile:

![Mobile_Frame@2x](https://user-images.githubusercontent.com/45345315/57752418-1aaaba80-76b7-11e9-8c91-10666129ff06.png)
