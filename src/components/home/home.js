import React from 'react'
import SearchBar from './searchBar';
import SearchModes from './searchModes';
import SearchRecommendations from './searchRecommendations';
import SearchCategories from './searchCategories';
import Footer from '../uiComponents/footer';

// Material components
import { Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const color = '#ff6987';
const tagLine = 'Hand picked educational products organised effectively to meet your goals and needs.';
const studentCategories = ['Primary School (Classes 6-8)', 'High School (Classes 9-12)'];
const commonCategories = ['Pre School', 'Kindergarden-Class 5', 'Primary School (Classes 6-8)', 'High School (Classes 9-12)']

const useStyles = makeStyles(theme => ({
  brandHeading: {
    color: color,
    fontWeight: 500
  },
  tagLine: {
    fontWeight: 600,
  }
}))
const Home = (props) => {
  const {checkedParent, checkedTeacher, checkedStudent, userType, catType, onChange, onClick } = props;
  const classes = useStyles();


  return (
    <Container  style={{ textAlign:'center', marginTop: '5%' }}>
      <Typography variant='h2' className={classes.brandHeading}> Wemollo </Typography> 
      <br/>  
      <SearchBar />
           <p className={classes.tagLine}>{tagLine}</p>

          <SearchModes
          onChange={onChange}
          checkedParent={checkedParent}
          checkedTeacher={checkedTeacher}
          checkedStudent={checkedStudent}
          />
      <br />
      <br />
      <Typography variant='h4' style={{ fontWeight: 600 }}>Search Recommendations</Typography>
      <br />

         <SearchCategories
         category = { userType === 'parent' || userType === 'teacher' ? commonCategories : studentCategories }
         onClick = {onClick}
      />
      <br/>
      <br/>
      <br/>
      
          <SearchRecommendations
        userType={userType}
        catType={catType}
        showDescription={true}
          />
    
    </Container>
    
  )
}

export default Home
