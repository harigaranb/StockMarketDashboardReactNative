// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './utilities/store';
import Dashboard from './components/Dashboard';
import StockList from './components/StockList';
import SearchBar from './components/SearchBar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
);

const StockStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="StockList" component={StockList} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SearchBar" component={SearchBar} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Stocks" component={StockStack} />
          <Tab.Screen name="Search" component={SearchStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
