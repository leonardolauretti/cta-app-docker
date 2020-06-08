import React, { useState } from 'react';
import RankingToolbar from './components/RankingToolbar';
import RankingList from './components/RankingList';

import CompanyWarning from 'src/modules/partner-portal/components/CompanyWarning';
import VerifiedCompanyWarning from 'src/modules/partner-portal/components/VerifiedCompanyWarning';

import { useRanking } from './components/useRanking';
import { useAccount } from 'src/modules/partner-portal/components/useAccount';
import StudentDetails from './components/StudentDetails';

export default function(props) {
    const ranking = useRanking();
    const account = useAccount();

    const [selectedEntry, setSelectedEntry] = useState('');
    const [showStudentDetails, setShowStudentDetails] = useState(false);

    function handleEntryClick(id: string) {
        console.log(id)
        setSelectedEntry(id);
        setShowStudentDetails(true);
    }

    if (!account.hasCompanies) {
        return (<CompanyWarning />);
    }

    if (!account.hasVerifiedCompanies) {
        return (<VerifiedCompanyWarning />);
    }

    return (
        <div className="">
            <RankingToolbar
                busy={ranking.busy}
                onSearch={(query) => ranking.onQuery(query)}
            />
            <RankingList
                busy={ranking.busy}
                rows={ranking.entries}
                onRowClick={handleEntryClick}
            />
            <StudentDetails
                open={showStudentDetails}
                onClose={() => setShowStudentDetails(false)}
                data={ranking.getEntryInfo(selectedEntry)}
            />
        </div>
    );
}