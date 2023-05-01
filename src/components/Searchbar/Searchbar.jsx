import React, { Component } from "react";
import { toast } from "react-toastify";
import { FiSearch } from 'react-icons/fi';
import "react-toastify/dist/ReactToastify.css";
import { Header, SearchForm, SearchButton, SearchButtonLabel, SearchInput } from "./Searchbar.styled";

export class Searchbar extends Component {

  state = {
    imageCategory: ''

  }

  handelCategoryChange = e => {
    this.setState ({imageCategory: e.currentTarget.value.toLowerCase() })
  }

  submit = (e) => {
    e.preventDefault();

    if(this.state.imageCategory.trim() === ''){
      toast('Enter data to search');
      return
    }
    this.props.onSubmit(this.state.imageCategory)
    this.setState({imageCategory: ''})
  }

  render() {
  return (
    <Header onSubmit  = {this.submit}>
      <SearchForm>
        <SearchButton type="submit">
        <FiSearch style={{ width: 20, height: 20 }} />
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <SearchInput
          className="input"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value = { this.state.imageCategory }
          onChange = {this.handelCategoryChange}
        />
      </SearchForm>
    </Header>
  )
  }
}