# VidzTube

A backend API for a YouTube-style video platform built with Node.js, Express, MongoDB, and Mongoose. VidzTube covers the core server-side features needed for a modern video product, including authentication, video publishing, comments, likes, playlists, subscriptions, tweets, and creator dashboards.

## Project Overview

VidzTube is designed as a clean, production-style backend for a video sharing platform. It focuses on secure user sessions, media uploads through Cloudinary, and a modular controller-based architecture that keeps the codebase easy to extend.

This project is maintained by Muhammad Aftab.

GitHub: https://github.com/A5tab

## Features

- User registration, login, logout, and token refresh
- Access and refresh token based authentication with JWT
- Profile management, including avatar and cover image updates
- Watch history support
- Video upload, update, delete, publish, and listing APIs
- Comments with add, edit, delete, and fetch by video
- Likes for videos, comments, and tweets
- Subscriptions with creator and subscriber lookup
- Playlists with create, update, delete, and video management
- Tweets for creator updates and lightweight community posts
- Creator dashboard endpoints for channel stats and uploaded videos
- Health check endpoint for quick service monitoring

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Cloudinary
- Multer
- CORS
- cookie-parser

## API Areas

- Authentication and user management
- Video management and publishing
- Comments and engagement
- Likes and subscriptions
- Playlists and collections
- Dashboard analytics
- Health check

## Folder Structure

```text
backend/
	src/
		controllers/
		db/
		middlewares/
		models/
		routes/
		utils/
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/A5tab/VidzTube.git
cd VidzTube/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your environment file

Create a `.env` file inside `backend/` with the required values:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:3000
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4. Run the server

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - start the development server with nodemon

## Future Work

Planned improvements for the platform include:

- AI-powered video recommendations
- AI search and smarter content discovery
- Auto-generated captions and transcripts
- AI moderation for comments and uploaded content
- Live streaming support using WebRTC
- Real-time live chat for streams
- Notifications and creator engagement tools
- Better analytics for creators and channels

## Credits

This project was inspired by backend learning resources from Chai aur Code, and adapted into VidzTube as a cleaner GitHub-ready project by Muhammad Aftab.

## Contributing

Contributions are welcome. If you extend the controllers, routes, or platform features, keep the code modular and document any new environment variables or endpoints in this README.

## License

This project is released under the ISC license.