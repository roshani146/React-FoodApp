import React from "react";

const Header = props =>{
	return(
	<div className="jumbotron">
		<h1 className="display-1">
		<span className="material-icons icon">fastfood</span> Food Recipes </h1>

		<div className="input-group w-50 mx-auto">
  			<input
  			type="text" 
  			className="form-control" 
  			placeholder="Search Your Recipes..."
  			value={props.search}
  			onChange={props.onInputChange}
  			/>
  			<div className="input-group-append">
   				 <button className="btn btn-dark" onClick={props.onSearchClick}>Search Recipe</button>
  			</div>
		</div>

	</div>
	)
}



export default Header;