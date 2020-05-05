import React from 'react'
import queryString from 'query-string';
import { getData } from '../../services/dataService';
import CardComponent from './../uiComponents/cardComponent';
import SearchModes from './../home/searchModes';

// Material components
import { Typography, Container, Grid } from '@material-ui/core';
import Navbar from './../uiComponents/navbar';
import SearchRecommendations from './../home/searchRecommendations';

const SearchbarResults = (props) => {
    const { userType, catType, checkedParent, checkedTeacher, checkedStudent, onChange } = props;
    const { q } = queryString.parse(props.location.search);
    const [searchResults, setSearchResults] = React.useState([]);

    const handleCardClick = (result) => {
        // return history.push(result.url);
        return window.open(result.url, '_blank');
    }

    React.useEffect(() => {
        const getSearchResults = async () => {
            const { data } = await getData('searchBar', { searchTerm: q });
            setSearchResults(data);
        }
        getSearchResults();
    }, [searchResults]);

    return (
        <>
            <Grid container spacing={6}>
                <Grid item xs={12} lg={6}>
                    <Navbar />
                    <br />

                    <SearchModes
                        onChange={onChange}
                        checkedParent={checkedParent}
                        checkedTeacher={checkedTeacher}
                        checkedStudent={checkedStudent}
                    />

                    <Typography variant='h5' style={{ fontWeight: 600 }}>{searchResults.length > 0 ? `Search Results for ${q.toUpperCase()}` : `Sorry no results found! Try something else`}</Typography>
                    <br />
                    <br />
                    <div>

                        {searchResults.length > 0 &&
                            searchResults.map(r => (
                                
                                 
                                    r.space.map(s => (
                                        <Grid container spacing={4}>
                                            <Grid item xs={12} lg={12}>
                                                <CardComponent
                                                    data={s}
                                                    mediaHeight={false}
                                                    onClick={handleCardClick}
                                                    showDescription={true}
                                                />
                                            </Grid>
                                        </Grid>
                                    ))
                                    
                               
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
                    <br />
                    <SearchRecommendations
                        userType={userType}
                        catType={catType}
                        showDescription={false} />
                </Grid>
            </Grid>
        </>
    )
}

export default SearchbarResults
