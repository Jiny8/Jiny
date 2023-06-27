import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawMain from './Screens/DrawMain';
import ViewNote from './Screens/ViewNote';
import CreateNChangeNote from './Screens/CreateNChangeNote';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Note" >
        <Stack.Screen name="DrawMain" component={DrawMain} 
          options={{
            headerShown: false
          }}/>
        <Stack.Screen name="CreateNChangeNote" component={CreateNChangeNote} options={{
            headerShown: false
          }}/>
        <Stack.Screen name="ViewNote" component={ViewNote} options={{
            headerShown: false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;