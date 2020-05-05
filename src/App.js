import React from 'react';
import Home from './components/home/home';
import Results from './components/searchResults/results';
import SearchbarResults from './components/searchResults/searchbarResults';
import { Route, Switch } from 'react-router-dom';
import 'typeface-roboto';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Footer from './components/uiComponents/footer';

const feedbackURL = 'https://www.google.com';

const App = () => {

  const [checkedParent, setCheckedParent] = React.useState(true);
  const [checkedTeacher, setCheckedTeacher] = React.useState(false);
  const [checkedStudent, setCheckedStudent] = React.useState(false);
  const [userType, setUserType] = React.useState('parent');
  const [catType, setCatType] = React.useState('preschool');


  const handleChange =  searchMode => {
    if (searchMode === 'parent') {
      setUserType('parent');
      setCheckedParent(!checkedParent);
      setCheckedTeacher(false);
      setCheckedStudent(false);
    }

    else if (searchMode === 'teacher') {
      setUserType('teacher');
      setCheckedTeacher(!checkedTeacher);
      setCheckedParent(false);
      setCheckedStudent(false);
    }

    else if (searchMode === 'student') {
      setUserType('student');
      setCheckedStudent(!checkedStudent);
      setCheckedTeacher(false);
      setCheckedParent(false);
    }

  }
  const handleCategoryClick = (event, category) => {
    event.preventDefault();
    // let trimmedCategory = category.toLowerCase().trim().split(' ');
    // trimmedCategory = trimmedCategory.join('');
    // console.log(trimmedCategory);
    if (category === 'Pre School')
      setCatType('preschool');

    else if (category === 'Kindergarden-Class 5')
      setCatType('k5');

    else if (category === 'Primary School (Classes 6-8)')
      setCatType('primaryschool');

    else if (category === 'High School (Classes 9-12)')
      setCatType('highschool');

  }
  return (
    <Container maxWidth='lg'>
      <br/>
      <Button style={{ marginLeft: '60%' }} onClick={() => window.open(feedbackURL, '_blank')}>Care for a better service?</Button>

    <Switch>
        <Route path='/:goalTitle/search' render={(props) => <Results {...props}
          userType={userType}
          catType={catType}
          checkedParent={checkedParent}
          checkedTeacher={checkedTeacher}
          checkedStudent={checkedStudent}
          onChange={handleChange}/>} />
        
        <Route path='/search' render={(props) => <SearchbarResults {...props}
          userType={userType}
          catType={catType}
          checkedParent={checkedParent}
          checkedTeacher={checkedTeacher}
          checkedStudent={checkedStudent}
          onChange={handleChange} />} />
        
        <Route exact path='/' render={(props) => <Home {...props}
          checkedParent={checkedParent}
          checkedTeacher={checkedTeacher}
          checkedStudent={checkedStudent}
          userType={userType}
          catType={catType}
          onChange={handleChange}
          onClick={handleCategoryClick}/>} />
      </Switch>
      <Footer
      feedbackURL={feedbackURL}/>
    </Container>
  );
}

export default App;
