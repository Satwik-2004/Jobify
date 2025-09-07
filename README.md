# Jobify - Job Application Tracking System

A modern, full-stack job application tracking system built with Next.js 14, TypeScript, and Prisma. Track your job applications, monitor your progress, and stay organized in your job search journey.

## 🚀 Live Demo

**Live Application:** [https://jobify-g39s.vercel.app/](https://jobify-g39s.vercel.app/)

## ✨ Features

### 🎯 Core Functionality
- **Job Application Management**: Add, edit, and delete job applications
- **Application Status Tracking**: Track applications through different stages (Pending, Interview, Declined)
- **Job Mode Categories**: Full-time, Part-time, and Internship positions
- **Advanced Search & Filter**: Search by position, company, or filter by status
- **Statistics Dashboard**: Visual insights into your application progress
- **Monthly Application Charts**: Track your application activity over time

### 🔐 Authentication & Security
- **Clerk Authentication**: Secure user authentication with social login options
- **Protected Routes**: Middleware-protected dashboard pages
- **User-specific Data**: Each user can only access their own job applications

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Modern UI Components**: Built with shadcn/ui and Tailwind CSS
- **Loading States**: Skeleton loaders for better user experience
- **Toast Notifications**: User feedback for all actions

### 📊 Data Visualization
- **Statistics Cards**: Quick overview of application counts by status
- **Interactive Charts**: Monthly application trends using Recharts
- **Pagination**: Efficient handling of large datasets

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern React component library
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful & consistent icons

### Backend & Database
- **Prisma** - Next-generation ORM
- **PostgreSQL** - Robust relational database
- **Server Actions** - Next.js server-side functions

### Authentication & State Management
- **Clerk** - Complete authentication solution
- **TanStack Query (React Query)** - Powerful data synchronization
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Development & Deployment
- **Vercel** - Frontend deployment platform
- **ESLint** - Code linting
- **Day.js** - Lightweight date manipulation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Satwik-2004/Jobify.git
   cd Jobify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="your_postgresql_connection_string"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   *Optional
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/add-job
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/add-job
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push database schema
   npx prisma db push
   
   # (Optional) Seed with sample data
   node prisma/seed.js
   ```

5. **Install shadcn/ui components**
   ```bash
   npx shadcn@latest init
   npx shadcn@latest add button form input select card badge dropdown-menu toast skeleton
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
jobify/
├── app/                          # Next.js App Router
│   ├── (dashboard)/             # Protected dashboard routes
│   │   ├── add-job/            # Add new job page
│   │   ├── jobs/               # All jobs listing
│   │   │   └── [id]/          # Edit specific job
│   │   └── stats/             # Statistics dashboard
│   ├── globals.css            # Global styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   └── providers.tsx         # App providers
├── components/                 # Reusable components
│   ├── ui/                   # shadcn/ui components
│   ├── CreateJobForm.tsx     # Job creation form
│   ├── EditJobForm.tsx       # Job editing form
│   ├── JobCard.tsx           # Job display card
│   ├── JobsList.tsx          # Jobs listing
│   ├── Navbar.tsx            # Navigation bar
│   ├── SearchForm.tsx        # Search and filter
│   ├── Sidebar.tsx           # Dashboard sidebar
│   ├── StatsContainer.tsx    # Statistics display
│   └── ChartsContainer.tsx   # Charts display
├── utils/                     # Utility functions
│   ├── actions.ts            # Server actions
│   ├── db.ts                 # Database connection
│   ├── links.tsx             # Navigation links
│   └── types.ts              # TypeScript types
├── prisma/                   # Database schema and migrations
│   ├── schema.prisma         # Database schema
│   └── seed.js              # Sample data seeder
└── middleware.ts             # Clerk authentication middleware
```

## 🎯 Key Features Walkthrough

### 1. Job Application Management
- Add new job applications with position, company, location, status, and mode
- Edit existing applications with real-time updates
- Delete applications with confirmation

### 2. Smart Search & Filtering
- Search across position and company fields
- Filter by application status (All, Pending, Interview, Declined)
- Paginated results for better performance

### 3. Visual Analytics
- **Statistics Cards**: Quick overview of application counts
- **Monthly Trends**: Bar chart showing application activity over the last 6 months
- **Status Distribution**: Clear breakdown of application statuses

### 4. User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark/Light Mode**: Automatic system preference detection with manual toggle
- **Loading States**: Skeleton components during data fetching
- **Error Handling**: Graceful error handling with user-friendly messages

## 🔧 Database Schema

```prisma
model Job {
  id        String   @id @default(uuid())
  clerkId   String   // User identifier from Clerk
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  position  String   // Job position/title
  company   String   // Company name
  location  String   // Job location
  status    String   // pending | interview | declined
  mode      String   // full-time | part-time | internship
}
```

## 📚 API Routes & Server Actions

### Server Actions
- `createJobAction` - Create new job application
- `updateJobAction` - Update existing job application  
- `deleteJobAction` - Delete job application
- `getAllJobsAction` - Fetch jobs with search, filter, and pagination
- `getSingleJobAction` - Fetch single job by ID
- `getStatsAction` - Get application statistics
- `getChartsDataAction` - Get monthly application data

## 🚀 Deployment

### Vercel Deployment
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Import your GitHub repository in Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically

3. **Database Setup**
   - Set up PostgreSQL database (Railway, Supabase, or PlanetScale)
   - Update `DATABASE_URL` in Vercel environment variables
   - Run `npx prisma db push` to sync schema

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.com/) - Authentication made simple
- [Prisma](https://prisma.io/) - Next-generation ORM
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

## 📧 Contact

**Satwik** - [GitHub Profile](https://github.com/Satwik-2004)

**Project Link:** [https://github.com/Satwik-2004/Jobify](https://github.com/Satwik-2004/Jobify)

---

⭐ If you found this project helpful, please give it a star on GitHub!
