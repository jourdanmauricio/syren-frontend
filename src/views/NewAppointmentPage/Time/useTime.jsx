import { useEffect, useRef, useState } from 'react';

// const useTime = ({ form, handleChange }) => {
const useTime = ({ handleChange }) => {
  const timeRef = useRef();
  const [showtime, setShowTime] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (timeRef.current && !timeRef.current.contains(event.target)) {
        setShowTime(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [timeRef]);

  const handleShowTime = () => {
    setShowTime(!showtime);
  };

  const handleTime = (e) => {
    const { name } = e.target;
    if (name === 'minute') setShowTime(false);
    handleChange(e);
  };

  return { showtime, handleShowTime, timeRef, handleTime };
};
export default useTime;
