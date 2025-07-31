import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Award, 
  ArrowRight
} from 'lucide-react';

const Home: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: BookOpen,
      title: 'Course Management',
      description: 'Track your courses, assignments, and academic progress in one place.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Visualize your academic performance with detailed charts and insights.'
    },
    {
      icon: Users,
      title: 'Student Directory',
      description: 'Connect with fellow students and faculty members easily.'
    },
    {
      icon: Award,
      title: 'Achievement Tracking',
      description: 'Monitor your academic achievements and milestones.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Student Portal
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Manage your academic journey in one place. Track your progress, connect with peers, 
            and achieve your educational goals with our comprehensive student management system.
          </p>
        </div>

        {user && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back, {user.name}! 👋
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Ready to continue your academic journey? Check out your dashboard for the latest updates.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <BarChart3 className="w-5 h-5" />
            <span>View Dashboard</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/users"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Users className="w-5 h-5" />
            <span>Browse Users</span>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need for academic success
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and resources you need to excel in your studies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 group hover:shadow-lg transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-6 opacity-90">
          Join thousands of students who are already using our platform to achieve their academic goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Now
          </Link>
          <Link
            to="/users"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;