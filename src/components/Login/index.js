import { connect } from 'react-redux';
import { login } from '../../actions';
import Login from './LoginPage';

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user,
  };
}

export default connect(mapStateToProps, { login })(Login);