
import React, { RefObject } from 'react';

interface Props {
   text: JSX.Element | string;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  id: string;
  className?: string;
}

const CustomButton: React.FC<Props> = (props) => {
  const {
    text,
    onClick,
    type,
    disabled,
    id,
    className
  } = props;

  return (
    <button
        id={id}
        className={className}
        type={type}
        disabled={disabled}
        onClick={onClick}
    >{text}</button>
  )
};


export default CustomButton;
