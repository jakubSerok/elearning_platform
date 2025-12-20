# E-Learning Platform

A modern, interactive e-learning platform built with Next.js, React, and TypeScript, featuring a code editor, course management, and user progress tracking.

## 🚀 Features

- **Interactive Code Editor**: Built-in code editor with syntax highlighting and live preview
- **Course Management**: Create and manage courses with chapters and exercises
- **User Authentication**: Secure authentication using Clerk
- **Progress Tracking**: Track your learning progress and completed exercises
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with Radix UI and Tailwind CSS for a polished look

## 🛠️ Tech Stack

- **Frontend**:

  - Next.js 13+ (App Router)
  - React 19
  - TypeScript
  - Tailwind CSS
  - Radix UI Components
  - Shadcn/ui

- **Backend**:

  - Next.js API Routes
  - Drizzle ORM
  - Neon Database (PostgreSQL)

- **Authentication**:

  - Clerk Authentication

- **Code Execution**:
  - Sandpack (by CodeSandbox)

## 📦 Prerequisites

- Node.js 18+
- npm or pnpm
- PostgreSQL database (or Neon for serverless Postgres)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/jakubSerok/elearning_platform.git
   cd elearning_platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following variables:

   ```
   DATABASE_URL=your_database_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```

4. **Run database migrations**

   ```bash
   npx drizzle-kit push:pg
   ```

5. **Start the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🏗️ Project Structure

```
elearning_platform/
├── app/                       # App router
│   ├── (auth)/                # Authentication routes
│   ├── (routes)/              # Protected routes
│   │   ├── courses/           # Course-related pages
│   │   └── dashboard/         # User dashboard
│   ├── api/                   # API routes
│   └── _components/           # Shared components
├── components/                # UI components
├── config/                    # Configuration files
├── lib/                       # Utility functions
└── public/                    # Static assets
```

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Clerk](https://clerk.com/) for authentication
- [Sandpack](https://sandpack.codesandbox.io/) for the code editor

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
