import React from 'react';

const VillainProfile = props => (
  <div className="media">
    <img
      src={props.avatar}
      className="mr-3"
      alt={props.name}
      style={{
        maxWidth: '100px'
      }}
    />
    <div className="media-body">
      <h5 className="mt-0">{props.name}</h5>
      {props.description}
    </div>
  </div>
);

export default VillainProfile;
