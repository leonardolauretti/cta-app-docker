import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInAction, signoutAction } from 'src/modules/partner-portal/ducks/auth/actions';
import { userSelector, tokenSelector } from 'src/modules/partner-portal/ducks/auth/selectors';
import Axios from 'axios';

const newsContext = createContext(null);

export function NewsProvider({ children }) {
    const news = useProvideNews();
    return <newsContext.Provider value={news}>{children}</newsContext.Provider>
};

export const useNews = () => {
    return useContext(newsContext);
};

function useProvideNews() {
    const dispatch = useDispatch();
    const [busy, setBusy] = useState(false);
    const [news, setNews] = useState([]);
    const [studentsPerCourse, setStudentsPerCourse] = useState(null);
    const bearer = useSelector(tokenSelector);

    function fetchStudentsPerCourse() {
        let client = Axios.create({
            baseURL: process.env.API_URL,
            headers: { Authorization: `Bearer ${bearer}` },
        });

        setBusy(true);

        client.get('partner/status').then((response) => {
            setBusy(false);
            setStudentsPerCourse(response.data);
        });
    }

    return {
        busy,
        studentsPerCourse,
        news,
    };
};