import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const styles = {
  title: {
    fontWeight: 600,
    fontSize: 48,
    textAlign: 'center',
  },
  form: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  btn: {
    display: 'block',
    width: 200,
    marginLeft: 'auto',
    marginTop: 35,
    marginRight: 'auto',
    paddingLeft: 15,
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: 600,
    backgroundColor: 'black',
    // color: '#E84A5F',
    color: 'white',
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 style={styles.title}>Registration page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          {/* Nickname */}
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your nickname"
          />
        </label>

        <label style={styles.label}>
          {/* Email */}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email as login"
          />
        </label>

        <label style={styles.label}>
          {/* Password */}
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </label>

        <button type="submit" style={styles.btn}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
