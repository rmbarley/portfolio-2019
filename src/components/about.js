import React from "react"

const About = () => {
  return (
    <section className="section container has-text-centered">
      <h2 className="title is-3 is-capitalized">Nice to meet you.</h2>
      <h3 className="subtitle is-3">I'm Ryan</h3>
      <p>
        I am a front end developer based in Cincinnati, OH. I graduated with
        degrees in English and physics from MCLA in North Adams, MA and have
        since worked as a science journalist, research historian, barista and
        software tester.
      </p>
      <h3 className="title is-4 is-capitalized">What I can do</h3>
      <p>
        <span className="has-text-weight-bold">My Most Recent Position:</span>
        Angular, RxJS, Java (SpringBoot), MySql, Bootstrap
      </p>
      <p>
        <span className="has-text-weight-bold">I'm Also Comfortable With:</span>
        HTML, CSS (SASS, non-Bootstrap frameworks like Bulma and Clarity),
        JavaScript, React, Python, C
      </p>
      <p>
        <span className="has-text-weight-bold">I'm Excited About:</span>
        Elixir / Phoenix, GraphQl, Static Site Generators (like this one!)
      </p>
    </section>
  )
}

export default About
