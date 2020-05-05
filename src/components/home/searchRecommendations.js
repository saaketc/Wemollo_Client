import React from 'react'
import { createSlug } from '../../utils/generalFunctions';
import { Link } from 'react-router-dom';
import { Typography, Container, Grid } from '@material-ui/core';
import CardComponent from './../uiComponents/cardComponent';
import { useHistory } from 'react-router-dom';
import categoryImg from '../../illustrations/categoryImg.svg';
import { getData } from '../../services/dataService';
import Loader from 'react-loader';

// const URL = 'http://localhost:3000';
const color = '#ff6987';

const SearchRecommendations = (props) => {
  const { userType, catType, showDescription } = props;

  const [searchRecommendations, setSearchRecommendations] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const history = useHistory();


  const handleCardClick = (recommendation) => {
    // return window.location.href = `${URL}/${createSlug(recommendation.title)}/search?space=${recommendation.spaceId}`;
    return history.push(`/${createSlug(recommendation.title)}/search?space=${recommendation.spaceId}`);
  }
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getData('searchRecommendation/getSearchGoals', { userType: userType, catType: catType });
        // console.log(userType);      
        // console.log(catType);      
        // console.log(data);
        setSearchRecommendations(data);
        setLoading(false);
      }
      catch (e) {
        console.log(e.message);
      }
    }
    fetchData();
  }, [userType, catType])
  return (
    <>
      
      {loading ? <Loader type='spin' color={color} style={{ textAlign:'center' }} /> : (

        <Grid container spacing={6}>
          {

            searchRecommendations.map(r => (

              <Grid item xs={12} sm={12} md={4} lg={4}>
                <CardComponent
                  data={r}
                  showDescription={showDescription}
                  onClick={handleCardClick}
                />
              </Grid>

            ))
          }
        </Grid>

      )}

    </>
  )
}

export default SearchRecommendations
