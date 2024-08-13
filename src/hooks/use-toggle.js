import { useEffect, useRef, useState } from "react";
import React from "react";


const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return { isOpen, setIsOpen, filterRef, handleToggle };
};

export default useToggle;
