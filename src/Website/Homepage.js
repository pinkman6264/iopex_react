import React, { Component } from 'react';
// import LogoImage from './lorem.jpg';
import Bridge from '../Middleware/bridge';

import ModelWindow from "../Component/Model";

import Datatable from "../Component/Datatable/Datatable";
import swal from 'sweetalert';


import './Style.css'

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={
      
          column: [

          {
          Header:"Name",
          accessor:"name"
          },
          {
          Header:"Mobile",
          accessor:"mobile"
          },
          {
            Header:"Description",
            accessor:"description"
            },
          {
          Header: "Edit",
          accessor: "edit",
          Cell: (d) => this.edit(d),
          },
          {
          Header: "Delete",
          accessor: "delete",
          Cell: (d) => this.delete(d),
          },
          ],
          name:"",
          description:"",
          mobile:"",
          FullData : JSON.parse(localStorage.getItem("FullData")) == null ? [{ id:1 , name:"dennis" , mobile:"9962154866" , description:"fksdhfdshfuidshfu" }] : JSON.parse(localStorage.getItem("FullData"))
 }
  }

 
 



  delete = (d) => {

    return (
        <center>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => this.deletion(d)}
      >
        Delete
      </button>
      </center>
    );
  };


deletion =async(value)=>{

const previousData = [...this.state.FullData];
// Seperating data row using row-index
const getData = { ...previousData[value.index] };

//getting id on that data
const id = getData.id;
//removing specific id in previous state data
const Data = previousData.filter((delelteid) => delelteid.id !== id);

try { 
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this !",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then(async(willDelete) => {
       
        if (willDelete) {
           

                //  console.log(result);
                localStorage.setItem("FullData", JSON.stringify(Data));
                this.setState({FullData: Data });
                swal("Poof! Your Data has been deleted!", {
                    icon: "success",
                  });
                // setTimeout(() => this.setState({ formAlertdelete: false }), 3000);
              
          
        } else {
          swal("Your Data  is safe!");
        }
      });
 
} catch (error) {
  this.setState({ data: previousData });
  console.log(error);
}

}

 

 

  
  edit = (d) => {
    let value = d;
    return (
      <center>
        <button
          type="button"
          className="btn btn-info"
          data-toggle="modal"
           data-target="#adduser"
           onClick={() => this.edition(value)}
        >
          Edit
        </button>
      </center>
    );
  };

  edition =async(value)=>{

    const { LocationOption , RuleOption } = this.setState;
    let d = value.original;
   
    let EditId = value.original.id;
    let IndexID = value.index;


    


    this.setState({
     name:d.name,
     mobile:d.mobile,
     description:d.description,
     EditId,
     IndexID
    })

  }



  async componentDidMount(){
    try {



      
    } catch (error) {
      console.log(error);
    }
  }

 

  handleChange=async(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  AddCustomers = async()=>{
    this.setState({
      IsEditState:false,
      Componets1 : {checkAggravated:false,checkAngry:false,checkannoyed:false,checkdisappointed:false},
      selectedlocation:{},
      selectedrule:{},
      description:""
    })
  }

  submit = async()=>{
    const { name , mobile , description  } = this.state;

    let id = Math.random();

    console.log(id);

    let arr ={ }
    arr.id = id;
    arr.name=name;
    arr.mobile=mobile;
    arr.description=description



    try {


       let newData = [arr,...this.state.FullData];


       localStorage.setItem("FullData", JSON.stringify(newData));

       this.setState({
         FullData:newData,
         name:"",
         description:"",
         mobile:""
       })

     
      
    } catch (error) {
      console.log(error);
    }
  }

 

  

  Update = async()=>{
    const {  name ,description, mobile,IndexID,EditId } = this.state;

    let arr ={}
    arr.name = name;
    arr.mobile=mobile;
    arr.description=description
    
    try {


      let newData = [...this.state.FullData];

      newData[IndexID].name = name;
      newData[IndexID].mobile = mobile;
      newData[IndexID].description = description;

      console.log(newData[IndexID]);    
      localStorage.setItem("FullData", JSON.stringify(newData));


      this.setState({
        FullData:newData,
        name:"",
        description:"",
        mobile:""
      })

     
      
    } catch (error) {
      console.log(error);
    }

  }


 

  render() {
    const { Componets1 } = this.state;
    return (
      <React.Fragment>

<div class="main-content">
  

<ModelWindow  
           ButtonTitle = {this.state.IsEditState ==true ? "Update" : "Add Detail"}
           ButtonName = {"ButtonName"}
           id = "adduser"
           indexStyle={{color:"black",fontWeight: '500'}}
           ButtonBody = {

            <div>

           
            <div className="row form-group">
                <div className="col-sm-1"></div>
                <div className="col-sm-3">
                <label class="labell2">Name:</label>
                </div>
                <div className="col-sm-8">
                <input type="text"
                class="form-control"
                placeholder="Enter the name"
                onChange={this.handleChange}
                value={this.state.name}
                name="name"/>
             
            </div>
            <span id="spanid" >{this.state.errorusername}</span>  
            </div>


            <div className="row form-group">
                <div className="col-sm-1"></div>
                <div className="col-sm-3">
                <label class="labell2">Mobile:</label>
                </div>
                <div className="col-sm-8">
                <input type="text"
                class="form-control"
                maxLength={10}
                placeholder="Enter the Mobile"
                onChange={this.handleChange}
                value={this.state.mobile}
                name="mobile"/>
             
            </div>
            <span id="spanid" >{this.state.errorusername}</span>  
            </div>


            <div className="row form-group">
                <div className="col-sm-1"></div>
                <div className="col-sm-3">
                <label class="labell2">Description:</label>
                </div>
                <div className="col-sm-8">
                <textarea class="form-control"
                 required = "required"
                  name='description' 
                  value={this.state.description} 
                   onChange={this.handleChange}
                    id="content"
                     placeholder="Enter the description" 
                     aria-label="Enter Content" 
                     rows="3"></textarea>
             
            </div>
            <span id="spanid" >{this.state.errorusername}</span>  
            </div>
            <br/>

           


            <div className="row form-group">
              <div className="col-sm-4" ></div>
              <div className="col-sm-5" > <button className="btn btn-success" onClick={this.state.IsEditState == false ? this.submit : this.Update} >{this.state.IsEditState == false ?"Submit":"Update"}</button> </div>
              <div className="col-sm-3" ></div>
            </div>


            </div>
}
           
             />


<section class="section">
          <div class="section-body">


          <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3>Customers</h3>
                  </div>
                  

                 <div class="card-body">

                    <button type="button"
                   class="btn btn-primary" 
                   data-toggle="modal"
                   onClick={this.AddCustomers}
                    data-target="#adduser">
                     Add Detail 
                      </button>

                    
<br/>
<br/>
                  
                  <div className="row form-group">
                    <div className="col-sm-12">
                    {this.state.FullData.length ? (
                        <Datatable
                        data={this.state.FullData}
                        columnHeading={this.state.column}
                        />
                    ) : null}
                    </div>
                    </div>
                 
                 </div>
                 </div>
                 </div>
                 </div>
                            </div>
                            </section>
        
        
        
            </div> 

             
      </React.Fragment>
        
      
    );
  }
}

export default Homepage;
