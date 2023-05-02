import React, {Component} from "react";
import { ToastContainer } from "react-toastify";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { getImage } from "Service/Service";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadButton } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { AppContainer } from "./App.styled";
import "react-toastify/dist/ReactToastify.css";

export class App extends Component {

  state = {
    showModal: false,
    query: "",
    hits: [],
    page: 1,
    isLoading: false,
    totalHits: 0,
    largeImage: "",
    isShowButton: false
  }
  async componentDidUpdate(_, prevState){
    const { query, page } = this.state
    if(prevState.query !== query || prevState.page !== page){
      try{
        this.setState({isLoading: true})
        const { totalHits, hits: newHits } = await getImage(query, page)
        this.setState(prevState => ({hits: [...prevState.hits, ...newHits], totalHits}))
      }
      catch (error) {console.log(error);}
      finally{
        this.setState({ isLoading: false })
      }
    }
}

  handleFormSubmit = (q) => {
      this.setState({query: q, hits:[], page: 1, isShowButton: false})
  }

  toggleModal =() =>{
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }

  handleNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
 

  render(){
    const { showModal, hits, isLoading, totalHits } = this.state;
    const isShowBtn = !isLoading && hits.length !== totalHits;
    return (
      <AppContainer>
        <Searchbar onSubmit = {this.handleFormSubmit}/>
        {hits.length >0 && 
          (<ImageGallery cards={hits}/>)}
        {isShowBtn && 
          (<LoadButton onClick={this.handleNextPage} disabled={isLoading}/>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="Hello" />
          </Modal>
        )}
        {isLoading && <Loader/>}
        <ToastContainer />
      </AppContainer>
    );
  }
};
