import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';

interface IProps {
    path?: string;
    onChange?: (value: string) => void;
    tabs: { value, label }[];
}

export default function(props: IProps) {
    const { tabs } = props;
    const location = useLocation();
    const match = useRouteMatch();
    const history = useHistory();
    const [activeTab, setActiveTab] = useState(location.pathname);

    function handleTabChange(event, tab) {
        setActiveTab(tab);
    }

    useEffect(() => {
        const unlisten = history.listen((location, action) => {
            setActiveTab(location.pathname);
        });

        return () => {
            unlisten();
        }
    }, []);

    useEffect(() => {
        history.push(activeTab);
    }, [activeTab]);

    return (
        <div style={{ marginBottom: '24px' }}>
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                style={{ marginTop: '24px' }}
                variant="scrollable"
            >
                {tabs.map(tab => (<Tab key={tab.value} value={tab.value} label={tab.label} />))}
            </Tabs>
            <Divider style={{ backgroundColor: '#e0e0e0' }}/>
        </div>
    );
}