import { Box, Card, CardContent, CardMedia, Container, Grid, IconButton, ImageList, ImageListItem, makeStyles, Paper, SvgIcon, Typography } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NoteIcon from '@material-ui/icons/Note';
import FiberNewIcon from '@material-ui/icons/FiberNew';
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
        paddingTop: '-100px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: theme.spacing(50)
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
    featuresBox:{
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
            icon: <TrendingUpIcon style={{ fontSize: '5em', color: theme.palette.secondary.main }} />,
            mdDelay: "0",
            smDelay: "0"
        },
        {
            headline: "Statistics",
            text:
                "A bunch of ratios, statistics and key indicators avaliable for each stock.",
            icon: <LabelIcon style={{ fontSize: '5em', color: theme.palette.primary.main }} />,
            mdDelay: "400",
            smDelay: "0"
        },
        {
            headline: "Notes",
            text:
                "Make your own notes about every stocks",
            icon: <NoteIcon style={{ fontSize: '5em', color: theme.palette.triad.green }} />,
            mdDelay: "200",
            smDelay: "200"
        },
        {
            headline: "ESG Risk",
            text:
                "Compare your stocks with its peers",
            icon: <EcoIcon style={{ fontSize: '5em', color: theme.palette.triad.green }} />,
            mdDelay: "400",
            smDelay: "0"
        },
        {
            headline: "SWOT Analysis",
            text:
                "An specific Card for your swot analysis.",
            icon: <HdrWeakIcon style={{ fontSize: '5em', color: theme.palette.triad.red }} />,
            mdDelay: "400",
            smDelay: "0"
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
                                subtitle="Make your own stock watchlist and compare it's numbers in an easy way"
                                image={<Image src="/svg/watchlist.svg" alt="me" width="180" height="225" />}
                            />
                        </Grid>
                        <Grid item xs>
                            <SvgCard
                                title="Stock Grid"
                                subtitle="Create an amazing customized dashboard grid"
                                image={<Image src="/svg/grid.svg" alt="me" width="180" height="180" />}
                            />
                        </Grid>
                    </Grid>

                </div>

                <Typography variant='h4'>
                    Grid Cards
                </Typography>
                <Box className={classes.featuresBox}>
                    {features.map(f => {
                        return (
                            <Box className={classes.boxItem}>
                                <Paper style={{padding: '8px'}}>
                                    {f.icon}
                                    <Typography variant="h5" paragraph>
                                        {f.headline}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        {f.text}
                                    </Typography>
                                </Paper>
                            </Box>
                        )
                    })}
                </Box>
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

export default Features