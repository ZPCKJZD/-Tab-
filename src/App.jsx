import React, { Component } from 'react'
import './css/public.css'
import $ from 'jquery'
var startX,endX;
export default class App extends Component {
    constructor(){
        super()
        this.state={
            time:0
        }
        this.handleMove=this.handleMove.bind(this)
        this.handleStart=this.handleStart.bind(this)
    }
    componentDidMount(){
        $(function(){
           $('li').each(function(){
               $(this).click(function(){
                   $(this).addClass('special').siblings().removeClass('special')
               })
           })
        })
    }
    handleStart(e){
         startX=e.touches[0].pageX
    }
    handleMove(e){
        endX=e.touches[0].pageX
        if(endX-startX>0&&$('div.son').offset().left<=0){
            $('div.son')[0].style.left=$('div.son').offset().left+1+"px"
        }else if(endX-startX<0&&$('div.son').offset().left>=-680){
            $('div.son')[0].style.left=$('div.son').offset().left-21+"px"
        }
    }
    render() {
        return (
            <div>
                App组件
                <div className="touch" 
                >
                   <div className="son"
                   onTouchMove={this.handleMove}
                   onTouchStart={this.handleStart}    
                   >
                       <ul>
                           <li className="special">1</li>
                           <li>2</li>
                           <li>3</li>
                           <li>4</li>
                           <li>5</li>
                           <li>6</li>
                           <li>7</li>
                           <li>8</li>
                           <li>9</li>
                           <li>10</li>
                       </ul>
                       </div> 
                </div>
            </div>
        )
    }
}

