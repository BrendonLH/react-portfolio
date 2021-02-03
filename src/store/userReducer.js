// fill out profile information here to update each section
const user = {
    userName: 'Brendon',
    email:'BrendonHampton1988@gmail.com',
    background1:'',
    background2:'',
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