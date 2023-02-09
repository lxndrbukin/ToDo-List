function Button({ buttonType, children, className, ...rest }) {
  const buttonTypes = {
    primary: 'text-white bg-sky-600 border border-sky-600 rounded p-2.5',
    secondary: 'text-white bg-gray-400 border border-gray-400 rounded p-2.5',
    danger: 'text-white bg-red-500 border border-red-500 rounded p-2.5',
    success: 'text-white bg-lime-500 border border-lime-500 rounded p-2.5',
    light: 'bg-white border border-white rounded p-2.5',
  };
  return (
    <button
      {...rest}
      className={`${buttonTypes[buttonType]} ${className} mx-0.5 flex flex-row`}
    >
      {children}
    </button>
  );
}

export default Button;
