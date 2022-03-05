import React, { Component } from "react";
import Button from '../button/Button';

export default class Pagination extends Component{
    constructor(props){
        super(props);

        this.state={
                "data": [
                    {
                        "id": 7,
                        "email": "michael.lawson@reqres.in",
                        "first_name": "Michael",
                        "last_name": "Lawson",
                        "avatar": "https://reqres.in/img/faces/7-image.jpg"
                    },
                    {
                        "id": 8,
                        "email": "lindsay.ferguson@reqres.in",
                        "first_name": "Lindsay",
                        "last_name": "Ferguson",
                        "avatar": "https://reqres.in/img/faces/8-image.jpg"
                    },
                    {
                        "id": 9,
                        "email": "tobias.funke@reqres.in",
                        "first_name": "Tobias",
                        "last_name": "Funke",
                        "avatar": "https://reqres.in/img/faces/9-image.jpg"
                    },
                    {
                        "id": 10,
                        "email": "byron.fields@reqres.in",
                        "first_name": "Byron",
                        "last_name": "Fields",
                        "avatar": "https://reqres.in/img/faces/10-image.jpg"
                    },
                    {
                        "id": 11,
                        "email": "george.edwards@reqres.in",
                        "first_name": "George",
                        "last_name": "Edwards",
                        "avatar": "https://reqres.in/img/faces/11-image.jpg"
                    },
                    {
                        "id": 12,
                        "email": "rachel.howell@reqres.in",
                        "first_name": "Rachel",
                        "last_name": "Howell",
                        "avatar": "https://reqres.in/img/faces/12-image.jpg"
                    }
                ],
                "support": {
                    "url": "https://reqres.in/#support-heading",
                    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
                }
        }
    }

    fetchData=async (page)=>{
        // if (page===1){
        //     console.log(this.state.data.filter(it => it.id <= 10))

        // }else{
        //     console.log(this.state.data.filter(it => it.id > 10))

        // }

        let address = await fetch(`https://reqres.in/api/users?page=${page}`).then(res => res.json())
        console.log(address)
        this.setState({data:address.data})
    }

    render(){
        return(
            <div>
                 <Button title="Page1" clickHandler={()=>this.fetchData(1)} />
                 <Button title="Page2" clickHandler={()=>this.fetchData(2)} />
            </div>
        )
    }
}
