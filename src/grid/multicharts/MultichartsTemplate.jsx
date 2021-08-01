import { ComposedChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {
    Paper,
    Grid,
    Typography,
    makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    header: {
        height: '30%',
        padding: theme.spacing(2),
    },
    chart: {
        padding: theme.spacing(1),
        height: '80px',
    },

}));

function MultichartTemplate(props) {
    const classes = useStyles()
    const {chartData} = props

    return (
        <Paper  >
            <div className={classes.header}>
                <Grid
                    justifyContent="space-between"
                    alignItems="flex-start"
                    container spacing={1}>
                    <Grid xs={6} >
                        <Typography variant="subtitle1">
                            Price
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Last 31 Days
                        </Typography>

                    </Grid>

                </Grid>
            </div>

            <div className={classes.chart}>

                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={300}
                        data={chartData}
                        type="number"
                    >
                        <XAxis dataKey="timestamp" hide />
                        <YAxis
                            domain={[dataMin => (0.95 * dataMin), dataMax => (1.05 * dataMax)]}
                            yAxisId="right"
                            orientation="right"
                            hide
                        />
                        <YAxis
                            domain={[dataMin => (0.95 * dataMin), dataMax => (1.05 * dataMax)]}
                            yAxisId="left"
                            orientation="left"
                            hide
                        />
                        <Line
                            dataKey={'close'}
                            strokeWidth={2}
                            dot={false}
                            yAxisId={"right"}
                            connectNulls />
                    </ComposedChart>

                </ResponsiveContainer>
            </div>
        </Paper >
    )
}




export { MultichartTemplate }