const textData = [
  {
    id:'selectim',
    coverName: 'Selectim - UI revamp',
    name: 'SELECTIM UI',
    github: 'https://github.com/dylonion/Selectim',
    icon: 'selectim-ui.png',
    summary: 'Search engine advanced options UI',
    description: `
      The UI of a search engine site for French realtors built using Javascript
      with jQuery and jQuery UI on the front-end and PHP on the server side.
      Features included infinite scrolling of search results, several inputs with
      autocomplete functionality, a history of prior searches, and a help/bug report chat system.`,
    images: ['Selectim_Mockup_EssaiGratuit.jpg','Selectim_Mockup_Home.jpg','Selectim_Mockup_LogIn.jpg','selectim-ui.png'],
    liveLink: false
  },
  {
    id:'standup',
    coverName: 'General Assembly - Live Morale Tracker',
    name: 'Standup!',
    github: 'https://github.com/dylonion/Standups',
    icon: 'focus-group-icon.png',
    summary: 'Group morale tracker',
    description: `
      An app to allow professional or educational groups to graph how
      they feel about a project or process from day to day, and describe
      their daily wins and losses (derived from the General Assembly tradition of “Standups”)
      enabling visualizations of emotional progression over time. The app was written in Javascript,
      using React on the front-end (with D3, a data visualization library) and Node/Express on the back-end.`,
    liveLink: false
  },
  {
    id:'focusgroup',
    coverName: 'General Assembly - Focus Group Organizer',
    name: 'Focus Groups App',
    github: 'https://github.com/OldLace/Focus-Group',
    icon: 'focus-group-icon.png',
    summary: 'Focus group app / Corporate group management',
    description: `
      An app that allows organizations to search and group users
      by custom criteria and demographic data. Working in a group
      of three, we each were involved in all aspects of the project -
      a frontend built with React and a backend using node/express.
      On the server side, I am most proud of the work I did to generate SQL queries
      dynamically based on user input. I also wrote a script to programmatically
      generate SQL seeds populated with fake users for testing purposes.
      On the frontend, I was involved with implementing complex forms
      and the conditional rendering of a dual-facing app.`,
    liveLink: false
  },
  {
    id:'bigfish',
    coverName: 'General Assembly - Javascript Browser Game',
    name: 'Big Fish, Little Fish',
    github: null,
    icon: 'big-fish-game.png',
    summary: 'Browser arcade style game',
    description: `
      A browser­ based game in Javascript using the principles
      of Object Oriented Programming. The user is a fish, who
      must avoid larger predators and grow larger by preying on smaller fish.`,
    liveLink: false
  }
]

export default textData
