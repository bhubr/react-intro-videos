import React from 'react';
import VillainProfile from './VillainProfile';

const App = () => (
  <div className="container">
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

export default App;