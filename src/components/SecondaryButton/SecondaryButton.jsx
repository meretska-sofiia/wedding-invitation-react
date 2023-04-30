import css from './SecondaryButton.module.css';

const SecondaryButton = ({ text, className, onClick }) => {
  return (
    <button
      type="submit"
      className={`${css.secondaryButton} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
