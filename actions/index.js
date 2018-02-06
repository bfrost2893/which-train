export const updateAddress = (addressType, address) => {
  return {
    type: 'UPDATE_ADDRESS',
    addressType,
    address,
  };
};
