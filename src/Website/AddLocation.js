import React from 'react';
import Bridge from '../Middleware/bridge';
import Datatable from "../Component/Datatable/Datatable";
import swal from 'sweetalert';




class AddLocation extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                FullData :[],
                Data:[],
                column: [
                    {
                      Header: "First Name",
                      accessor: "first_name"
                    },
                    {
                      Header: "Last Name",
                      accessor: "last_name"
                    },
                    {
                      Header: "Email Id",
                      accessor: "email"
                    },
                    {
                      Header: "first_name",
                      accessor: "first_name"
                    },
                    
                    // {
                    //     Header: "Edit",
                    //     accessor: "edit",
                    //     Cell: (d) => this.edit(d),
                    //   },
                    //   {
                    //     Header: "Delete",
                    //     accessor: "delete",
                    //     Cell: (d) => this.delete(d),
                    //   },
                ],
                number:1
               
            }
        }
    }


  
    async componentDidMount(){
        try{
            
            const result = await Bridge.GetPages(this.state.number);
            // console.log(result);
            if(result.data.data.length){
                this.setState({
                  FullData:result.data.data
                })
            }

        }catch(error){
            console.log(error);
        }
    }

    submit=async()=>{

      try {

        const result = await Bridge.GetPages(this.state.number);
            // console.log(result);
            if(result.data.data.length){
                this.setState({
                  FullData:result.data.data
                })
            }else{
              swal(`There is no Users in this page number , ${this.state.number}`)
              this.setState({
                FullData:[]
              })
            }

        
      } catch (error) {
        console.log(error);
      }

    }

  
handleChange=async(e)=>{
  this.setState({
    [e.target.name] : e.target.value
  })
}

    render(){
        const { FullData } =this.state;
        console.log(FullData);
        return(
            <React.Fragment>
             <div class="main-content">
             <section class="section">
                <div class="section-body">
                <div class="row">
                <div class="col-12">
                <div class="card">
                <div class="card-header">
                <h3>Location</h3>
                </div>
               
                <div class="card-body">
                 
                <div className="row form-group">
                <div className="col-sm-2"></div>
                <div className="col-sm-2">
                <label class="labell2">Go to NExt Page</label>
                </div>
                <div className="col-sm-4">
                <input type="Number"
                class="form-control"
                placeholder="Enter the name"
                onChange={this.handleChange}
                value={this.state.number}
                name="number"/>
                </div>
                <div className="col-sm-3"> <span class="errormsg" style={{color:"red"}}>{this.state.errorname}</span> </div>
                </div>

                <div class="row form-group">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <button type="button"
                style={{width:'100%'}} 
                onClick={this.submit }
                class="btn btn-primary m-t-15 waves-effect">
                    {"Submit"}
                    </button>
                </div>
                <div className="col-sm-4"></div>
                </div>

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
        )
    }

}

export default AddLocation;