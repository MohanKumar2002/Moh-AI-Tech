
# Moh-AI Tech

Moh-AI Tech is a modern web application showcasing innovative AI solutions. It features a range of AI-powered products, a company blog, career opportunities, and an administrative dashboard for content management. The application supports both English and Tamil languages, and includes a dark/light mode theme switcher.

## Tech Stack

This project is built with a modern, robust tech stack:

-   **Framework:** Next.js (App Router)
-   **UI Library:** React
-   **Components:** ShadCN UI
-   **Styling:** Tailwind CSS
-   **AI Integration:** Genkit (for AI flows and model interaction)
-   **Language:** TypeScript

## Key Features

-   **AI-Powered Products Showcase:** Demonstrates various AI tools like Resume Builder, Smart Chatbot, Video Generator, OCR Engine, and Text Summarizer.
-   **Multilingual Support:** Toggle between English and Tamil languages across the website.
-   **Theme Toggling:** Switch between light and dark modes for optimal viewing comfort.
-   **Company Blog:** Platform for sharing insights, news, and updates.
-   **Career Listings:** Browse and learn about job openings.
-   **Contact Form:** Allows users to get in touch.
-   **User Authentication:** Secure login and registration for users.
-   **Admin Dashboard:**
    -   Protected area for administrators.
    -   Manage blog posts (CRUD operations).
    -   Manage career openings (CRUD operations).
    -   View basic site analytics.
-   **Responsive Design:** Adapts to various screen sizes for a seamless experience on desktop and mobile.
-   **Interactive Chatbot Placeholder:** Demonstrates a potential AI assistant integration.

## Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn

### Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
    *Note: Firebase Studio handles package installation automatically when `package.json` is updated.*

### Running the Application

1.  **Start the Next.js development server:**
    This runs the main application on `http://localhost:9002` (as per `package.json`).
    ```bash
    npm run dev
    ```

2.  **Start the Genkit development server (for AI features):**
    If you are working with or testing Genkit AI flows, you'll need to run the Genkit development server in a separate terminal. This typically runs on `http://localhost:3400`.
    ```bash
    npm run genkit:dev
    ```
    Or, to watch for changes in Genkit flow files:
    ```bash
    npm run genkit:watch
    ```

## Project Structure

Here's a brief overview of some important directories:

-   `src/app/`: Contains all the pages and layouts using the Next.js App Router.
    -   `src/app/admin/`: Admin-specific pages and layout.
-   `src/components/`: Reusable React components, categorized into UI, shared, features, and layout.
    -   `src/components/ui/`: ShadCN UI components.
-   `src/actions/`: Server Actions for form submissions and data mutations (e.g., auth, blog, careers).
-   `src/ai/`: Genkit related code, including flows.
    -   `src/ai/flows/`: Genkit flow definitions.
-   `src/contexts/`: React Context providers (e.g., AuthContext, LanguageContext).
-   `src/lib/`: Utility functions, constants, and mock data stores.
-   `public/`: Static assets.

## Admin Access

To access the admin dashboard:
1.  Navigate to `/login`.
2.  Use the following credentials:
    -   **Email:** `admin@mohai.tech`
    -   **Password:** `password` (or any password, as it's mocked for the `admin@mohai.tech` user in the current setup)
You will be redirected to `/admin/dashboard`.

## Available Scripts

In the `package.json`, you can find several scripts for development and building:

-   `npm run dev`: Starts the Next.js development server with Turbopack.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts a Next.js production server.
-   `npm run lint`: Runs ESLint to check for code quality issues.
-   `npm run typecheck`: Runs TypeScript compiler to check for type errors.
-   `npm run genkit:dev`: Starts the Genkit development server.
-   `npm run genkit:watch`: Starts the Genkit development server with file watching.

---

This project was initialized and developed in Firebase Studio.
