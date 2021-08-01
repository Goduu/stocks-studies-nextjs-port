import { Box, Button, Hidden, makeStyles, Paper, Typography } from "@material-ui/core"
import Image from "next/image"
import StatisticExample from '../../src/grid/statistic/StatisticExample'
import { MainCardTemplate } from "../grid/card/MainCardTemplate"
import { MultichartTemplate } from "../grid/multicharts/MultichartsTemplate"

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        background: theme.palette.common.white,
        width: '100%',
        height: '600px',
        overflow: 'hidden',
    },
}))
function PageDemo() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Images />
        </div>
    )
}

const useStylesImages = makeStyles((theme) => ({
    left: {
        position: 'absolute',
        zIndex: 1
    },
    right: {
        // borderLeft: '5px solid red',
        top: 0,
        position: 'absolute',
        zIndex: 1,
        right: '60%'
    },
    flt1: {
        paddingLeft: '150px',
        animation: '$movingleft 85s infinite'

    },
    flt2: {
        animation: '$movingright 51s infinite',
        display: 'flex',
    },
    flt3: {
        animation: '$movingleft 63s infinite'
    },
    flt4: {
        paddingLeft: '50px',
        animation: '$movingright 75s infinite',
        display: 'flex',
    },
    '@keyframes movingleft': {
        '0%': {
            transform: 'translateX(10vw)'
        },
        '50%': {
            transform: 'translateX(-5vw)'
        },
        '100%': {
            transform: 'translateX(10vw)'
        },
    },
    '@keyframes movingright': {
        '0%': {
            transform: 'translateX(-20vw)'
        },
        '50%': {
            transform: 'translateX(10vw)'
        },
        '100%': {
            transform: 'translateX(-20vw)'
        },
    },
    paper: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.common.white
    },
    titles: {

        padding: theme.spacing(3)
    },
    notebook: {
        display: 'flex',
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            display: 'inline',

        },
    },
    details: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(5),
        paddingTop: theme.spacing(5),
        paddingRight: '10vw',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '40vw'
    },
}))

function Images() {
    const classes = useStylesImages()

    return (
        <Paper elevation={5} className={classes.paper}>
            <Hidden mdDown>

                <div className={classes.left}>
                    <div className={classes.flt1}>
                        <MainCardTemplate name='Alphabet Inc.' ticker='GOOGL' price='USD 2715.12' industry='Communication Services' />
                    </div>
                    <div className={classes.flt2}>
                        <StatisticExample name='Current Ratio' value='1.55' />
                    </div>
                    <div className={classes.flt3}>
                        <MultichartTemplate chartData={chartsData1} />
                    </div>
                    <div className={classes.flt4}>
                        <StatisticExample name='ROE' value='28.29%' />
                        <StatisticExample name='ROA' value='12.76%' />
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.flt1}>
                        <StatisticExample name='Beta' value='1.18' />
                        <StatisticExample name='EBITDA' value='472.69M' />
                    </div>
                    <div className={classes.flt2}>
                        <StatisticExample name='P/B' value='7.25' />
                        <StatisticExample name='Quick Ratio' value='1.25' />
                    </div>

                </div>
            </Hidden>
            <Box className={classes.notebook}>
                <Hidden smDown>
                    <Image src="/img/gridpage.png" alt="me" width="1012" height="600" />
                </Hidden>
                <div className={classes.details}>
                    <Typography variant="h3" style={{ color: '#000', marginTop: '5vh' }} paragraph align='left'>
                        Make it your way
                    </Typography>
                    <Typography variant="h5" style={{ color: '#000', marginBottom: '10px' }} align='left'>
                        Chose how and what you wannt to see. Make it bigger, or smaller, change colors e much more settins, make it exactly like you want it
                        to be the make the best decisions! Take it to the next level!
                    </Typography>
                    <Button variant="contained" color="primary">
                        Level Up
                    </Button>

                </div>

            </Box>


        </Paper>
    )
}


const chartsData1 = [
    { "timestamp": 1612189800, "close": 1893.20625, },
    { "timestamp": 1612276200, "close": 1919.21875, },
    { "timestamp": 1612362600, "close": 2058.25, },
    { "timestamp": 1612449000, "close": 2053.25, },
    { "timestamp": 1612535400, "close": 2088.2, },
    { "timestamp": 1612794600, "close": 2084.225, },
    { "timestamp": 1612881000, "close": 2075.2125, },
    { "timestamp": 1612967400, "close": 2086.275, },
    { "timestamp": 1613053800, "close": 2088.75, },
    { "timestamp": 1613140200, "close": 2095.875, },
    { "timestamp": 1613485800, "close": 2110.875, },
    { "timestamp": 1613572200, "close": 2118.5, },
    { "timestamp": 1613658600, "close": 2105.75, },
    { "timestamp": 1613745000, "close": 2088.75, },
    { "timestamp": 1614004200, "close": 2054.625, },
    { "timestamp": 1614090600, "close": 2060.5, },
    { "timestamp": 1614177000, "close": 2083.75, },
    { "timestamp": 1614263400, "close": 2015.875, },
    { "timestamp": 1614349800, "close": 2021.875, },
    { "timestamp": 1614609000, "close": 2069.375, },
    { "timestamp": 1614695400, "close": 2064.75, },
    { "timestamp": 1614781800, "close": 2011.6875, },
    { "timestamp": 1614868200, "close": 2033.9375, },
    { "timestamp": 1614954600, "close": 2097.375, },
    { "timestamp": 1615213800, "close": 2007.5, },
    { "timestamp": 1615300200, "close": 2040.5625, },
    { "timestamp": 1615386600, "close": 2036.25, },
    { "timestamp": 1615473000, "close": 2100.5, },
    { "timestamp": 1615559400, "close": 2050, },
    { "timestamp": 1615815000, "close": 2054.4625, },

]

const chartsData2 = [
    { "timestamp": 1612189800, "close": 189.925, },
    { "timestamp": 1612276200, "close": 191.875, },
    { "timestamp": 1612362600, "close": 205.8, },
    { "timestamp": 1612449000, "close": 220.85, },
    { "timestamp": 1612535400, "close": 225.0, },
    { "timestamp": 1612794600, "close": 224.025, },
    { "timestamp": 1612881000, "close": 250.8125, },
    { "timestamp": 1612967400, "close": 235.975, },
    { "timestamp": 1613053800, "close": 215.75, },
    { "timestamp": 1613140200, "close": 220.875, },
    { "timestamp": 1613485800, "close": 217.875, },
    { "timestamp": 1613572200, "close": 235.5, },
    { "timestamp": 1613658600, "close": 284.75, },
    { "timestamp": 1613745000, "close": 221.75, },
    { "timestamp": 1614004200, "close": 219.625, },
    { "timestamp": 1614090600, "close": 230.5, },
    { "timestamp": 1614177000, "close": 241.75, },
    { "timestamp": 1614263400, "close": 210.875, },
    { "timestamp": 1614349800, "close": 225.6875, },
    { "timestamp": 1614609000, "close": 233.375, },
    { "timestamp": 1614695400, "close": 248.75, },
    { "timestamp": 1614781800, "close": 261.75, },
    { "timestamp": 1614868200, "close": 273.9375, },
    { "timestamp": 1614954600, "close": 289.375, },
    { "timestamp": 1615213800, "close": 290.5, },
    { "timestamp": 1615300200, "close": 304.25, },
    { "timestamp": 1615386600, "close": 285.625, },
    { "timestamp": 1615473000, "close": 320.55, },
    { "timestamp": 1615559400, "close": 350, },
    { "timestamp": 1615815000, "close": 360.425, },
]

export default PageDemo