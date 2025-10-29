# Movie Management Web Application

## Overview

The Movie Management Web Application allows users to explore, manage, and personalize movie data fetched from the TMDB API. Users can authenticate, browse a list of movies, filter and sort them, view movie details, and manage their favorite movies. The application includes a user profile page where users can personalize their "Watch Next" list and favorite movies. The app utilizes modern web development technologies such as React, Redux, Tailwind CSS, and localStorage for persistent data.

---

## Features

### Core Features

- **Authentication**  
  - Users can log in and sign up using localStorage for persistence.  
  - Protected routes ensure only authenticated users can access certain pages.  
  - Logout functionality clears user data.

- **Routing**  
  - React Router for navigation across different pages:  
    - `/login` - Login page  
    - `/signup` - Signup page  
    - `/movies` - Movie list page  
    - `/movies/:id` - Movie details page  
    - `/profile` - User profile page  
    - `/404` - Page not found  

- **Movie Data**  
  - Movie data is fetched from the [TMDB API](https://api.themoviedb.org/3/).  
  - Movie information is stored in localStorage and persists even after logout.

- **Movie List**  
  - Users can filter movies by Genre and Rating.  
  - Sorting options: Title, Year, and Rating.  
  - Redux state management for global movie data.

- **Movie Details Page**  
  - Displays full movie information.  
  - Includes a carousel for displaying multiple movie posters.

- **User Profile**  
  - Users can edit their favorite movies.  
  - Users can reorder their "Watch Next" list.  
  - Changes are saved in localStorage.

- **Responsive UI**  
  - Modern UI built with Tailwind CSS.  
  - Smooth user experience with responsive design for various devices.

- **Error Handling**  
  - Handles invalid login attempts.  
  - Displays a fallback message for missing movies or broken images.

### Bonus / Optional Features

- **Search Bar**  
  - Live movie lookup using OMDb API for searching movies.

- **Pagination or Infinite Scroll**  
  - Implement pagination or infinite scrolling on the movie list page.

- **Theme Switcher**  
  - Dark/light mode toggle for the user interface.

- **Recently Viewed**  
  - Section on the Profile page displaying movies recently viewed by the user.

---

## Tech Stack

- **Frontend**  
  - React.js  
  - Redux (for state management)  
  - React Router (for routing)  
  - Tailwind CSS (for UI styling)  
  - Framer Motion (for animations, optional)  

- **Backend (API)**  
  - OMDb API (for movie data)

- **Storage**  
  - localStorage (for user data and movie information persistence)

---

## Folder Structure

src
├── app
│ └── store.js # Redux store configuration
├── assets # Images and other assets
├── components
│ ├── FavoriteMoviesList.jsx # Displays the list of favorite movies
│ ├── MovieCards.jsx # Individual movie card component
│ ├── MovieImageCarousel.jsx # Carousel for movie posters
│ └── Navbar.jsx # Navigation bar
| └── RecentlyViewMovieCard.jsx # RecentlyViewMovieCard  
├── pages
│ ├── Login.jsx # Login page
│ ├── MovieDetails.jsx # Movie details page
│ ├── MovieListPage.jsx # Movie list page
│ ├── Movies.jsx # Main movies page
│ ├── Profile.jsx # User profile page
│ └── SignUp.jsx # Sign up page
├── privateRoute
│ └── PrivateRoute.jsx # Protects routes from unauthorized users
├── redux
│ ├── addToFav
│ │ └── addToFavSlice.js # Redux slice for managing favorite movies
│ ├── auth
│ │ └── authSlice.js # Redux slice for managing authentication state
│ ├── movieDetails
│ │ ├── movieDetailApi.js # API calls for movie details
│ │ └── movieDetailSlice.js # Redux slice for movie details state
│ └── movies
│ ├── movieApi.js # API calls for fetching movies
│ └── movieSlice.js # Redux slice for managing movie data
├── app.css # Global CSS for styling
├── app.jsx # Main React component
├── index.css # Global index styles
└── main.jsx # Entry point for the React app


---

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (version 14.x or later)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>


Install dependencies:

npm install


Start the application:

npm run dev 


This will launch the app at http://localhost:5173/
