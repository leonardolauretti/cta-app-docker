import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { useChat } from 'src/modules/partner-portal/components/useChat';

interface IProps {}

const useStyles = makeStyles((theme: any) => ({
    root: {},
    input: {
        flexGrow: 1,
    },
    button: {},
}));

export default function(props: IProps) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Toolbar variant="regular">
                <Input 
                    className={classes.input}
                    placeholder="Buscar contatos"
                    disableUnderline={true}
                > 
                </Input>
                <IconButton className={classes.button} edge="end">
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </div>
    );
}