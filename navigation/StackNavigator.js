import { createStackNavigator } from 'react-navigation';
import SignUp from '../screens/SignUpScreen';
import SignIn from '../screens/SigninScreen';
import TransactionInformation from '../screens/TransactionInformation';
import Facture from '../screens/FactureScreen';

export const SignUpNavigator = createStackNavigator(
  {
    SignUp: SignUp
  }
);

export const SignInStackNavigator = createStackNavigator(
    {
      SignIn: SignIn
    }
  );

  export const TransactionInfo = createStackNavigator(
    {
        TransactionInformation: TransactionInformation
    }
  );

  export const FactureStackNavigator = createStackNavigator(
    {
        Facture: Facture
    }
  );
