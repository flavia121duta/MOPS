import './buttons.css';

interface buttonPrimaryProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  fullwidth?: boolean;
}

export default function ButtonPrimary({
  className,
  onClick,
  children,
  fullwidth,
}: buttonPrimaryProps) {
  return (
    <button
      className={`${className ? className : ''} ${
        fullwidth ? 'full-width' : ''
      } btn primary`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
