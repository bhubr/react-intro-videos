import React from 'react';
import VillainProfile from './VillainProfile';

const villainsList = [
  {
    name: "Voldemort",
    description: "The most powerful dark wizard ever",
    avatar: "https://pbs.twimg.com/profile_images/731112626856591362/EV7JHeB3.jpg"
  },
  {
    name: "Darth Vader",
    description: "The One who was supposed to bring balance to the Force",
    avatar: "https://pbs.twimg.com/profile_images/3103894633/e0d179fc5739a20308331b432e4f3a51_400x400.jpeg"
  },
  {
    name: "Sauron",
    description: "The greatest peril on Middle Earth",
    avatar: "https://pbs.twimg.com/profile_images/614524725973372928/70wMyQOQ_400x400.jpg"
  },
  {
    name: "Agent Smith",
    description: "Neo's best enemy",
    avatar: "https://imgix.ranker.com/user_node_img/21/409116/original/agent-smith-film-characters-photo-u5?w=125&h=125&fit=crop&crop=faces&q=60&fm=pjpg"
  }
];

const VillainGallery = () => (
  <div>
    {
      villainsList.map(
        (singleVillain, index) => (
          <VillainProfile
            key={index}
            name={singleVillain.name}
            description={singleVillain.description}
            avatar={singleVillain.avatar}
          />
        )
      )
    }

  </div>
);
export default VillainGallery;
