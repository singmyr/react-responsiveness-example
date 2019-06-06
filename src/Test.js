import React from 'react';
import { withResponsiveness } from 'react-responsiveness'

function Test(props) {
  return (
    <div>{props.responsive.breakpoints.join(' & ')}</div>
  );
}

export default withResponsiveness(Test);
