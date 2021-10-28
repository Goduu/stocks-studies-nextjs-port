import { MainCard } from './card/MainCard';
import { Note } from './note/Note';
import { Title } from './title/Title';
import { Swot } from './swot/Swot';
import { Multichart } from './multicharts/Multicharts';
import { Esg } from './esg/Esg';
import { Statistics } from './statistics/Statistics';


export const getCardProps = (type, functions, gridItems, ticker, id, tickerData) => {
  console.log("TICKER DATA getCardProps", tickerData)

  let props = {
    params: {},
    i: id,
    x: (gridItems.items.length * 2) % (gridItems.cols || 12),
    y: 99, // puts it at the bottom
    identifier: ticker,
    type: type,
    tickerData: tickerData,
    onRemoveItem: (id) => functions.onRemoveItem(id),
    changeParams: (p) => functions.changeParams(p),
    handleFullScreen: (card) => functions.handleFullScreen(card)
  }
  let component
  switch (type) {
    case 'note':
      props = {
        ...props,
        w: 3,
        h: 2,
        minH: 2,
        maxW: 5,
        minW: 2,
      }
      component = {
        key: id,
        dataGrid: props,
        component: <Note  {...props} />,
      }
      break
    case 'card':
      props = {
        ...props,
        onRemoveItem: undefined,
        w: 3,
        h: 2,
        minW: 2,
        maxW: 3,
        minH: 2,
        maxH: 2,
      }
      component = {
        key: id,
        dataGrid: props,
        component: <MainCard  {...props} />,
      }
      break
    case 'multichart':
      props = {
        ...props,
        w: 5,
        h: 2,
        params: { period: 180 },

      }
      component = {
        key: id,
        dataGrid: props,
        component: <Multichart  {...props} />,
      }
      break

    case 'swot':
      props = {
        ...props,
        w: 4,
        h: 2,
        minH: 2,
        minW: 4,
      }
      component = {
        key: id,
        dataGrid: props,
        component: <Swot  {...props} />,
      }
      break

    case 'esg':
      props = {
        ...props,
        w: 5,
        h: 3,
        minH: 3,
        minW: 5,
        maxH: 3
        // editIndicatorList: editIndicatorList
      }
      component = {
        key: id,
        dataGrid: props,
        component: <Esg  {...props} />,
      }
      break
    case 'statistics':
      props = {
        ...props,
        w: 2,
        h: 1,
        minH: 1,
        minW: 1,
        maxH: 1,
        maxW: 3,
        // editIndicatorList: editIndicatorList
      }
      component = {
        key: id,
        dataGrid: props,
        component: <Statistics  {...props} />,
      }
      break
    case 'title':
      props = {
        ...props,
        w: 2,
        h: 1,
        minH: 1,
        minW: 1,
        maxH: 1,
        maxW: 6,
        // editIndicatorList: editIndicatorList
      }
      component = {
        key: id,
        dataGrid: props,
        component: <Title  {...props} />,
      }
      break

  }
  return component
}


export const getRestoredItems = (g, ticker, props, functions, tickerData) => {
  let gridItems_
  let type = g.type
  let id = g.id
  let params = g.params
  props = {
    ...props,
    params: params,
    tickerData: tickerData,
    onRemoveItem: (i) => functions.onRemoveItem(i),
    changeParams: (p) => functions.changeParams(p),
    handleFullScreen: (card) => functions.handleFullScreen(card)

  }
  const componentProps = {
    key: id,
    dataGrid: props
  }

  if (type === 'card') {
    props = {
      ...props,
      identifier: ticker,
      onRemoveItem: null
    }
    gridItems_ = {
      ...componentProps,
      component: <MainCard  {...props} />,
    }



  } else if (type === 'note') {
    props = {
      ...props,

    }
    gridItems_ = {
      ...componentProps,
      component: <Note  {...props} />,
    }

  } else if (type === 'multichart') {
    props = {
      ...props,
      identifier: ticker,
    }
    gridItems_ = {
      ...componentProps,
      component: <Multichart  {...props} />,
    }

  }
  else if (type === 'swot') {
    props = {
      ...props,
      identifier: ticker,
    }
    gridItems_ = {
      ...componentProps,
      component: <Swot  {...props} />,
    }
  }
  else if (type === 'esg') {
    props = {
      ...props,
      identifier: ticker,
    }
    gridItems_ = {
      ...componentProps,
      component: <Esg  {...props} />,
    }
  }
  else if (type === 'statistics') {
    props = {
      ...props,
      identifier: ticker,
    }
    gridItems_ = {
      ...componentProps,
      component: <Statistics  {...props} />,
    }
  }
  else if (type === 'title') {
    props = {
      ...props,
      identifier: ticker,
    }
    gridItems_ = {
      ...componentProps,
      component: <Title  {...props} />,
    }
  }
  return {
    gridItems: gridItems_,
    gridElements: { id: id, type: type, params: params }
  }
}



export const getFullScreenCard = (type, props) => {
  console.log("TICKER DATA getFullScreenCard", props)

  let component
  switch (type) {
    case 'multichart':
      component = <MultichartsFullscreen  {...props} />

      break
  }
  console.log("RETURN FULL", component,type)
  return component
}