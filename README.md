# Feedback Form Frontend

This is the frontend application for the Feedback Form. It provides a user-friendly interface for submitting and viewing feedback.

## Tech Stack

- **React**: JavaScript library for building user interfaces
- **Vite**: Next Generation Frontend Tooling
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: For client-side routing
- **Axios**: For making HTTP requests
- **React Icons**: For icons
- **React Toastify**: For notifications

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── FeedbackForm.jsx    # Form component for feedback submission
│   │   ├── FeedbackList.jsx    # Component to display feedbacks
│   │   └── FeedbackItem.jsx    # Individual feedback item component
│   ├── pages/
│   │   ├── Home.jsx           # Home page
│   │   └── Feedback.jsx       # Feedback page
│   ├── services/
│   │   └── api.js            # API service for backend communication
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── package.json             # Project dependencies
└── vite.config.js           # Vite configuration
```

## API Integration

The frontend communicates with the backend API at `https://obliged-jeanie-vikers-of-q-fb1222e7.koyeb.app/api/feedback`:

- `GET /feedbacks`: Fetch all feedbacks
- `POST /submit-feedback`: Submit new feedback


## Local Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file with required variables
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser
