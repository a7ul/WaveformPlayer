import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import * as styles from './style';
import { DROPPABLE_IDS, DRAGGABLE_TYPES } from '../../config/editableLayout';
import PlayerTitle from './components/PlayerTitle';
import * as actions from './redux';
import ShowSideBarButton from './components/ShowSideBarButton';

class SideBar extends React.Component {
  getDraggableSideMenuItem = (sideMenuItem, index) => {
    const { pluginId, label } = sideMenuItem;

    return (
      <Draggable key={pluginId} draggableId={pluginId} type={DRAGGABLE_TYPES.SIDEBAR_ITEM} index={index}>
        {
          (provided/* , snapshot */) => (
            <div>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <h4>{label}</h4>
              </div>
              {provided.placeholder}
            </div>
          )
       }
      </Draggable>
    );
  }

  render() {
    const {
      editable, sideMenuItems, setSideMenuVisibility, visible
    } = this.props;
    return (
      [
        <Droppable
          key="sideMenu"
          droppableId={DROPPABLE_IDS.SIDEBAR}
          type={DRAGGABLE_TYPES.SIDEBAR_ITEM}
          direction="vertical"
          isDropDisabled={!editable}
        >
          {
          (provided, snapshot) => (
            <styles.Container
              editEnabled={editable}
              visible={visible}
              isDraggingOver={snapshot.isDraggingOver}
              innerRef={provided.innerRef}
            >
              <PlayerTitle setSideMenuVisibility={setSideMenuVisibility} />
              {
                sideMenuItems.map((sideMenuItem, index) => this.getDraggableSideMenuItem(sideMenuItem, index))
              }
              {provided.placeholder}
            </styles.Container>
        )}
        </Droppable>,
        <ShowSideBarButton key="showSideMenuIcon" visible={!visible} setSideMenuVisibility={setSideMenuVisibility} />
      ]
    );
  }
}

SideBar.defaultProps = {
  editable: false,
  sideMenuItems: []
};

SideBar.propTypes = {
  editable: PropTypes.bool,
  sideMenuItems: PropTypes.array,
  visible: PropTypes.bool.isRequired,
  setSideMenuVisibility: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  sideMenuItems: state.sideMenu.items,
  editable: state.sideMenu.editable,
  visible: state.sideMenu.visible
});

const mapDispatchToProps = (dispatch) => ({
  setSideMenuVisibility: (visible) => dispatch(actions.setSideMenuVisibility(visible))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
