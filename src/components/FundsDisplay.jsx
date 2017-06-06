import React,{ Component } from 'react';

class FundsDisplay extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div id={ this.props.id } className="section-container">
                <div className="section-inner" style={{maxWidth: '800px'}}>
                    <span className="funds-section-title"> Available Funds </span>
                    <span className="funds-number-display"> $120<span>88</span></span><br/>
                    <span className="funds-number-text">Total Earned: $7.8 Million</span>
                    <span className="funds-number-button"><a href="!#"> Payout </a></span>
                    <span className="funds-section-title" style={{ marginTop: '50px' }}> Stats </span>
                    <div className="stats">
                        <span className="stats-display"> 120<br/><span>Clicks</span></span>
                        <span className="stats-display"> 20<br/><span>Sign ups</span></span>
                        <span className="stats-display"> 1020<br/><span>Finished Sessions</span></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FundsDisplay;