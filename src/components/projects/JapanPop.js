import React from 'react'

class JapanPop extends React.Component {
    render(){
        return(
        <span className='border-1px width-25pct inline-block box-sizing'>
            <p className='margin-20px font-family-lobster font-size-30px'>Japan Population Chart</p>
            <div className='flex-center overflow position-relative hover-display-detail hover-transform-scale font-family-arial'>
              <img className='projectImg' src={this.props.JapanPopulation} alt=''/>
              <div className='imgDetail'>
                <h1>Title: Japan Population Chart</h1>
                <p className='margin-b-10px'>Graphs individual Japan's 47 prefecture population growth against years (1960-2045).</p>
                <p className='margin-b-10px'>Makes individual, single API call when a prefecture button is clicked.</p>
                <p>Front-End: React.js</p>
                <p>Graph Library: Recharts</p>
                <p>API-Call: Axios</p>
                <div className='text-align'>
                  <a 
                    className='inline-block bg-white font-color-black padding-10px ' 
                    href="https://dulerong.github.io/japan-population/" 
                    target="_blank">
                    CLICK TO SEE
                  </a>
                </div>
              </div>
            </div>
        </span>
        )
    }
}

export default JapanPop