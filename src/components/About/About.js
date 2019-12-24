import React, {Component} from 'react';

class About extends Component{

  render(){
    return(
      <div className="flex">
        <img src="images/juniper-about.jpg" alt="Juniper" style={{height:'400px'}} />
        <div className="about-p">
          <p> Since a young age I've been fascinated by all things whimscial and mysterious.
              I would spend hours creating sculptures from household items. As I grew older I started 
              experimenting with all sorts of mediums - charcoal, wire-wrapped jewelry, glass blowing, 
              photography, basically anything I could get my hands on. I've amassed a sizeable body of 
              work, so now it's time to display it online for everyone to see! I will leave you all 
              with one of the most inspiring quotes I've ever read: 
          </p>
          <br />
          <p className="about-quote"> "On all earth, living creatures 
              rend one another, and feast with unutterable cruelty on their kith and kin. No worm-mind 
              can control a bestial man-body when it yearns to raven. Only man-minds instinctively 
              conditioned through the course of ten thousand generations can keep the human instincts 
              in thrall. Your body will destroy itself on earth, seeking the blood of its animal kin, 
              seeking the cool water where it can wallow at its ease. Seeking eventually destruction, 
              for the death-instinct is more powerful in it than the instincts of life and it will destroy 
              itself in seeking to return to the slime from which it sprang."
          </p>
        </div>
      </div>
    )
  }
}

export default About;