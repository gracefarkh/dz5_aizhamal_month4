import React ,{Component} from 'react'

export default class Card extends Component {
    render(){
        return(
            <div className='card'>
            <h4>{this.props.time}</h4>
            <h4>{this.props.weather}</h4>
            <h4>temperature:{Math.floor(this.props.temp-273,15)}</h4>
            </div>
        )
    }
}