// import React from "react";
// import {View, Text} from 'react-native'

// const SearchScreen = () => {
//     return (
//         <View 
//         style ={{
//             height: '100%',
//             borderColor: '#54CBFF',
//             justifyContent: 'center',
//             alignItems: 'center',
//         }}>
//             <Text style={{fontSize: 48, fontWeight: 'bold', letterSpacing: 5}}>
//                 Search
//             </Text>
//         </View>
//     );
// };

// export default SearchScreen;

import React from 'react';
import {Text, View} from 'react-native';

const SearchScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search</Text>
    </View>
  );
};

export default SearchScreen;