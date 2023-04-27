import css from './PrimaryButton.module.css';
const PrimaryButton = ({ href, className, children }) => {
  return (
    <a
      type="button"
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${css.button} ${className}`}
    >
      {children}
    </a>
  );
};

export default PrimaryButton;
