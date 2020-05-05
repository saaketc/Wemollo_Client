import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { getData } from './../../services/dataService';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignText: 'center',
     maxWidth: 500
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 2,
    [theme.breakpoints.up('xs')]: {
      display: 'block',
      width: 200
    }
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  }
 
}));

export default function SearchBar() {
  const classes = useStyles();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = ({currentTarget}) => {
    setSearchTerm(currentTarget.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    return history.push(`/search?q=${searchTerm}`);
  }

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      
      <InputBase
        className={classes.input}
        placeholder="Search for educational products from pre school to high school!"
        inputProps={{ 'aria-label': 'Search for educational products from pre school to high school!' }}
        value={searchTerm}
        onChange={handleChange}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Paper>
  );
}