import {Fragment} from 'react';

import {CustomBadge} from "./CustomBadge";

export const Heading = ({type = 1, count = null, children}) => {
  return (
    <Fragment>
      {type === 1 && (
        <h2 className="fw-bold mb-3">
          {children}
          {count >= 0 && (<CustomBadge type="count">{count}</CustomBadge>)}
        </h2>
      )}
    </Fragment>
  );
}
