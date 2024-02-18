import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from "./src/pages/PageHome/Home"
import { Galeria } from "./src/pages/PagesGaleria /Galeria"
import { Login } from "./src/pages/PageLogin/Login"
import { Perfil } from "./src/pages/PageLogin/PagePerfil/Perfil"
import { Ionicons } from '@expo/vector-icons'
import { Agenda } from './src/pages/PageAgenda/Agenda';
import * as S from './AppStyles'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';;


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const UserProfile = () => {

  const profileImage = require('./src/images/Avatar.png');

  return (
    <S.ProfileContainer>
      <S.ProfileImage source={profileImage} />
      <S.ProfileName>Seu Nome</S.ProfileName>
    </S.ProfileContainer>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <UserProfile />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};


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
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Galeria"
          component={Galeria}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="images" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Agenda"
          component={Agenda}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
        />

        <Drawer.Screen
          name="Conta"
          component={Conta}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-circle-sharp" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;
