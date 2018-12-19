import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';
import Login from './Login';

const LoginCheck = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <Login />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

LoginCheck.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginCheck;
