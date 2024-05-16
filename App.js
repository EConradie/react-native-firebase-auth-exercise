import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();


// TODO: Navigation Container

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //Listening if my use is logged in or out
    const unscubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in user: " + user.email);
        setIsLoggedIn(true);
      } else {
        console.log("Not logged in");
        setIsLoggedIn(false);
      }
    })
    return unscubscribe;
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
            <Stack.Screen name="Profile" component={ProfileScreen} />
        ) : (
          <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
