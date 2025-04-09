# Project Overview

Welcome to our React Frontend project. This repository contains the application code along with a dedicated `redux` folder, which houses the core logic for API interactions and state management.

## Folder Structure


## Key Areas of Development

- **API Integration:**  
  The `redux/api` folder contains files (`subscriptionApi.js`, `fetchMoviesApi.js`, `auth.js`, and `account.js`) responsible for calling external APIs and structuring responses. Please refer to the inline comments and function documentation for how these modules interact with the backend.

- **State Management:**  
  The `redux/slice` folder uses Redux Toolkit slices (e.g., `authSlice.js`, `moviesSlice.js`, `subscriptionSlice.js`, and `accountSlice.js`) to manage state. These slices update state values for various React components such as `movieCard.js`, `profile.js`, and `DynamicBanner.js`.

## Getting Started

1. **Install Dependencies:**  
   Run the following command in the project root:
   ```bash
   npm install
   
2.  **Development Server:**  
    To start the development server:

    npm start

**Best Practices:**  
Use descriptive commit messages.

Work primarily in feature branches and open pull requests for merging changes.

Keep API interactions and state updates modular.

Update inline documentation as needed.

Run tests locally before submitting pull requests.
