import React from 'react';
import '../style/xed-web.css'
export class XedWeb extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            title:{
                content:'Xed Data',
                //style variable should use for only dynamic content otherwise you should use css file.
                style:{color:'red'}
            },
            button:{
                content:'change color'
            }
        }

    }
    componentDidMount() {
        document.getElementById('xed-button').addEventListener('click',this.clickHandler.bind(this));

    }

    clickHandler(){
        let c1 = (Math.random()*10).toString().split('.')[0];
        let c2 = (Math.random()*10).toString().split('.')[0];
        let c3 = (Math.random()*10).toString().split('.')[0];
console.log(c1);
        this.setState({title:{
                content:this.state.title.content,
            style:{
                color:'#'+c1+c2+c3
            }
            }})
    }
    render() {
        return (
            <div className={'xed-web container'}>
                <div className={'xed-web inside'}>
                    <div className={'xed-web title'} style={this.state.title.style} >{this.state.title.content}</div>
                    <button id={'xed-button'}>{this.state.button.content}</button>
                </div>
            </div>
        );
    }

}