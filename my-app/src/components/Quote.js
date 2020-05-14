import React from 'react';
import { connect } from 'react-redux';
import { getQuote, initialLoad } from '../actions/index';
import styled from 'styled-components';

const StyledQuote = styled.p `
  font-size: 1em;
  text-align: center;
  padding-top: 50px;

`

const StyledButton = styled.button `
  border: 3px solid white;
  width: 200px;
  height: 75px;
  border-radius: 15px;
  background-image: linear-gradient(#fb1ce4, #f4881c);
  color: white;
  font-size: 1em;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  font-family: 'Judson', serif;
  font-style: italic;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {

  }

`

const Quote = ({ error, quote, getQuote }) => {



  if (!error) {
    return (
      <div>
        <StyledQuote>"{quote}"</StyledQuote>
        <StyledButton onClick={getQuote}>Generate</StyledButton>
      </div>
    )
  } else {
    return (
      <div>
        <StyledQuote>"{quote}"</StyledQuote>
        <StyledButton onClick={getQuote}>Generate</StyledButton>
      </div>
    );
  }

};

const mapStateToProps = state => {
    return {
      quote: state.quote,
      isLoading: state.isLoading,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getQuote : getQuote,
      initialLoad: initialLoad }
  )(Quote);