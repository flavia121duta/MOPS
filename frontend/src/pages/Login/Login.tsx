import './login.css';
import { useState } from 'react';
import { RequestStatus } from '../../../types/RequestStatus';
import Authentication from '../../../services/auth';
import IconGoogle from '../../assets/icons/icon_google.svg';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import ButtonTertiary from '../../components/Buttons/ButtonTertiary';
import ButtonSecondary from '../../components/Buttons/ButtonSecondary';
import Loading from '../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const iconGoogleObject = {
  src: IconGoogle,
  title: 'Google Logo',
  altText: 'Google Logo',
};

export default function Login() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<RequestStatus>({ state: 'idle' });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function updateEmail(newValue: string) {
    if (status.state == 'failure') setStatus({ state: 'idle' });
    setEmail(newValue);
  }
  function updatePassword(newValue: string) {
    if (status.state == 'failure') setStatus({ state: 'idle' });
    setPassword(newValue);
  }

  async function loginSubmitHandle(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setStatus({ state: 'pending' });
    try {
      const Auth = new Authentication();
      const response = await Auth.login(email, password);
      //! TODO: Add login functionality
      navigate('/');
    } catch (error) {
      setStatus({ state: 'failure', errorMessage: error.message });
    }
  }

  return (
    <>
      <header className="content-small login-header">
        <Logo />
      </header>
      <main className="login-container">
        <h1>Login</h1>
        <form>
          <Input
            className={`${email != '' ? 'not-empty' : 'empty'} ${
              status.state == 'failure' ? 'error' : ''
            }`}
            label="Email"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
          <Input
            className={`${password != '' ? 'not-empty' : 'empty'} ${
              status.state == 'failure' ? 'error' : ''
            }`}
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          {status.state === 'failure' ? (
            <p className="error">{status.errorMessage}</p>
          ) : null}
          <ButtonPrimary fullwidth onClick={loginSubmitHandle}>
            {status.state === 'pending' ? <Loading /> : 'Login'}
          </ButtonPrimary>
        </form>
        <ButtonTertiary className="s-align-start">
          Forgot password?
        </ButtonTertiary>
        <ButtonSecondary
          fullwidth
          icon={iconGoogleObject}
          onClick={() => {
            //! TODO: Add social login functionality
          }}
        >
          Login using Google
        </ButtonSecondary>
        <ButtonSecondary
          fullwidth
          onClick={() => {
            navigate('/register');
          }}
        >
          Sign Up
        </ButtonSecondary>
      </main>
      <aside className="login">
        <ButtonTertiary
          className="s-align-end btn-skip"
          onClick={() => navigate('/')}
        >
          Skip
        </ButtonTertiary>
      </aside>
    </>
  );
}
