import React from 'react';

class Home extends React.Component {

  constructor(){
    super()
    this.state={
    
    }
  }
  

  render() {

    return (
      <React.Fragment>
          <div class="container component" data-aos="fade-up" >
            <div class="row">

              <div class="col-md-2 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="100">
                  <div class="member-img">
                    <img style={{height:120, width:"90%", marginLeft:"5%", marginTop:10}} src={this.props.avatar} class="img-fluid" alt=""/>
                  </div>
                  
                </div>
              </div>
              <div class="col-md-10 details ">
                <h3 class="row">{this.props.repoName}</h3>
                <p class="description">{this.props.repoDesc}</p>
                <div class="row">
                  <span class="figures text-center"> Stars:{this.props.noOfStars/1000}K</span>
                  <span  class="figures text-center">Issues:{this.props.noOfIssues}</span>
                  <span>Submitted On: {this.props.created_at } by { this.props.repoName}</span>

                </div>


              </div>
            </div>

          </div>
        
      </React.Fragment>
    );
  }
}

export default Home;