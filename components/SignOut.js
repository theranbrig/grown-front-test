import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Icon } from 'semantic-ui-react';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const SignOut = () => (
  <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
    {signout => (
      <Button onClick={signout} icon labelPosition="right" className="signout-button">
        Logout <Icon name="sign out" />
      </Button>
    )}
  </Mutation>
);
export default SignOut;
