import React from 'react';
import { Searchbar } from 'react-native-paper';
import styles from "./FieldSearchBar.style";


export const defaultProps = Object.freeze({
  PLACEHOLDER: 'Search'
});

const FieldSearchBar = ({ style, placeholder = defaultProps.PLACEHOLDER, onChangeText: onChangeSearch, value, ...restProps }) => {
  const styleSheet = styles();
  // const [searchQuery, setSearchQuery] = React.useState('');
  // const onChangeSearch = query => setSearchQuery(query);
  return (
    <Searchbar
      style={[styleSheet.containerSearchBar, style]}
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      onSubmitEditing={()=>console.log('Search softkey pressed!')}
      value={value}
      {...restProps}
    />
  )
};
export default FieldSearchBar;
