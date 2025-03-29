import { Redirect } from 'expo-router';
import SignIn from './auth/SignIn/SignIn';


// user login oldugunda ise kosullu olarak home page'e yonlendir.
export default function Index() {
  return <Redirect href="/auth/SignIn/SignIn" />; 
}