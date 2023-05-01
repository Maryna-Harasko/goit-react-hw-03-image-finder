import React, {Component} from "react";
import { ToastContainer } from "react-toastify";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import "react-toastify/dist/ReactToastify.css";

export class App extends Component {

  state = {
    showModal: false,
    imageCategory: ""
  }

  handleFormSubmit = (imageCategory) => {
      this.setState({imageCategory})
  }

  toggleModal =() =>{
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }

  render(){
    const { showModal } = this.state
    return (
      <div>
        <Searchbar onSubmit = {this.handleFormSubmit}/>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="Hello" />
          </Modal>
        )}
        <ToastContainer />
      </div>
    );
  }
};

