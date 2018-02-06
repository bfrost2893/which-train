import { connect } from 'react-redux';
import { updateAddress } from '../actions';
import AddressInput from '../components/AddressInput';

const mapStateToProps = ({ address }, { addressType }) => {
  return {
    addressType: addressType,
    address: address[addressType] || '',
  };
};

const mapDispatchToProps = (dispatch, { addressType }) => {
  return {
    onUpdateAddress(address) {
      dispatch(updateAddress(addressType, address));
    },
  };
};

const UpdateAddress = connect(mapStateToProps, mapDispatchToProps)(AddressInput);
export default UpdateAddress;
