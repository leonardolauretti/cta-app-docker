import React from 'react';
import AddressForm from '../AddressForm';

interface IProps {
    address: {
        [key: string]: any;
    };
}

export default function(props: IProps) {
    return (
        <div>
            <AddressForm 
                onSubmit={(values) => console.log(values)}
            />
        </div>
    );
}