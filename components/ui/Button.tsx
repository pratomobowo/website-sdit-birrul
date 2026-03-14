import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl",
  secondary: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white",
  gold: "bg-gold-500 hover:bg-gold-600 text-emerald-900 shadow-lg hover:shadow-xl",
};

const sizes = {
  sm: "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm",
  md: "px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base",
  lg: "px-5 py-2.5 sm:px-8 sm:py-4 text-base sm:text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={baseStyles}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseStyles}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
