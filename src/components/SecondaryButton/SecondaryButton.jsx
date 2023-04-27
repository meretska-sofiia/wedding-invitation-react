import css from './SecondaryButton.module.css';

const SecondaryButton = ({ text, className }) => {
  return (
    <button type="submit" className={`${css.secondaryButton} ${className}`}>
      {text}
    </button>
  );
};

export default SecondaryButton;
