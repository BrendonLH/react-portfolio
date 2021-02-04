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
            description: 'description',
            skillsUsed: ['skill1 ','skill2 ','skill3'],
            image:'https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm90JTIwYXZhaWxhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            github: 'github',
            url:'url'
        },
        {
            title:'project2',
            description: 'description',
            skillsUsed: ['skill1 ','skill2 ','skill3'],
            image:'https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm90JTIwYXZhaWxhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            github: 'github',
            url:'url'
        },
        {
            title:'project3',
            description: 'description',
            skillsUsed: ['skill1 ','skill2 ','skill3'],
            image:'https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm90JTIwYXZhaWxhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            github: '#',
            url:'#'
        },
        {
            title:'project4',
            description: 'description',
            skillsUsed: ['skill1 ','skill2 ','skill3'],
            image:'https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm90JTIwYXZhaWxhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            github: 'github',
            url:'url'
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