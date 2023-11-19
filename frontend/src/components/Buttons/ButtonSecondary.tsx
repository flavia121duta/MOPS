import './buttons.css';

interface buttonSecondaryProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  fullwidth?: boolean;
  icon?: {
    src: string;
    title: string;
    altText: string;
  };
}

export default function ButtonSecondary({
  className,
  onClick,
  children,
  fullwidth,
  icon,
}: buttonSecondaryProps) {
  return (
    <button
      className={`${className ? className : ''} ${
        fullwidth ? 'full-width' : ''
      } btn secondary`}
      onClick={onClick}
    >
      {icon ? (
        <img src={icon.src} title={icon.title} alt={icon.altText} />
      ) : null}
      {children}
    </button>
  );
}
