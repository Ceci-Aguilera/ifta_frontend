# IFTA YA! ![IFTA YA LOGO](/public/logos/ifta-logo-dark.svg)

## Table of Contents

1. [Brief Introduction and Basic Workflow of the Website](#frontend)
1. [Quick Installation for testing using Docker](#docker)
1. [Custom Installation](#installation)
1. [Screenshots of the Frontend React App](#screenshots_frontend)


<a name="docker"></a>

### Brief Introduction and Basic Workflow of the Website

#### Introduction

__IFTA YA!__ is a website that helps owner operators (Truck drivers that own their truck) to have a fast, simple, and secure way of keeping their IFTA taxes up to date. To do so, this project has 3 main apps: a Next js Frontend (this repo), A Flask Backend API (where most of the logic and calculations occur), and a Flutter app for both Android and IOS devices (that is used for the Truck Driver to input new Entries when adding Fuel or Recording Miles).

 There are two kind of clients, those owner operators that have only one truck (the one that they drive), and those owner operators that have multiple trucks and drive one of them. The __IFTA YA!__ project targets the clients of the first kind, however it offers lots of features and accommodations for the second kind clients as well.

#### How do the 3 apps work together?

__Notes about IFTA Taxes:__ 
- An owner operator is a Truck driver that owns a truck.
- An owner operator can have multiple trucks and drive only one.
- A different IFTA Taxes Report is presented for each truck that a client owns, that is, if a client has 10 trucks, then each truck has its own IFTA Taxes Report that is independent of the other trucks and how they manage their IFTA Taxes.
- Drivers do not have to present the IFTA Taxes Report, as this is only a responsibility of the truck owner.
- To understand how IFTA Taxes are calculated and reported visit this [Link](https://onswitchboard.com/blog/easiest-way-to-calculate-ifta/). In reality, taxes are a bit more difficult to calculate and report as each state has its own standards and rules, however the previous link resumes the core of IFTA Taxes for a first approach.

When an owner operator creates an account, he administrate from the Next js App all his trucks, drivers, payments, and reports. The first step after registration is creating a Truck and a Driver to manage it (possibly, the owner operator itself). Then, the driver must download the app from the Google Play Store (for Android) or the App Store (For IOS). The application should be used by drivers to register the amount and price of the Fuel Gallons added and amount of Miles driven. Then the Flask Backend finds the quarter (based on the date) and the Tax for the fuel in each state, and with this information, it calculates and updates the IFTA taxes for each state visited by the driver in the truck. These changes can be visualized in the Next js App by the owner of the truck. This means that if a client has 10 trucks, he can give each of them a driver and each driver then downloads the Flutter app and keeps the IFTA taxes for the truck up to date without the client needing to do it himself.

When a driver logs into the Flutter app, the app tries to find the truck that was assigned to by the owner operator. Therefore, each time the driver adds fuel gallons or miles, it is not needed to specify the truck that is driving, as it has be already configured. To change the current driver the owner operator can go to the Next js App. Note that this method guarantees that even if a truck has multiple drivers in a quarter, its taxes can be easily deduced.





<a name="docker"></a>
### Quick Installation for testing using Docker

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


<a name="screenshots_frontend"></a>

### Screenshots of Selected Pages of the Frontend NEXT JS App

#### Mobile View

![alt text](./screenshots/Start_Mobile.png) ![alt text](./screenshots/Features.png) ![alt text](./screenshots/Need_More_Mobile.png)

![alt text](./screenshots/Account_Info_Mobile.png) ![alt text](./screenshots/Truck_Info_Mobile.png) ![alt text](./screenshots/Quarters_Mobile.png)

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


