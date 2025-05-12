# RePhotos Booking Portal

A modern booking and project management platform for real estate photographers and media professionals.

## Features

- 🎯 Dynamic booking form with customizable services
- 📅 Date and time selection
- 💰 Dynamic pricing based on property size and services
- 📧 Email notifications for bookings
- 📱 Responsive design
- 🔒 Secure form submission
- 📊 Admin dashboard (coming soon)

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase (Backend & Auth)
- Resend (Email)

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- Supabase account
- Resend account (for email notifications)

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_RESEND_API_KEY=your_resend_api_key
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rephotos-booking.git
cd rephotos-booking
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Deployment

The project is configured for deployment on Netlify. To deploy:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure environment variables in Netlify dashboard
4. Deploy!

## Project Structure

```
src/
├── components/
│   ├── booking/     # Booking form components
│   ├── ui/          # Reusable UI components
│   └── layout/      # Layout components
├── hooks/           # Custom React hooks
├── lib/            # Third-party library configurations
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── data/           # Static data and constants
```

## Development Roadmap

### Phase 1 (Current)
- ✅ Basic booking form
- ✅ Email notifications
- ✅ Form validation
- ✅ Responsive design

### Phase 2 (Next)
- Client login
- Media delivery
- Job status updates
- Calendar integration

### Phase 3 (Future)
- Multi-user support
- Stripe billing
- Full SaaS features

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 