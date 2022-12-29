import AuthFooter from '@Auth/AuthFooter/AuthFooter';
import AuthHeader from '@Auth/AuthHeader/AuthHeader';
import GoogleAuthButton from '@Auth/GoogleAuthButton/GoogleAuthButton';
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
