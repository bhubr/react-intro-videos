import React from 'react';

const taskList = [
  'Kill all the good guys',
  'Become the master of the world',
  'Become the master of the universe'
];

const ListExample = () => (
  <ul>
    {
      taskList.map(
        singleTask => (
          <li>{singleTask}</li>
        )
      )
    }
  </ul>
);

export default ListExample;