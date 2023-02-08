function Button({ buttonType, children, className, ...rest }) {
  const buttonTypes = {
    primary: 'text-white bg-sky-600 border border-sky-600 rounded p-2.5',
    secondary: 'text-white bg-gray-400 border border-gray-400 rounded p-2.5',
    danger: 'text-white bg-red-500 border border-red-500 rounded p-2.5',
    success: 'text-white bg-lime-300 border border-lime-300 rounded p-2.5',
  };
  return (
    <button {...rest} className={`${buttonTypes[buttonType]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
