import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';


 const SmurfList = (props)=> {

    if (props.appLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurfs.map((smurf,index)=>(
            <Smurf key={index} smurf={smurf}/>
        ))}
    </div>);
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        appLoading: state.appLoading
    }
} 
export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.