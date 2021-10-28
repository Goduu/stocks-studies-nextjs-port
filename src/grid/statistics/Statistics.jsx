import { React, useState, useEffect, useCallback } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { StatisticsInterface } from './StatisticsInterface'
import { useStateContext } from '../../context/state.jsx';

function Statistics(props) {
    const theme = useTheme();

    const selectColor = (val) => {
        switch (val) {
            case 'dislike': {
                return theme.palette.triad.red
            }
            case 'like': {
                return theme.palette.triad.green
            }
            case 'star': {
                return theme.palette.triad.yellow
            }
            default: {
                return theme.palette.text.primary
            }
        }
    }

    const { t } = useTranslation();
    // const [statistics, setStatistics] = useState([])
    const [statistics, setStatistics] = useState(props.tickerData)
    const [statisticSelected, setStatisticSelected] = useState(props.params.statisticSelected || 'beta')
    const states = useStateContext()
    const token = states.auth.token
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [feedbackOpen, setFeedbackOpen] = useState(false);
    const [feedback, setFeedback] = useState(props.params.feedback);
    const [color, setColor] = useState(selectColor(props.params.feedback));
    const [openSettings, setOpenSettings] = useState(false);
    const [anchorFeedback, setAnchorFeedback] = useState(null);
    const [statisticGroup, setStatisticGroup] = useState(props.params.statisticGroup || 'keyStatistics');

    useEffect(() => {
        setStatistics(props.tickerData)
    }, [props.tickerData])

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            margin: theme.spacing(1),
            marginTop: theme.spacing(2) + 5,
        },
        paper: {
            margin: 0.8,
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
            height: 98
        },
        checkbox: {
            align: 'right'
        },
        link: {
            marginTop: '3px',
            overflow: 'hidden'
        },
    }));
    const classes = useStyles();
    const ticker = props.identifier

    const saveSettings = (value) => {
        setStatisticSelected(value)
        setFeedback(undefined)
        props.changeParams({
            id: props.i,
            content: { statisticGroup: statisticGroup, statisticSelected: value, feedback: undefined }
        })

    }


    const handleFeedback = (val) => {
        let newFeedback
        if (feedback === val) {
            setColor(undefined)
            newFeedback = undefined
        } else {
            let color = selectColor(val)
            setColor(color)
            newFeedback = val
        }
        setFeedback(newFeedback)

        props.changeParams({
            id: props.i,
            content: { statisticGroup: statisticGroup, statisticSelected: statisticSelected, feedback: newFeedback }
        })
        setFeedbackOpen(false)

    }


    const handleMouseOverFeedback = (event) => {
        if (feedback == undefined) {
            setFeedbackOpen(true)
            setAnchorFeedback(event.currentTarget)
        }

    }



    return (
        <StatisticsInterface
            classes={classes}
            anchorFeedback={anchorFeedback}
            theme={theme}
            color={color}
            feedback={feedback}
            feedbackOpen={feedbackOpen}
            settingsOpen={settingsOpen}
            statisticGroup={statisticGroup}
            statisticSelected={statisticSelected}
            statistics={statistics}
            setSettingsOpen={setSettingsOpen}
            saveSettings={saveSettings}
            setStatisticGroup={setStatisticGroup}
            handleFeedback={handleFeedback}
            handleMouseOverFeedback={handleMouseOverFeedback}
            t={t}
            {...props}
        />
    );

}


export { Statistics }