import React from 'react'

export default function Header() {
  return (
      <div className="row-c-fe nav header txt_white bold" >
          <div className="row-c-fe tabs">
            <div className="tab">Home</div>
            <div className="tab">Interaction</div>
            <div className="tab">Roadmap</div>
            <div className="tab">Crew</div>
            <div className="tab"><a href='https://plutopigs.gitbook.io/plutopigs-whitepaper/about-plutopigs/introduction-and-values' target="_blank">Whitepaper</a></div>
            <div className="tab">FAQ</div>
          </div>
          <div id="social-links-container-pc" className="row-c-c">
                <a href="https://discord.com/invite/dQEMFTVWx2" className="link-btn discord-btn" target="_blank">"</a> 
                <a href="#" className="link-btn magic-eden-btn" target="_blank">"</a> 
                <a href="https://twitter.com/plutopigsnft" className="link-btn twitter-btn" target="_blank">"</a> 
            </div>
      </div>
  )
}
