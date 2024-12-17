import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLogin } from '../hooks/useLogin';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  const { email, password, setEmail, setPassword, login, isLoading, error } = useLogin();

  return (
    <div className={`min-h-screen bg-gray-900 flex items-center justify-center p-4 font-sans`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="flex justify-start mb-8">
            <Image
              src="/logo-only.png"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </div>
          <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            login={login}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;