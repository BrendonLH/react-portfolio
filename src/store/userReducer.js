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
            title:'project1',
            description: '',
            skillsUsed: [],
            img:''
        },
        {
            title:'project2',
            description: '',
            skillsUsed: [],
            img:''
        },
        {
            title:'project3',
            description: '',
            skillsUsed: [],
            img:''
        },
        {
            title:'project4',
            description: '',
            skillsUsed: [],
            img:''
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