# Star Stream

![Alt Text](https://media.giphy.com/media/tIwmTQ64D52XTuL8xd/giphy.gif)

## 💡 Inspiration

For thousands of years, people from every part of the world have been studying the stars. Ancient Egyptians and Babylonians to notable astronomers like Galileo and Carl Sagan have looked to the stars to try and understand our place in the universe and how it all works.
The hundreds of objects that have been seen in the night sky since ancient times, like planets, stars, and galaxies, have given people the foundation to research and learn. Today's Astronomers would not know as much as they do without the study of these objects. But with light pollution increasing at a rate twice as fast as the world's population, dimmer objects are vanishing from our view and studying astronomy, as an amateur or professional, is getting harder.

Hence, we wished to create an application where anyone can see all the shining stars that surround them, without these barriers that exist today! Stargazing, right from the comfort of your home!

![Alt Text](https://media.giphy.com/media/l3E6IlIx5f9nVjd84/giphy.gif)

<hr/><br/>

## 💻 What it does

It's a 3D environment where a user can see all the stars revolving around the earth in real-time. It also gives out more information about stars like their name, distance from earth, star's ID in the Henry Draper, star's ID in the Harvard Revised.

<hr/><br/>

## 🔨 How we built it

We built the frontend using react.js and three.js.
The backend API is created by using Google cloud services like cloud function, cloud storage and API-gateway.
We are using the stars data from astronexus.com/hyg

### StarStream API

This API provides data from [astronexus.com/hyg](astronexus.com/hyg)

API endpoint: [https://starstream-api-gateway-b2dzz7qh.uc.gateway.dev/min-data](https://starstream-api-gateway-b2dzz7qh.uc.gateway.dev/min-data)

- this data is stored in Google Cloud Storage
- then cloud function reads that data and apply transformation on the data
- Cloud function's open API endpoint is then passed to GCP API Gateway tool to secure that connection and to easily update the API endpoints by using config files

### API parameters

Following parameters are available for the API

- count -> Integer
  - Number of star's data returned

- sort_by -> String
  - Sort the data by any specific field
  - the current available fields are
    -['hd', 'hr', 'proper', 'dist', 'mag', 'absmag', 'x', 'y', 'z']

- ascending -> Boolean
  - Set if the sort_by should be ascending or descending
  - 1 for ascending and 0 for descending

- csv -> Boolean
  - Change the output format from json to csv

### Example

[[gateway]/min-data?count=10&sort_by=id&ascending=0&csv=1](https://starstream-api-gateway-b2dzz7qh.uc.gateway.dev/min-data?count=10&sort_by=id&ascending=0&csv=1)

This would return first 10 stars sorted by id in descending order and in csv format

### FrontEnd

We then use three.js to show the stars in a first person view with the data from the API

<hr/><br/>

## ⛅ Use of Google Cloud

- We built Star Stream's backend API with Google Cloud's cloud function and which takes the csv file data from cloud storage and then the function's open endpoint to API-gateway to easily update by using yaml config files. We chose this because we wanted to make an application that was very very secure.
- Cloud Storage to store the csv data
- Cloud function to convert that csv data to json and to transform the data on the basis of parameters passed to the API gateway
- API Gateway to secure and monitor our API gateways

<hr/><br/>

## 🧠 Challenges we ran into

The biggest challenge was to render the 3D model as none of our team member has worked with three js before.
But we tacked this problem by going through tutorials and documentations and by taking help and advices from the mentors.

<hr/><br/>

## 🏅 Accomplishments that we're proud of

Creating and publishing a live interactive site using three.js and creating a working API using Google Cloud Platform and also completing the project under the given time frame.

<hr/><br/>

## 📖 What we learned

Working with three js and using google cloud services like Cloud storage, Cloud functions and API gateway.

<hr/><br/>

## 🚀 What's next for Star Stream

- Add Virtual Reality (VR) functionality so users could completely submerse into the experience of eStarGazing
- Add Augmented Reality(AR) functionality so when users click the stars they get an option  to view that star's 3d model in AR
- Add more subjects and Customized 3D model so more stars could support AR
- Live location star gazing, by using the user's location and doing some Maths to check which stars would be visible from that region and then showing the stars
- Improve that live location feature and allow users to change their location from the app and see stars from various famous places without going through the hassle of travelling
- Add premium subscription with more features

And a lot of other features!

![Alt Text](https://media.giphy.com/media/5OaDrNrPGWJ9R1h7mf/giphy.gif)
