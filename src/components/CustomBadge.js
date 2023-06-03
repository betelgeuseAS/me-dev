import {Fragment} from 'react';

import {Badge} from 'reactstrap';

export const CustomBadge = ({type = 'list', children}) => {
  return (
    <Fragment>
      {type === 'list' && (
        <Badge style={{
          borderRadius: '.125rem',
          marginRight: 8,
          fontWeight: 400,
          color: 'inherit'
        }} color="custom-badge">{children}</Badge>
      )}

      {type === 'count' && (
        <Badge style={{
          borderRadius: '.125rem',
          fontWeight: 400,
          fontSize: '.85rem',
          color: 'inherit',
          padding: '2px 4px',
          position: 'relative',
          top: '-14px',
          left: '8px'
        }} color="custom-badge">{children}</Badge>
      )}
    </Fragment>
  );
}
