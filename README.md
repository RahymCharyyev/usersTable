This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that fetches user data from an API and displays it in a paginated table with the ability to view user details in a modal. Below are the steps for setting up and running the code:

### Prerequisites
Before you begin, ensure you have the following prerequisites installed:

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Setup Instructions

1. **Clone the Repository**

   Clone the repository containing the code to your local machine.

   ```bash
   git clone https://github.com/RahymCharyyev/usersTable.git
   cd usersTable
   ```

2. **Install Dependencies**

   Install the project dependencies using yarn.

   ```bash
   yarn 
   ```

3. **Environment Variables**

   Create an environment variable file (`.env.local`) in the project root directory and define the `NEXT_PUBLIC_API_BASE_URL` variable. This variable should point to the base URL of the API you are using to fetch user data. For example:

   ```
   NEXT_PUBLIC_API_BASE_URL= https://reqres.in
   ```

4. **Start the Development Server**

   Start the development server to run the React application.

   ```bash
   yarn dev
   ```

   This will start the application on `http://localhost:3000`.

5. **Access the Application**

   Open a web browser and navigate to `http://localhost:3000` to access the application.


6. **Deployed Version**
   You can find a deployed version of this project on Vercel. It's accessible at the following URL: https://users-table-ten.vercel.app/

   Deployed Version on [Vercel](https://users-table-ten.vercel.app/).

### High-Level Descriptions

1. **Project Structure**

   The codebase is structured into components and modules. Key components and modules include:
   
   - `Pagination`: A reusable pagination component for navigating between pages of user data.
   - `UserList`: The main component responsible for fetching user data, displaying it in a table, and handling pagination.
   - `TableHead` and `TableBody`: Components for rendering the table headers and table rows, respectively.
   - `UserInfo` and `UserModal`: Components for displaying user details and a user details modal.
   - `fetchUsers`: A function for making API requests to fetch user data.

2. **Routing and Pagination**

   The code uses the Next.js `useRouter` hook from Pages Router for routing and handles pagination by modifying the URL query parameter `page`.

3. **API Integration**

   The `fetchUsers` function uses Axios to make GET requests to an API endpoint for fetching user data. The API base URL is defined as an environment variable.

4. **Component Styling**

   The code uses CSS classes and styles for component styling, and it also uses tailwind.css for responsive design and utility classes.

5. **Error Handling**

   The code handles API request errors and displays appropriate error messages when data cannot be fetched.

6. **Modal for User Details**

   User details can be viewed by clicking on a user row in the table, which opens a modal with detailed user information.

7. **Pagination Logic**

   Pagination logic calculates the total number of pages based on the number of users fetched from the API. It ensures that users can navigate through the pages of user data.




