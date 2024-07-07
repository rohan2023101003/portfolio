
# Portfolio

This is the repository for my personal portfolio website.
### My portfolio link : https://portfolio-1-hk8l.onrender.com
## Description

This portfolio showcases my skills, projects, and contact information. It is built using Node.js, Express.js, and includes features like sending emails through Nodemailer.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

- **Home:** Introduction and navigation to other sections.
- **About:** Information about me and my background.
- **Skills:** List of technical skills and proficiency levels.
- **Education:** Details of academic qualifications and certifications.
- **Projects:** Showcase of projects with descriptions and links.
- **Contact:** Form to send messages directly through the website.

## Technologies Used

- **Node.js**
- **Express.js**
- **HTML/CSS/JavaScript**
- **Nodemailer** (for sending emails)
- **Dotenv** (for environment variables)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rohan2023101003/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```makefile
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password-or-app-password
   PORT=3000
   ```

   Replace `your-email@gmail.com` with your Gmail address and `your-email-password-or-app-password` with your Gmail password or app password.

4. **Start the server:**

   ```bash
   npm start
   ```

   This will start the server at [http://localhost:3000](http://localhost:3000).

## Usage

- Navigate through different sections using the navigation bar.
- View projects and click on links for more details.
- Use the contact form to send messages directly.

## Deployment

To deploy this portfolio, you can use platforms like Render, Heroku, or Vercel. Follow the platform-specific instructions to link your GitHub repository and set up environment variables.

For example, on Render:

1. **Create a new web service** and link it to this GitHub repository.
2. Build command : npm install
3. Start Command : npm start
4. **Set up environment variables** on the Render dashboard:
   - `EMAIL_USER` = `your-email@gmail.com`
   - `EMAIL_PASS` = `your-email-password-or-app-password`
   - `PORT` = `3000`
5. **Deploy your service.**

## Contact

For any inquiries or feedback, you can reach me at [rohankumar992p@gmail.com](mailto:rohankumar992p@gmail.com).
