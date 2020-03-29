import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import './css/main.scss';

/**
  @Desc Top level Wrapper component which renders all others component
*/
class App extends Component {

  render(){
    const { route } = this.props;
    /*
    * All the children routes that are matched will be automatically turned into
    * component by renderRoutes function
    */
    return(
      <div className="mjl-container">
        {renderRoutes(route.routes)}
      </div>
    )
  }
};

/*
* loadData function is used by server to pre-fetch api's and
  then pre-renders contents before client side JS kicks in
  i.e. Dispatch action into the reducer for data pre-rendering
*/
export default {
  component: App,
  /*
    loadData: ({dispatch}) => {
      return dispatch(getUser())
    }
  */
}
