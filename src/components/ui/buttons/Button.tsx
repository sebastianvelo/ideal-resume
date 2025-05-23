import useI18N from "@hooks/app/useI18N";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "danger";
  className?: string;
  disabled?: boolean;
}

const variantStyles = {
  primary: "bg-accent-600 hover:bg-accent-700 text-white shadow-lg",
  secondary: "bg-green-700 text-white dark:bg-green-900 dark:text-white shadow-lg",
  danger: "bg-red-700 text-white dark:bg-red-900 dark:text-white shadow-lg",
  outline: "bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white shadow-lg",
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", variant = "primary", className = "", disabled = false }) => {
  const { t } = useI18N();
  const content = typeof children === "string" ? t(children) : children;

  const baseClassName = "px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none";
  const buttonClassName = `${baseClassName} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={buttonClassName}>
      {content}
    </button>
  );
};

export default Button;
