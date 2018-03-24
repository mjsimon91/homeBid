# Home Bid

## Descritption
Home Bid is an application to sell and bid on homes with no initial bid. Home seller receives notifications on bids and chooses best bid based on price and terms.

## Key Features

## UI Mockups
There are three man pages that a user can interact with:

### 1) Home page

### 2) View listings pages

### 3) Profile page

## Architecture Diagram
├── config
│   └── config.json
├── models
│   ├── bids.js
│   ├── chatRoom.js
│   ├── homes.js
│   ├── index.js
│   ├── members.js
│   ├── messages.js
│   └── seedData.sql
├── public
│   ├── assets  
│   ├── css
│   │   ├── Images
│   │   │   └── home.jpeg
│   │   └── style.css
│   └── js
│       ├── createListing.js
│       ├── initModal.js
│       ├── placeBid.js
│       └── profile.js
├── routes
│   ├── bids-api-routes.js
│   ├── html-routes.js
│   ├── listings-api-routes.js
│   ├── members-api-routes.js
│   └── messages-api-routes.js
├── server.js
└── views
    ├── conversation.handlebars
    ├── createListing.handlebars
    ├── home.handlebars
    ├── layouts
    │   └── main.handlebars
    ├── partials
    │   ├── menu
    │   │   └── profile-menu-block.handlebars
    │   ├── nav
    │   │   └── nav-block.handlebars
    │   └── profile
    │       ├── bids.handlebars
    │       ├── conversation.handlebars
    │       ├── listing.handlebars
    │       └── messages.handlebars
    ├── profile.handlebars
    ├── profileBids.handlebars
    ├── profileListings.handlebars
    ├── profileMessages.handlebars
    └── viewListings.handlebars

## Database


## Technology Used


## Getting Started

## Team Members
Ali Kassam
Jean Tzintzun
Matthew Simon
Michael Bychkowski
