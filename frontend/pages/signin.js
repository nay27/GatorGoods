/*
*   Page for sign in
*/

import Signin from "../components/Signin";
import Grid from "../components/styles/Grid";
import Centered from "../components/styles/Centered";
import ReactGA from 'react-ga';

ReactGA.pageview('/signin');

const SigninPage = () => (
   <Centered>
    <Grid>
      <Signin />
    </Grid>
   </Centered>
);

export default SigninPage;
