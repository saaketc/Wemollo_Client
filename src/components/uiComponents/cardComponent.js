 import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const color = '#ff6987';


const useStyles = makeStyles({
    root: {
        maxWidth: 600,
    },
    card: {
        maxWidth: 600,

    },
    media: {
        height: 140,
    },
    heading: {
        fontWeight: 600,
    },
    productType: {
        color: color,
        fontWeight: 500
    },
    url: {
        color: 'blue',
        fontWeight: 400
    }
});

export default function CardComponent(props) {
    
    const { data, image, mediaHeight, showDescription, onClick } = props;
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={() => onClick(data)}>
            <CardActionArea>
                <CardMedia
                    className={mediaHeight ? classes.media : null}
                    alt={image ? data.title : null}
                    image={image}
                    title={data.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" className={classes.heading} component="h2">
                       {data.title}
          </Typography>
                    <Typography variant="body2" className={classes.url} component="p">
                        {data.url}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {showDescription ? data.description : ''}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button> */}
                
                <Typography variant="body2" className={classes.productType} component="p">
                    {data.typeOfProduct ? `Product Type: ` : ''} {data.typeOfProduct}
                </Typography>
            </CardActions>
        </Card>
    );
}