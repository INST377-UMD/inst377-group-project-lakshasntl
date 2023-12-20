### Installation and Dependencies:

1. **Clone the Repository:**
   - Go to the repository page and click on the "Code" button.
   - Copy the repository URL.
   - Open your terminal and navigate to the directory where you want to clone the repository.
   - Use the command `git clone <repository_URL>` to clone the repository.

2. **Install Node Version Manager (NVM):**
   - Install Node.js and NPM using Node Version Manager (NVM) for managing Node versions.
   - Command: `npm install -g nvm`
   - Follow the instructions from the NVM documentation to install a specific Node.js version.

3. **Install Express:**
   - Use NPM to install Express in your project directory.
   - Command: `npm install express`

4. **Install Nodemon:**
   - Install Nodemon to automatically restart the server on file changes (for development).
   - Command: `npm install nodemon`

5. **Install Supabase Package:**
   - Install the Supabase package for interacting with Supabase services.
   - Command: `npm install @supabase/supabase-js`

### Running the Application:

1. **Start the Server:**
   - Launch the server using the appropriate command.
   - Command: `npm start` or any other specific command if different.

2. **Access the Application:**
   - Open your web browser and navigate to `http://localhost:4000` to access the application running locally.

### API Documentation:

1. **Get Book Cover URL Pattern:**
   - **Endpoint:** `https://covers.openlibrary.org/a/$key/$value-$size.jpg`
   - **Description:** Retrieves book covers based on the provided book name key.
   - **Parameters:**
     - `$key`: Any one of ISBN, OCLC, LCCN, OLID, or ID (case-insensitive).
     - `$value`: Value corresponding to the chosen key.
     - `$size`: S (small), M (medium), or L (large) for different cover sizes.

2. **Get Books within Certain Subjects:**
   - **Endpoint:** `https://openlibrary.org/subjects/${subject}.json`
   - **Description:** Retrieves a list of books under specific subjects/genres.
   - **Parameters:**
     - `${subject}`: Subject/genre name.

3. **Get Books User is Currently Reading:**
   - **Endpoint:** `https://openlibrary.org/people/${userName}/books/currently-reading.json`
   - **Description:** Retrieves books recently read by the logged-in user.

### Running Tests:

- Tests included in the repository respond when data retrieval from the API or Supabase database fails. Check the console for error codes and helpful descriptions if data retrieval issues occur.

### Known Bugs and Future Development Expectations
- While the current version of the application is functional, there are identified areas for improvement and known issues:

1. **Explore Page CSS Enhancement:**
Objective: Enhance the visual appeal and thematic experience.
Description: Implement CSS adjustments on the Explore page to create a background resembling a bookshelf. This visual enhancement aims to immerse users in a more thematic browsing experience.
2. **Personalized Features for User Pages:**
Objective: Improve user engagement and UI experience.
Description: Introduce personalized features on the Home, Bookshelf, and Explore pages. Tailoring the user interface based on individual preferences can significantly elevate user experience and engagement.
3. **Bookshelf.js Functionality Upgrade:**
Objective: Streamline book list management for users.
Description: Enhance the functionality of the bookshelf.js file to simplify the process of creating and updating book lists. A more intuitive interface for managing book lists will empower users to organize their reading preferences effortlessly.
4. **Explore Page Book Cover Fetching Issue:**
Issue: Inconsistencies fetching book covers on the Explore page.
Description: There are occasional instances where the Explore page encounters difficulties fetching book covers for certain titles, resulting in blank spaces. Investigations are ongoing to resolve this intermittent issue.

### Roadmap for Future Development

Moving forward, the project roadmap focuses on iterative improvements and feature expansions to enrich the user experience. The proposed enhancements are as follows:

**Sprint 1 (Next 4 Weeks):**
Implement CSS enhancements on the Explore page for a bookshelf-themed background.
Conduct user feedback sessions to gather insights for personalized UI features.

**Sprint 2 (Following 6 Weeks):**
Roll out personalized features on Home, Bookshelf, and Explore pages based on collected feedback.
Begin restructuring bookshelf.js to simplify book list management.

**Sprint 3 (Upcoming 8 Weeks):**
Finalize Explore page CSS adjustments.
Address the intermittent book cover fetching issue on the Explore page.