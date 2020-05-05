import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from './../home/searchBar';
import  Button  from '@material-ui/core/Button';

const color = '#ff6987';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft:0
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: color,
        fontWeight: 500,
        display: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'block',
        },
    },
    searchbar: {
        [theme.breakpoints.up('xs')]: {
            display: 'block',
            width: 400
        }
    },
    
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
                <Toolbar>
                    <Button >
                    <Typography  className={classes.title} variant="h3" onClick={() => window.location.href = '/'} noWrap>
                            W
          </Typography>
                    </Button>
                  
                    
                <SearchBar
                   />
                    
                </Toolbar>
           
        </div>
    );
}