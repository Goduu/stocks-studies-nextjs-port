import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, ImageList, ImageListItem, makeStyles, Paper, SvgIcon, Typography } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NoteIcon from '@material-ui/icons/Note';
import EcoIcon from '@material-ui/icons/Eco';
import HdrWeakIcon from '@material-ui/icons/HdrWeak';
import LabelIcon from '@material-ui/icons/Label';
import { useTheme } from '@material-ui/styles';
import Image from 'next/image'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '96%',
        minHeight: '100vh',
        zIndex: 4,
        padding: theme.spacing(5),
        // backgroundColor: theme.palette.secondary.dark
        backgroundColor: theme.palette.background.default
    },
    container: {
        width: '100%',
        minHeight: '100vh',
        zIndex: 4,
        background: `-webkit-linear-gradient(90deg, ${theme.palette.common.white} 93%, ${theme.palette.background.paper} 33%)`,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: theme.spacing(3)
        
    },
    boxItem: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(1)

    },
    mainFeatures: {
        margin: theme.spacing(5),
        marginBottom: theme.spacing(15),


    },
    featuresBox: {
        display: 'flex',
        [theme.breakpoints.down("md")]: {
            display: 'inline',

        },

    }
}))



function Features() {
    const classes = useStyles()
    const theme = useTheme()

    const features = [
        {
            headline: "Price and Volume Charts",
            text:
                "Have an overview about the price and volume of your stocks",
            icon: <TrendingUpIcon style={{ fontSize: '3em', color: theme.palette.common.white }} />,
            color: theme.palette.secondary.main,
        },
        {
            headline: "Statistics",
            text:
                "A bunch of ratios, statistics and key indicators avaliable for each stock.",
            icon: <LabelIcon style={{ fontSize: '3em', color: theme.palette.common.white }} />,
            color: theme.palette.primary.main,
        },
        {
            headline: "Notes",
            text:
                "Make your own notes about every stocks",
            icon: <NoteIcon style={{ fontSize: '3em', color: theme.palette.common.white }} />,
            color: theme.palette.triad.yellow,
        },
        {
            headline: "ESG Risk",
            text:
                "Compare your stocks with its peers",
            icon: <EcoIcon style={{ fontSize: '3em', color: theme.palette.common.white }} />,
            color: theme.palette.triad.green,
        },
        {
            headline: "SWOT Analysis",
            text:
                "An specific Card for your swot analysis.",
            icon: <HdrWeakIcon style={{ fontSize: '3em', color: theme.palette.common.white }} />,
            color: theme.palette.triad.red,

        },
    ]

    return (
        <div className={classes.container}>
            <Paper className={classes.root} elevation={8}>
                <div className={classes.mainFeatures}>

                    <Grid container spacing={3}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs>
                            <SvgCard
                                title="Watchlist"
                                subtitle="Make your own stock watchlist and compare their numbers in an easy way"
                                image={<Image src="/svg/watchlist.svg" alt="me" width="180" height="225" />}
                            />
                        </Grid>
                        <Grid item xs>
                            <SvgCard
                                title="Stock Grid"
                                subtitle="Create an amazing dashboard grid, customized as you wannt"
                                image={<Image src="/svg/grid.svg" alt="me" width="180" height="180" />}
                            />
                        </Grid>
                    </Grid>

                </div>

                <Grid container
                    spacing={2}
                    className={classes.featuresBox}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    {features.map(f => {
                        return (
                            <FeatureCard feature={f} />
                        )
                    })}
                </Grid>
            </Paper>
        </div>
    )
}

const useStylesCard = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: theme.spacing(2),
        height: '25vh',
        width: '35vw',
        [theme.breakpoints.down("sm")]: {
            display: 'inline',

        },
    },
    details: {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },


}));

function SvgCard(props) {
    const classes = useStylesCard();
    const theme = useTheme();
    const { title, subtitle, image } = props

    return (
        <Box className={classes.root}>
            {image}
            <div className={classes.details}>
                <Typography component="h5" variant="h4">
                    {title}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    {subtitle}
                </Typography>

            </div>

        </Box>
    );
}


const useStylesFCard = makeStyles((theme) => ({
    box: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: theme.spacing(2),
        marginTop: theme.spacing(5),


    },
    upperBox: {
        left: '10%',
        top: -theme.spacing(3),
        position: 'absolute',
        padding: theme.spacing(1),
        transition: 'transform .2s',
        '&:hover': {
            color: 'red',
            transform: 'scale(1.3)'
        }
    },
    mainBox: {
        paddingTop: theme.spacing(4),
        padding: theme.spacing(2),
        width: '100%',
        height: '180px'
    }


}));

function FeatureCard(props) {
    const classes = useStylesFCard();
    const theme = useTheme();
    const { feature } = props

    return (
        <Grid item xs={12} md={4} className={classes.box}>
            <Button className={classes.upperBox} style={{ backgroundColor: feature.color }}>
                {feature.icon}
            </Button>
            <Paper className={classes.mainBox} variant="outlined">
                <Typography variant="h6" paragraph align='center'>
                    {feature.headline}
                </Typography>
                <Typography variant="body1" color="textSecondary" align='center'>
                    {feature.text}
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Features