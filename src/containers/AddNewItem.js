import AddNewItem from '../components/AddNewItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItemAction} from '../modules/portfolioModule';

const mapDispatchToProps = (dispatch)=> {
  return bindActionCreators({addItem: addItemAction}, dispatch)
};

export default connect(
  null,
  mapDispatchToProps
)(AddNewItem);
