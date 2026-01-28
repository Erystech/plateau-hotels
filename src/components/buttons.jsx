import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  
  
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center cursor-pointer';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark active:scale-95',
    secondary: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white',
    accent: 'bg-accent text-primary hover:opacity-90 hover:text-white active:scale-95',
    outline: 'border-2 border-neutral-light text-neutral-dark hover:border-primary hover:text-primary',
    ghost: 'text-primary hover:bg-primary/10',
  };
  
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
 
  const disabledStyles = 'opacity-50 cursor-not-allowed hover:bg-primary hover:opacity-50';
  

  const widthStyles = fullWidth ? 'w-full' : '';
  

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${widthStyles}
    ${disabled ? disabledStyles : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;