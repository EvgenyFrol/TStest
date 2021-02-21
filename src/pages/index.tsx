import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HelloMST from 'src/components/HelloMST';
import { setGreatDigitalAgency, setHelloMST } from 'src/store/actions/hello';

const Page: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHelloMST('Hello MST!'));
    const timer = setInterval(() => {
      dispatch(setGreatDigitalAgency('Great Digital Agency!'));
      setTimeout(() => {
        dispatch(setHelloMST('Hello MST!'));
      }, 1500);
    }, 3000);
    return () => clearInterval(timer);
  });

  return <HelloMST />;
};

export default Page;
