import AuthFooter from '@AuthContainer/Auth/AuthFooter/AuthFooter';
import AuthHeader from '@AuthContainer/Auth/AuthHeader/AuthHeader';
import GoogleAuthButton from '@AuthContainer/Auth/GoogleAuthButton/GoogleAuthButton';
import './Auth.css';

function Auth() {
  return (
    <div className="auth">
      <AuthHeader />
      <GoogleAuthButton />
      <AuthFooter />
    </div>
  );
}

export default Auth;
