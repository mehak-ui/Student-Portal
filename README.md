# 🎓 Student Portal

A modern, responsive student management system built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive platform for students to manage their academic journey with features like authentication, user directory, and dashboard analytics.

![Student Portal Screenshot](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)

## 🚀 Live Demo

**[View Live Application](https://legendary-fox-8cf69d.netlify.app)**

## ✨ Features

### 🔐 Authentication System
- **Login/Signup Pages**: Secure authentication with form validation
- **Protected Routes**: Private route protection with automatic redirects
- **Session Management**: Persistent login state with localStorage
- **Demo Access**: Use any email/password combination for testing

### 🧭 Navigation
- **Sticky Navbar**: Always accessible navigation that stays at the top
- **Responsive Design**: Mobile-friendly hamburger menu
- **Active States**: Visual indicators for current page
- **Dark Mode Toggle**: Switch between light and dark themes
- **User Profile**: Display logged-in user information

### 📊 Dashboard
- **Academic Overview**: GPA, attendance, subjects, and assignments tracking
- **Summary Cards**: Visual representation of key metrics
- **Upcoming Events**: Calendar integration with important dates
- **Responsive Grid**: Adapts to different screen sizes

### 👥 User Directory
- **API Integration**: Fetches real user data from JSONPlaceholder API
- **Search Functionality**: Filter users by name, email, or company
- **Contact Information**: Complete user profiles with contact details
- **Loading States**: Smooth loading experience with skeletons
- **Error Handling**: Graceful error handling with retry options

### 🎨 Design Features
- **Modern UI**: Clean, professional interface design
- **Dark Mode**: Complete dark theme support
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG compliant with proper contrast ratios

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Code Quality**: ESLint + TypeScript ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/student-portal.git
   cd student-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation component
│   └── PrivateRoute.tsx # Route protection
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication state management
├── hooks/              # Custom React hooks
│   └── useDarkMode.tsx # Dark mode functionality
├── pages/              # Page components
│   ├── Dashboard.tsx   # Dashboard with analytics
│   ├── Home.tsx        # Landing page
│   ├── Login.tsx       # Authentication
│   ├── Signup.tsx      # User registration
│   └── Users.tsx       # User directory
├── App.tsx             # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎯 Key Features Implementation

### Authentication Flow
- Dummy authentication system for demonstration
- Form validation with error handling
- Automatic redirects based on auth state
- Persistent sessions using localStorage

### API Integration
- RESTful API calls to JSONPlaceholder
- Loading states and error handling
- Search and filter functionality
- Responsive data display

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation
- Touch-friendly interactions

## 🚀 Deployment

The application is automatically deployed to Netlify on every push to the main branch.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod --dir=dist
   ```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Theme Colors
The application uses a blue-indigo gradient theme. To customize:

1. Update the gradient classes in `tailwind.config.js`
2. Modify the color variables in components
3. Adjust the dark mode variants

### Adding New Features
1. Create new components in the `components/` directory
2. Add new pages in the `pages/` directory
3. Update routing in `App.tsx`
4. Add navigation links in `Navbar.tsx`

## 🔧 Environment Variables

No environment variables are required for basic functionality. The app uses:
- JSONPlaceholder API (public, no auth required)
- localStorage for session management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the mock API
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Unsplash](https://unsplash.com/) for the stock photos

---

⭐ Star this repository if you found it helpful!
