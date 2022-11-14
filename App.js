import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AddScreen from './screens/AddScreen';
import ActivityScreen from './screens/ActivityScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = () =>{
  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions = {({route})=>({
        tabBarIcon: ({focused,size,colour}) => {
          let iconName;
          if (route.name === 'Home'){
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 5;
          } else if (route.name === 'Search'){
            iconName = focused ? 'search-sharp' : 'search-outline';
            size = focused ? size + 8 : size + 5;
          } else if (route.name === 'Add'){
            iconName = focused ? 'add-circle' : 'add-circle-outline';
            size = focused ? size + 8 : size + 5;
          } else if (route.name === 'Activity'){
            iconName = focused ? 'heart' : 'heart-outline';
            size = focused ? size + 8 : size + 5;
          } else if (route.name === 'Profile'){
            iconName = focused 
            ? 'person-circle-sharp' : 'person-circle-outline';
            size = focused ? size + 8 : size + 5;
          }
          return <Icon name={iconName} size={size} colour={colour} />;
        },
        })}
        tabBarOption={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: 'false',
          style:{
            backgroundColor: '#ffc125',
            height: 60,
          },
        }}>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Search' component={SearchScreen}/>
        <Tab.Screen name='Add' component={AddScreen}/>
        <Tab.Screen name='Activity' component={ActivityScreen}/>
        <Tab.Screen name='profile' component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
 
export default App;

