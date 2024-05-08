interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ onChange, value, ...props }: InputProps) => {
  return (
    <input
      className="p-3 rounded-lg text-2xl"
      type="text"
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default Input;
