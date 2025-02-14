import { useState } from 'react';
import './input.css';
import IconShowPassword from '../../assets/icons/icon_show_password.svg';
import IconHidePassword from '../../assets/icons/icon_hide_password.svg';

interface InputProps {
  className?: string;
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  trailingIcon?: {
    src: string;
    title: string;
    alt: string;
    onClick?: () => void;
  };
  isPrimary?: boolean;
}

export default function Input({
  className,
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  trailingIcon,
  isPrimary = true,
}: InputProps) {
  const [inputType, setInputType] = useState(type);

  function togglePasswordVisibility() {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  }

  return (
    <div
      className={`${className ? className : ''} ${
        isPrimary ? 'input-primary' : 'input-inverted'
      }  input-container`}
    >
      {value != '' ? <label htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
      />
      {type === 'password' && value != '' ? (
        <img
          className="password-visibility-toggle"
          src={inputType === 'password' ? IconHidePassword : IconShowPassword}
          title={inputType === 'password' ? 'Show Password' : 'Hide Password'}
          alt={inputType === 'password' ? 'Show Password' : 'Hide Password'}
          onClick={togglePasswordVisibility}
        />
      ) : null}
      {trailingIcon ? (
        <img
          className="trailing-icon icon"
          src={trailingIcon.src}
          title={trailingIcon.title}
          alt={trailingIcon.alt}
          onClick={trailingIcon.onClick}
        />
      ) : null}
    </div>
  );
}
