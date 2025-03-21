import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollTop = () => {
    const { pathname } = useLocation(); 

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0)
    }, [pathname]);

    return;
}

export default useScrollTop