# Transact Code Project

## Overview

Transact Code is a blockchain-based platform that allows users to buy and sell software projects securely. The project utilizes a combination of SmartPy (blockchain), React.js (frontend), and Django (backend) technologies to create a seamless experience for users.

## Project Flow

### Home Page

The home page serves as the main entry point for users. It features a grid layout displaying projects available for sale, each represented by images provided by the sellers. The following elements are present on the home page:

- **Grid of Projects:** Displaying images, project names, and prices.
- **Login Button:** Allows users to log in using their Temple Wallet account.

### User Authentication

- **Login:** Users can log in using their Temple Wallet account.
- **Seller Form:** After logging in, sellers can fill out a form with details such as name, email, project name, project images, GitHub link, and the project's compressed file.
- **Profile Creation:** Seller profiles are created with basic details and a list of uploaded projects.

### Profile Section

The profile section provides an overview of the user's account:

- **Basic Details:** User information.
- **Uploaded Projects:** List of projects uploaded for selling.
- **Sold Projects:** Information on projects that have been sold.
- **Total Income:** Sum of income generated from sales.

### Project Details Page

Clicking on a project card/grid on the home page opens a detailed view, including:

- **Project Images:** Slideshow of project images.
- **Project Name, Description, and Price:** Key details about the project.
- **Buy Now Option:** Allows buyers to initiate the purchase process.

### IPFS Integration with Pinata

- **Compressed File Submission:** Sellers submit project compressed files.
- **IPFS Storage:** Files are stored on IPFS using Pinata.
- **Link Generation:** Sellers receive a link in return.
- **Purchase Process:** Buyers provide the required Tez and receive a link to access the purchased project.

### Project Selling

- **Multiple Sales:** Projects can be sold multiple times.
- **Sorting:** Newer projects appear at the top of the home page, while older ones move to the bottom.

