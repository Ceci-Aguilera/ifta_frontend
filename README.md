<div style="text-align:center">

 ![IFTA ya LOGO](/public/logos/ifta-logo-dark.svg)

 # IFTA ya!

![Python version](https://img.shields.io/badge/NEXT_js-12.1.0-green) ![Flask version](https://img.shields.io/badge/npm-6.14.15-green) ![PostgreSQL version](https://img.shields.io/badge/PostgreSQL-12.8-green) ![Commit activity](https://img.shields.io/github/commit-activity/y/Ceci-Aguilera/ifta_flask_backend_api/master)

</div>

## Table of Contents

1. [Description (What, Why, and How?)](#frontend)
1. [Testing with Docker](#docker)
1. [Installation](#installation)
1. [Screenshots of the Frontend Next js App](#screenshots_frontend)
1. [Screenshots of the Flutter (Android + IOS) App](#screenshots_flutter)



## Description

- ### What is IFTA ya! ?

 __IFTA ya!__ is a __fast__, __simple__, and __secure__ solution for calculating and reporting IFTA Taxes. It aims to help truck owners to keep their IFTA Tax Reports up to date while in the highway or office. There is no need to pass information to third-party companies as __IFTA ya!__ has all the tools needed to fast store the information, analyze it, calculate the taxes, and create accurate reports for each truck and quarter. It also allows truck owners to manage their fleets, active drivers, and trucks.

- ### What inspired IFTA ya! ?
The IFTA Tax Report of a truck have to be calculated and reported every 3 month by the truck's owner. To do so, the truck driver (which can be the truck owner or not) has to keep all the billing information about the fuel gas added to the truck as well as all the miles traveled. This information is then given to the truck owner, and then to a Tax specialist or to an expensive Tax software company. In this process, the driver can lose days searching for the bills that are often lost, and miles are not accurate reported. Therefore, the need for an alternative, in this case, __IFTA ya!__

- ### How does IFTA ya! work ?

<div style="text-align:center">

![Flutter](./public/images/Flutter.png)  ![Plus](./public/icons/plus-solid.png) ![Flask](./public/images/Flask.png) ![Plus](./public/icons/plus-solid.png) ![Flask](./public/images/Next_js.png)

</div>

__IFTA ya!__  has 3 main apps: a Next js Frontend app (this repo), a Flask Backend API (where most of the logic and calculations occur), and a Flutter app for both Android and IOS devices (that is used for the truck driver, possibly the owner operator, to input new Entries when adding Fuel or recording Miles).


__LINKS TO THE REPOSITORIES:__
- [NEXT js Frontend of IFTA ya!](https://github.com/Ceci-Aguilera/ifta_frontend) (This repo)
- [Flask Backend API of IFTA ya!](https://github.com/Ceci-Aguilera/ifta_flask_backend_api)
- The Flutter application is kept ina private repository, however screenshots of it can be found at the section [Screenshots of the Flutter (Android + IOS) App](#screenshots_flutter)


#### How do the 3 apps work together?

When an owner operator creates an account, it is possible to administrate  all the trucks, drivers, payments, and reports from the __Next js App__. The first step after registration is creating a Truck and a Driver to manage it (possibly, the owner operator itself). Then, the driver must download the __Flutter__ app from the Google Play Store (for Android) or the App Store (For IOS). The application should be used by drivers to register the amount and price of the Fuel Gallons added and amount of Miles driven. Then the __Flask__ Backend finds the quarter (based on the date) and the Tax for the fuel in each state, and with this information, it calculates and updates the IFTA Tax Report for each state visited by the driver in the truck. These changes can be visualized in the __Next js__ App by the owner of the truck. This means that if a client has 10 trucks, he can assign a Driver to each of them, and each driver then downloads the __Flutter__ app and keeps the IFTA Tax Report for the truck up to date without the client (owner of the truck) needing to do it himself.

When a driver logs in into the __Flutter__ app, the app tries to find the truck that was assigned to him by the owner operator. Therefore, each time the driver adds fuel gallons or miles, it is not needed to specify the truck that is driving, as it has been already configured. To change the current driver the owner operator can go to the __Next js__ App. Note that this method guarantees that even if a truck has multiple drivers in a quarter, its taxes can be easily deduced.

#### Notes about IFTA Taxes:

- An owner operator is a Truck driver that owns a truck.
- An owner operator can have multiple trucks and drive only one.
- A different IFTA Tax Report is presented for each truck that a client owns, that is, if a client has 10 trucks, then each truck has its own IFTA Tax Report that is independent of the others.
- Drivers do not have to present the IFTA Tax Report, as this is only a responsibility of the truck owner.
- To understand how IFTA Taxes are calculated and reported visit this [Link](https://onswitchboard.com/blog/easiest-way-to-calculate-ifta/). In reality, taxes are a bit more difficult to calculate and report as each state has its own standards and rules, however the previous link resumes the core of IFTA Taxes for a first approach.



---


<a name="docker"></a>
### Quick Installation with Docker

1. Clone the repo:

   ```bash
   git clone https://github.com/Ceci-Aguilera/ifta_frontend.git
   ```

1. Install Docker and Docker Compose

1. Configure the environment variables: Create an .env.local file inside the root folder and set up the following environment variables:

   ```text
    NEXT_PUBLIC_API_DOMAIN_NAME (The url of the backend, for example, https://backend_api.com/)
   ```

1. Run the command:

   ```bash
   docker-compose up --build
   ```

1. Congratulations =) !!! the app should be running in [localhost:3000](http://localhost:3000)

---

<a name="installation"></a>

### Custom Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/Ceci-Aguilera/ifta_frontend.git
   ```

1. Install dependencies:

   ```bash
   npm install
   ```

1. Configure the environment variables: Create an .env.local file inside the root folder and set up the following environment variables:

   ```text
    NEXT_PUBLIC_API_DOMAIN_NAME (The url of the backend, for example, https://backend_api.com/)
   ```

1. Run the app

   ```bash
   npx next dev
   ```

1. Congratulations =) !!! the app should be running in [localhost:3000](http://localhost:3000)

---

<a name="screenshots_frontend"></a>

### Screenshots of Selected Pages of the Frontend NEXT JS App

#### Mobile View

<div style="text-align:center">

![alt text](./screenshots/Start_Mobile.png) ![alt text](./screenshots/Features.png) ![alt text](./screenshots/Need_More_Mobile.png)

</div>

<div style="text-align:center">

![alt text](./screenshots/Account_Info_Mobile.png) ![alt text](./screenshots/Truck_Info_Mobile.png) ![alt text](./screenshots/Quarters_Mobile.png)

</div>
---

#### Desktop

##### View of the Landing Page

![alt text](./screenshots/Landing_Website.png)

---

##### View of the Account Information Page

![alt text](./screenshots/Account_Info.png)

---

##### View of the Drivers Information Page when Modal is open

![alt text](./screenshots/New_Driver.png)

---

##### View of the Quarters Resume Page for selected Truck

![alt text](./screenshots/Quarters.png)

---

<a name="screenshots_flutter"></a>

### Screenshots of the Flutter (Android + IOS) App

<div style="text-align:center">

![alt text](./screenshots/Flutter_Landing.png) ![alt text](./screenshots/Flutter_Fueling.png) ![alt text](./screenshots/Flutter_Miles.png)

</div>

<div style="text-align:center">

![alt text](./screenshots/Flutter_Quarters.png) ![alt text](./screenshots/Flutter_Selected_Quarter.png) ![alt text](./screenshots/Flutter_Selected_Quarter_State.png)

</div>