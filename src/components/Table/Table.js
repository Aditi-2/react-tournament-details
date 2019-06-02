import React, { Component } from 'react'
import { Field, Form } from 'react-redux-form'
import './Table.css'

class Table extends Component {
    componentWillMount() {
        if (!this.props.posts.items.length) {
            this.props.fetchData()
        }
    }
    render() {
        return (
            <div className="container marginTop">
              
                <Form
                 model="search"
                 onSubmit={this.props.searchData}
                 className="login-form"
                 >
                 <div class="input-group">
                        <Field model="search.keyword" className="form-group">
                            <input className="form-control" type="text" placeholder="Search.."/>
                        </Field>
                        <button type="submit" className="btn btn-primary searchBtn">Search</button>
                        <button type="button" className="btn btn-danger searchBtn" onClick={this.props.fetchData}>Clear</button>
                 </div>
                 </Form>
            <table className="table marginTop">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">country</th>
                <th scope="col">city</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                </tr>
            </thead>
         <tbody>
        {
            this.props.posts.items.map((item, i) => {
                let startDate = item.date_start.split(' ')
                let endDate = item.date_end.split(' ')
               return ( 
                   <tr key={i}>
                    <th scope="row">{item.id}</th>
                    <td  onClick={() => this.props.showSeries(item.id)}>{item.name}</td>
                    <td>{item.country}</td>
                    <td>{item.city}</td>
                    <td>{startDate[0]}</td>
                    <td>{endDate[0]}</td>
                </tr>
               )
            })
        }
        </tbody>   
         </table>
         </div>
        )
    }
}
export default Table