import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeById, updateRecipe } from '../../actions/recipes';

function Edit({ getRecipeById, updateRecipe }) { // pull the props you passed to this component here
  // useState is a hook that allows you to store/update state in functional components
  const [name, setName] = useState(""); 
  const [description, setDescription] = useState("some default value"); // you can set the default value here
  // you could also use a single useState for all values:
  // const [state, setState] = useState({
  //   name: "default name",
  //   description: "default description"
  // })
  // you'd update it like this:
  // setState(oldState => {...oldState, name: "new name"}) // ...oldState is a spread operator that copies the old state
  
  // this is a hook included in the react-router-dom package that allows you to access the url params
  // this will only work in a child component of the BrowserRouter component
  const { id } = useParams(); 

  
  // instead of lifecycle events like componentDidMount
  // use useEffect to run a side effect after the component mounts
  // and every time a dependency changes
  useEffect(() => { 
    getRecipeById(id);
  }, [recipeId]) // this is the dependency array,
  // if any value in the dependency array changes the effect runs again
  // if you want to run the effect only once, leave it as an empty array

  const onSubmit = (e) => {
    e.preventDefault();
    const recipe = { id, name, description };
    updateRecipe(id, recipe);
    setName("");
    setDescription("");
  };

  return (
    <div className="d-flex flex-column flex-grow-1 vh-100 overflow-auto main-body">
      <div className="d-flex flex-grow">
        <div className="p-2">    
          <div className="card card-body mt-4 mb-4">
            <h2>Edit Recipe Form</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={(e) => changeName(e.target.value)} // update state with onChange
                  value={name}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  onChange={e => changeDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}​

export default connect(null, { getRecipeById, updateRecipe })(Edit);