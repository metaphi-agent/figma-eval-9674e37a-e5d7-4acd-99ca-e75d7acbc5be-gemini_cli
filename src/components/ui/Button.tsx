import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 's' | 'm' | 'l' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'm',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    secondary: 'bg-amber-400 text-blue-gray-900 hover:bg-amber-500 focus:ring-amber-400',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50 focus:ring-purple-500',
    ghost: 'text-blue-gray-600 hover:bg-blue-gray-100 hover:text-blue-gray-900',
    link: 'text-purple-600 hover:underline p-0 h-auto',
  };

  const sizes = {
    s: 'px-3 py-1.5 text-sm',
    m: 'px-5 py-2.5 text-base',
    l: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl font-bold',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        variant !== 'link' && sizes[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};
