// Uncomment these lines
// for use with Create React App
// import React from 'react';
// import ReactDOM from 'react-dom';

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

const App = () => (
  <div>
    <h1>Most dreaded villains</h1>
    <VillainProfile
      name="Voldemort"
      description="The most powerful dark wizard ever"
      avatar="https://pbs.twimg.com/profile_images/731112626856591362/EV7JHeB3.jpg"
    />
    <VillainProfile
      name="Darth Vader"
      description="The One who was supposed to bring balance to the Force"
      avatar="https://pbs.twimg.com/profile_images/3103894633/e0d179fc5739a20308331b432e4f3a51_400x400.jpeg"
    />
    <VillainProfile
      name="Sauron"
      description="The greatest peril on Middle Earth"
      avatar="https://pbs.twimg.com/profile_images/614524725973372928/70wMyQOQ_400x400.jpg"
    />
  </div>
);

const root = document.getElementById('root');

ReactDOM.render(
  <App />, root
);

