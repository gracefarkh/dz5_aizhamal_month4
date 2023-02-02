import axios from "axios";
import { Component } from "react";
import MyButton from "../myButton/MyButton";
import MyInput from "../MyInput/MyInput";
const apiKey = '26dd6a8d5b56f3bccd84a0bacda35bf3'
import Card from "../card/Card";


export default class MainPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            search :'',
            weatherlist :[],
            city : null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange (e){
        this.setState ({search:e.target.value})
    }
    async handleClick(){
        const response =  await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.search}&lang=ru&appid=${apiKey}`)
        const data = await response.data
        this.setState({weatherlist:data.list,search :'' , city:data.city.name})
    }
    render(){
        console.log(this.state.weatherlist)
        return(
        <div>
            <MyInput type="text" value={this.state.search} onChange={this.handleChange} />
            <MyButton onClick={this.handleClick}>Search</MyButton>
            <h2>{this.state.city}</h2>
            {this.state.weatherlist.map(item=> {if(item?.dt_txt.includes('15:00:00')){
                return <Card time={item?.dt_txt} weather={item?.weather[0]?.description } temp={item?.main?.temp}/>
            }})}
        </div>
        )
    }
}