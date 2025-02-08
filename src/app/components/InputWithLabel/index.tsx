'use client';
import React from 'react';
import { InputWithLabelProps } from '../CustomTypes';

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  labelText,
  labelClassName = 'text-md uppercase text-sky-500',
  labelHtmlForId,
  inputOnChange,
  id,
  defaultValue,
  placeholder = '',
  inputType = 'text',
  inputClassName = 'bg-black border text-green-400 text-xl border-gray-300 h-11 w-full px-4 rounded-md',
  wrapperClassName = 'flex w-full flex-col gap-y-3',
}) => {
  return (
    <div className={wrapperClassName}>
      <label htmlFor={labelHtmlForId} className={labelClassName}>
        {labelText}
      </label>
      <input
        id={id}
        type={inputType}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={inputOnChange}
        className={inputClassName}
      />
    </div>
  );
};

export default InputWithLabel;
