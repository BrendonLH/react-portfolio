// fill out profile information here to update each section


const user = {
    userName: 'Brendon',
    email:'brendonhampton1988@gmail.com',
    // use the 'view profile' option at your social media and grab the link.
    faceBook:'https://www.facebook.com/Brendon.hampton/',
    gitHub:'https://github.com/BrendonLH',
    linkedIn:'https://www.linkedin.com/in/brendon-hampton-37132899/',
    // each background consists of 2 sections, use however many sections you need to
    background1:'We all start somewhere and I think I really like the feeling and satisfaction of seeing what Im building and the fruition of it. I seek out perfection like anyone else, sometimes that means working together and sometimes that means working alone. I try to balance both.',

    background2:'I come from a sales environment and I believe the gap between the customer and product is communication and in sales, communication is 99% of getting the right product for the right person. I feel this is lacking in the tech environment and I can help fill that gap.',

    // fill out as many as you need as they are mapped over anyways, you can add more remove them as needed. 
 
    projects: [
        {
            title:'React Portfolio',
            description: 'Application designed to be a fill in the blank template for anyone that wants to use for their own portfolio. ',
            skillsUsed: ['React ','Redux ','Sass'],
            image:'',
            github: 'https://github.com/BrendonLH/react-portfolio',
            url:'https://brendonh-react-portfolio.netlify.app/'
        },
        {
            title:'Munchkin',
            description: 'Web application modeled after the popular card game Munchkin using microservices.',
            skillsUsed: ['React ','Socket.io ','MongoDB'],
            image:'',
            github: 'https://github.com/meanJerkTime/401-final-react',
            url:'https://munchkin.netlify.app/'
        },
        {
            title:'MeMeal',
            description: 'User basic login to Lookup Recipes based on food allergies and caloric needs. ',
            skillsUsed: ['Node.js ','Express ','PostgreSQL'],
            image:'',
            github: 'https://github.com/Team-Pickle-juice/code-301-food-app',
            url:'https://food-app-final301.herokuapp.com/'
        },
        {
            title:'Escape Room',
            description: 'This game allows the user to have a virtual escape room experience. The user will need to go through the presented questions in order to escape/pass the game.',
            skillsUsed: ['HTML ','CSS ','Javascript'],
            image:'',
            github: 'https://github.com/Ellie-Lucky-Go-Mochi/Escape-Room',
            url:'https://ellie-lucky-go-mochi.github.io/Escape-Room/'
        }
        
    ]
}







export default function UserReducer(state = user, action) {
    const { type, payload } = action;
  
    switch(type) {
      case 'INITIALIZE':
        return {...state, user:payload}
        default: return state
    }
  }

  export const User = (payload) => {
    return {
      type: 'INITIALIZE',
      payload: payload,
    }
  }