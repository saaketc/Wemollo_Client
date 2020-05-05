import React from 'react'
import queryString from 'query-string';
import { getData } from '../../services/dataService';
import { removeSlug } from '../../utils/generalFunctions';
import CardComponent from './../uiComponents/cardComponent';
import Footer from './../uiComponents/footer';
import SearchBar from './../home/searchBar';
import SearchModes from './../home/searchModes';


// Material components
import { Typography, Container, Grid } from '@material-ui/core';
import Navbar from './../uiComponents/navbar';
import SearchRecommendations from './../home/searchRecommendations';


  const Results = (props) => {
    const { userType, catType, checkedParent, checkedTeacher, checkedStudent, onChange } = props;
  const { space } = queryString.parse(props.location.search);
  const { goalTitle } = props.match.params;
  const [searchResult, setSearchResult] = React.useState({});

  const handleCardClick = (result) => {
    // return history.push(result.url);
    return window.open(result.url, '_blank');
  }

  React.useEffect(() => {
    const getSearchResults = async () => {
      const { data } = await getData('searchRecommendation/getSearchSpace', { spaceId: space });
      setSearchResult(data);
    }
    getSearchResults();
  }, [searchResult]);

  return (
    <>  
      <Grid container spacing={6}>
        <Grid item xs={12} lg={6}>
          <Navbar/>
          {/* <SearchBar/> */}
          <br/>
          
          <SearchModes
            onChange={onChange}
            checkedParent={checkedParent}
            checkedTeacher={checkedTeacher}
            checkedStudent={checkedStudent}
          />
          
        <Typography variant='h5' style={{ fontWeight: 600 }}>Search Results for {removeSlug(goalTitle.toUpperCase())}</Typography>
      <br/>
      <br/>
      <div>
      
        { searchResult.space &&
          searchResult.space.map(r => (
            <Grid key={r._id} container spacing={4}>
              <Grid item xs={12} lg={12}>
                <CardComponent
                  data={r}
                  mediaHeight={false}
                  onClick={handleCardClick}
                  showDescription={true}
                />
              </Grid> 
            </Grid>
          ))
        }
      </div>
        </Grid>
      
        <Grid item xs={12} lg={6}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant='h5' style={{ fontWeight: 600 }}>Suggested search goals</Typography>
<br/>
      <SearchRecommendations
        userType={userType}
        catType={catType}
        showDescription={false} />
      </Grid>
      </Grid>
    </>
  )
}

export default Results
