# URL Shortener Backend

A robust URL shortening service built with modern backend technologies.

## Features

- Shorten long URLs into compact, shareable links
- Custom alias support
- Analytics for link visits
- API endpoints for URL management

## Tech Stack

- Backend Framework: NodeJs, ExpressJs
- Database: Mongodb

## Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start the server
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/shorten` | Create short URL |
| GET | `/:id` | Redirect to original URL |
| GET | `/api/stats/:id` | Get URL statistics |

## Environment Variables

```
PORT=3000
mongodb_URL=your_mongodb_url
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Submit a pull request

## License

MIT License