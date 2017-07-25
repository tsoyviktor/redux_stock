import PortfolioList from '../components/PortfolioList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeItemAction} from '../modules/portfolio';
import {values} from 'lodash/object'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeItem: removeItemAction,
  }, dispatch);
};

const mapSateToProps = (state) => {
  return {
    items: values(state.portfolio)
  }
};

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(PortfolioList);
