import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styles from "./FieldSearchBar.style";
const FieldSearchBar = () => {
  const styleSheet = styles();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View  style={[styleSheet.containerSearchBar]}>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
  );
};
export default FieldSearchBar;
