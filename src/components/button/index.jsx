const Button = (props) => {
  const { children, bgColor, text, yPadding } = props;
  return (
    <>
      <button
        className={`relative ${bgColor} px-4 ${yPadding} rounded-lg text-lg font-medium flex gap-3 justify-center items-center`}
      >
        {children}
        {text}
      </button>
    </>
  );
};

export default Button;
