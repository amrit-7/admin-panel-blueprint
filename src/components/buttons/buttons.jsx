import "./buttons.scss";

export const SignupButton = ({ children, ...otherProps }) => {
  return (
    <button class="learn-more" {...otherProps}>
      <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text">{children}</span>
    </button>
  );
};
