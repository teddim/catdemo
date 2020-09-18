import React from 'react';
import $ from 'jquery';
import CatList from './CatList';
import CatForm from './CatForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }

    this.addCat = this.addCat.bind(this);
  }

  addCat(catName) {    
    $.post('http://localhost:3000/api/cats',catName)
    .then(data => {
      this.setState({cats: [...this.state.cats, data]})
    })
  }

  componentDidMount() {
    
    $.get('http://localhost:3000/api/cats')
    .then((data) => {
        this.setState({cats: data})
      })
  }

  render(){
    return(
    <div>
      <CatList cats={this.state.cats} />
      <CatForm addCat={this.addCat}/>
    </div>
  )}
}

export default App;
