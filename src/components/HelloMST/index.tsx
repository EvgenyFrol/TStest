import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from 'src/store';

export type HelloMSTProps = {
  color?: 'red' | 'black' | 'green';
  isText?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

const HelloMST: React.FC<HelloMSTProps> = ({ color, isText, children, ...props }) => {
  const hello = useSelector((store: RootStateType) => store.hello);

  return isText ? (
    <p style={{ color }} {...props}>
      {children || hello}
    </p>
  ) : (
    <h1 style={{ color }} {...props}>
      {children || hello}
    </h1>
  );
};

export default HelloMST;
