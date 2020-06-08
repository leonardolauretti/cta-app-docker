import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';


function renderRow({ index, style }) {
    return (
        <div style={{
            ...style,
            left: style.left + 15,
            right: style.right + 15,
            width: style.width - 15,
            height: style.height - 15,
        }}>
                Row {index}
        </div>
    );
}

function ListRenderer() {

    return (
        <AutoSizer>
            {({ height, width }) => (
                
                <FixedSizeList
                    height={height}
                    itemCount={1000}
                    itemSize={35}
                    width={width}
                >
                    {renderRow}
                </FixedSizeList>
            )}
        </AutoSizer>
    );
}

export default function(props) {
    return (
        <ListRenderer />
    );
}