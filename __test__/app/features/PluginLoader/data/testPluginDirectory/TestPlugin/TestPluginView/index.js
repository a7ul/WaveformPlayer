import React from 'react';
import { connect } from 'react-redux';

class TestPluginView extends React.Component {
  render() {
    return (
      <div>
       TEST PLUGIN
      </div>
    );
  }
}

TestPluginView.defaultProps = {

};

TestPluginView.propTypes = {

};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TestPluginView);
