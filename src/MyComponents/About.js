import React from 'react'

export const About = () => {

  let myStyle={
    minHeight:"70vh",
    margin:"40px auto"
  }

  let tstyle={
    width: "55rem"
  }
  return (
    <div className='px-5'style={myStyle}>
        <h2> About</h2>
        <p className=" text-wrap" style={tstyle} >To-do lists can help you get, and stay, on top of important projects and piles of tasks or decisions. For instance, imagine you're heading a team that's working on a project. There are so many tasks to do, and so many people doing them, that staying on top of it all seems overwhelming.</p>

        <img className='' src="https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU" alt="planner" ></img>
    </div>
  )
}
