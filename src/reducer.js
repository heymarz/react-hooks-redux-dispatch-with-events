// setting an initial state
let state ;

//reducer function that we pass an action and a previous state inorder to return the new state
function reducer(state= { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

//preserve our data by using dispatch function. It has accesss to state because it was declared earlier in the file in global scope.
//responsible for updating the state and rerendering
function dispatch(action){
  state = reducer(state, action);
  render()
}

//render function to display the count on browser
function render(){
  const container = document.getElementById("container");
  container.textContent = state.count;
}

//calling the initial value of state
dispatch({type: "@@INIT"});

//integrating dispath with a user event
const button = document.getElementById("button");

button.addEventListener("click", ()=> {
  dispatch({type: "counter/increment"});
});

