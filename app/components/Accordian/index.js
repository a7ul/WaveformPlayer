import React from 'react';
import PropTypes from 'prop-types';
import HeadText from './components/HeadText';

class Accordian extends React.Component {
  state = {
    expanded: false
  }
  toggle = (expand) => {
    this.setState((prevState, props) => {
      const result = { expanded: expand || !prevState.expanded };
      props.onToggle(result);
      return result;
    });
  }
  render() {
    const { headText, headComponent, children, ...extraProps } = this.props;
    const Head = headComponent;
    return ([
      Head
        ? <Head key="head" toggle={this.toggle} expanded={this.state.expanded} {...extraProps} />
        : <HeadText key="headText" toggle={this.toggle} expanded={this.state.expanded} text={headText} {...extraProps} />,
      this.state.expanded ? children : null
    ]);
  }
}
Accordian.defaultProps = {
  headText: '',
  headComponent: null,
  onToggle: () => {},
  children: null
};
Accordian.propTypes = {
  headText: PropTypes.string,
  headComponent: PropTypes.func,
  onToggle: PropTypes.func,
  children: PropTypes.node
};
export default Accordian;
