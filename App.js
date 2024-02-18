import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./src/pages/PageHome/Home"
import { Galeria } from "./src/pages/PagesGaleria /Galeria"
import { Login } from "./src/pages/PageLogin/Login"
import { Perfil } from "./src/pages/PageLogin/PagePerfil/Perfil"
import { Ionicons } from '@expo/vector-icons'
import { Agenda } from './src/pages/PageAgenda/Agenda';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Conta = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Perfil' component={Perfil} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Agenda"
          component={Agenda}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Galeria"
          component={Galeria}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="images" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Conta"
          component={Conta}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-sharp" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
