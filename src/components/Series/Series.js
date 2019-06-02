import React, { Component } from 'react';
import './Series.css';


class Series extends Component{
    componentWillMount() {
        if(this.props.posts.series.length == 0){
            console.log(this.props.match.params.id);
            console.log(this.props.posts.items.length);
            this.props.showSeries(this.props.match.params.id);
        }
    }
    render(){
        const style = {
            width: '400px'
        }
        return(
        <div className="container marginTop">
                <div className="card-deck">
                    {
                        this.props.posts.series.map((item, i) => {
                            return (
                                <div className="card profile-card" key={i} style={{ style }}>
                                    <div className="card-body">
                                        <h4 className="card-title">Series Name: {item.name}</h4>
                                        <h5>Start Date: {item.date_start}</h5>
                                        <h5>End Date: {item.date_end}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Series