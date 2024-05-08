import { ReactNode } from "react";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className="rounded-lg bg-green-600 text-white font-semibold  p-2 hover:bg-green-700 transition-all select-none"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
