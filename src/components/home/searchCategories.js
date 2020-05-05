import React from 'react'
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'; 

const color = '#ff6987';

const useStyles = makeStyles(theme => ({
  category: {
    color: color,
    fontWeight: 600
  }
}));
const SearchCategories = (props) => {
  const classes = useStyles();

  const { category, onClick } = props;
  return (
    <>{
        category.map(c => (
          <Button className={classes.category} onClick = {(event) => onClick(event, c)}>{c}</Button>
        ))
    }
      
    </>
  )
}

export default SearchCategories
