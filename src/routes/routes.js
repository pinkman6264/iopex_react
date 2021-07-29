import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from '../Website/Homepage';
import Header from '../Website/Header';


import AddLocation from '../Website/AddLocation';





export default function Routes() {
    return (
<BrowserRouter>

      


      {/* <Route
        exact
        path={'/'}
        render={(props) => (
          <React.Fragment>
            
             <Loginpg {...props} />
          
          </React.Fragment>
        )}
      /> */}


<Route
        exact
        path={'/home'}
        render={(props) => (
          <React.Fragment>
              <Header {...props}/>
             <Homepage {...props} />
          
          </React.Fragment>
        )}
      />


<Route
        exact
        path={'/location'}
        render={(props) => (
          <React.Fragment>
              <Header {...props}/>
             <AddLocation {...props} />
          
          </React.Fragment>
        )}
      />
   

 </BrowserRouter>
    )

    
          }