/* eslint-disable react/prop-types */
 
const Button = ({ className, onClick, children }) => {
  return (
    <button className={`py-2 px-4 rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
