import React from "react";
import PropTypes from "prop-types";
import RGL, { Responsive, WidthProvider } from "react-grid-layout";
import _ from "lodash";
import { SelectMenu } from './selectmenu/SelectMenu';
import ActionMenu from './actionmenu/ActionMenu';
import NewDashboard from './newdashboard/NewDashboard';
import { Dialog, Paper } from '@material-ui/core';

// const ResponsiveReactGridLayout = WidthProvider(RGL);
const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
function GridInterface(props) {
  // Variables
  let { review, gridItems, identifier, newDashboardClosed, classes, fullScreenItem, layouts } = props
  // Functions
  let { onAddItem, deleteDashboard, selectDashboard, newDashboard, currentBreakpoint,
    onLayoutChange, onBreakpointChange, handleBack, chooseIdentifier, fullScreen, handleFullScreen } = props

  return (
    <>
      <div hidden={!newDashboardClosed}>
        {identifier && <>
          <ActionMenu onClose={onAddItem} handleDeletDashboard={deleteDashboard} hidden={review} />
          <SelectMenu
            selectDashboard={selectDashboard}
            identifier={identifier}
            handleDeletDashboard={deleteDashboard}
            handleAddDashboard={newDashboard}
            hidden={review} />

          <ResponsiveReactGridLayout
            onLayoutChange={onLayoutChange}
            layouts={layouts}
            onBreakpointChange={onBreakpointChange}
            {...props}
            margin={[5, 5]}
            rowHeight={99}
            columnHeight={100}
          >
            {gridItems.items.map(el => {
              return (
                <Paper key={el.key} data-grid={el.dataGrid}>
                  {el.component}
                </Paper>
              )
            })}
          </ResponsiveReactGridLayout>
        </>
        }
        {/* <ParticlesMain density={100}/> */}
        <br />
      </div>
      <Dialog open={fullScreen} onClose={handleFullScreen}>
        asd
        {fullScreenItem}
      </Dialog>

      < NewDashboard
        handleBack={handleBack}
        chooseIdentifier={(ticker) => { chooseIdentifier(ticker) }}
        closed={newDashboardClosed} />

    </>
  )

}

GridInterface.propTypes = {
  review: PropTypes.bool.isRequired,
  gridItems: PropTypes.object.isRequired,
  identifier: PropTypes.string.isRequired,
  newDashboardClosed: PropTypes.bool.isRequired,
  onAddItem: PropTypes.func.isRequired,
  deleteDashboard: PropTypes.func.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  newDashboard: PropTypes.func.isRequired,
  onLayoutChange: PropTypes.func.isRequired,
  onBreakpointChange: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  chooseIdentifier: PropTypes.func.isRequired
};

export { GridInterface };