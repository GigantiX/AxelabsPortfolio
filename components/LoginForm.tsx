import React from 'react';
import { motion } from 'framer-motion';

interface LoginFormProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    login: (e: React.FormEvent) => void;
    isLoading: boolean;
    error: string | null;
  }
  
  const LoginForm: React.FC<LoginFormProps> = ({
    email,
    password,
    setEmail,
    setPassword,
    login,
    isLoading,
    error
  }) => {
    return (
      <form onSubmit={login} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-yellow-500 focus:bg-gray-600 focus:ring-0 text-white"
            placeholder="Enter your email"
            required
          />
        </div>
  
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-yellow-500 focus:bg-gray-600 focus:ring-0 text-white"
            placeholder="Enter your password"
            required
          />
        </div>
  
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm"
          >
            {error}
          </motion.div>
        )}
  
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 text-lg font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 transition-colors"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </motion.button>
      </form>
    );
  };
  
  export default LoginForm;