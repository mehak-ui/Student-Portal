import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CheckCircle
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const summaryCards = [
    {
      title: 'GPA',
      value: '3.85',
      subtitle: 'Current Semester',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Attendance',
      value: '92%',
      subtitle: 'This Month',
      icon: CheckCircle,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      textColor: 'text-emerald-600 dark:text-emerald-400'
    },
    {
      title: 'Subjects',
      value: '12/15',
      subtitle: 'Completed',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Assignments',
      value: '8',
      subtitle: 'Due This Week',
      icon: Calendar,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600 dark:text-orange-400'
    }
  ];

  const upcomingEvents = [
    { title: 'Midterm Exam - Calculus', date: 'Tomorrow', time: '10:00 AM' },
    { title: 'Project Presentation', date: 'Mar 25', time: '2:00 PM' },
    { title: 'Study Group Meeting', date: 'Mar 27', time: '4:00 PM' },
    { title: 'Final Exam - Physics', date: 'Apr 1', time: '9:00 AM' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-blue-100">
          Here's an overview of your academic progress and upcoming activities.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card) => (
          <div key={card.title} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 group">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {card.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {card.value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {card.subtitle}
                </p>
              </div>
              <div className={`${card.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                <card.icon className={`w-6 h-6 ${card.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2 mb-6">
          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>Upcoming Events</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                {event.title}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {event.date}
                </span>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {event.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
