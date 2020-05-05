import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';

const color = '#ff6987';
const siteURL = 'http://localhost:3000';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href= {siteURL}>
                Wemollo
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
    btn: {
        color: color,
        border: `1px solid ${color}`,
        fontSize: '12px'
    }
}));

export default function Footer(props) {
    const classes = useStyles();
    const { feedbackURL } = props;
    const handleFeedbackClick = () => {
        return window.open(feedbackURL, '_blank');
    }
    return (
        <footer className={classes.footer}>

            <Container maxWidth="lg">
        
                <Typography variant="h6" align="center" gutterBottom>
                    <p>Crafted with <FavoriteIcon style={{ color: 'red', fontSize:'25px' }}/> for education, in India.</p>
                </Typography>


                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    A product of <a style={{textDecoration:'none'}} href='http://www.tremollo.co' target='_blank'>Tremollo.co</a>
                </Typography>

                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Loving Wemollo? <Button onClick={handleFeedbackClick}>Help us serve better</Button>
                </Typography>

                <Copyright />
            </Container>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};