# Simple NextJS Blog

![product-screenshot]

## Overview

**Simple NextJS Blog** is a blog application built with **Next.js**, **React**, and **MobX**. It allows users to view, add, edit, and delete blog posts. The application features a modern UI with glassmorphism effects, optimized for performance and accessibility.

### Key Features

- **Responsive Design**: Built using Next.js and Tailwind CSS for a fast, flexible, and modern user experience.
- **CRUD Operations**: Create, edit, and delete posts easily.
- **Local Storage Simulation**: Posts are stored in local storage for persistence (mocked data).
- **Modern UI Effects**: Incorporates glassmorphism and hover effects for an appealing aesthetic.
- **Animations**: Utilizes Framer Motion for smooth transitions and animations.

### Installation Guide

To set up the application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/0x5un5h1n3/simple-nextjs-blog.git
   cd simple-nextjs-blog
   ```

2. **Install dependencies for the Next.js app**:

   ```bash
   npm install
   ```

3. **Navigate to the GraphQL server folder (if applicable)**:

   ```bash
   cd graphql-server
   ```

4. **Install dependencies for the GraphQL server**:

   ```bash
   npm install
   ```

5. **Start the GraphQL server**:

   ```bash
   node server.js
   ```

6. **Navigate back to the Next.js app folder**:

   ```bash
   cd ..
   ```

7. **Start the Next.js application**:

   ```bash
   npm run dev
   ```

8. Open your browser and navigate to `http://localhost:3000`.

### Usage

- Navigate to the homepage to view all blog posts.
- Click "Add Post" to create a new blog entry.
- Use the "Read More" link on each post to view its details.
- Edit or delete posts as needed.

### Technologies Used

- **Next.js**: For server-side rendering and routing.
- **React**: For building user interfaces.
- **MobX**: For state management.
- **Tailwind CSS**: For styling and responsive design.
- **Framer Motion**: For animations and smooth transitions.

### Testing

Basic unit tests are written using Jest and React Testing Library to ensure components render correctly and perform essential functions.

### Performance Optimization

The application follows best practices such as lazy loading images, memoizing components, and code splitting with dynamic imports.

### Version Control & Collaboration

This project uses Git for version control. Regular commits demonstrate a logical workflow. A GitHub repository is set up for code review.

### Bonus Features (Optional)

- Integration with a GraphQL API for data fetching.
- Advanced state management using MobX.
- Additional animations using Framer Motion for enhanced UI/UX.

[product-screenshot]: images/screenshot.png
