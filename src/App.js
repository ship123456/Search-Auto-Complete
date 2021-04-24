import React from 'react'
import SearchList from './my_work/SearchList'
class App extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            show:false,
            SearchList,
            p:''
        }
        this.selectHandler=this.selectHandler.bind(this)
        this.searchHandler=this.searchHandler.bind(this)
        this.changeParameters=this.changeParameters.bind(this)
    }
    searchHandler(){
        const{show}=this.state
        this.setState({
            show:!show
        })
        }
    selectHandler(y){
        this.setState({
            p:y,
            show:false
        })
        console.log(y)

    }
    changeParameters(e){
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    render(){
        const{show,SearchList,p}=this.state
        return(
            <>
            <form>
                <input type="text" name="p" value={p} onClick={this.searchHandler} onChange={(e)=>this.changeParameters(e)} placeholder="search ..."/>
            </form>
            {show?SearchList.filter(o=>{ return o.includes(p.toLowerCase())}).map(x=>{
                return <li style={{"cursor":"pointer"}} onClick={()=>this.selectHandler(x)}>{x}</li>
            }):[]}
            </>
        )
    }
}
export default App

