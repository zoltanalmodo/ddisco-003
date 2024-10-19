import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

// initisalState

const initialState = {
  
  currentIndex_001: 0,
  currentIndex_002: 0,
  currentIndex_003: 0,
  degree_001: 0,
  degree_002: 0,
  degree_003: 0,
  activeButton: '',
  isPastel: 'false',
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function updateIndex_001(currentIndex_001) {
    dispatch({
      type: 'UPDATE_INDEX_001',
      payload: currentIndex_001
    });
  }
  
  function updateIndex_002(currentIndex_002) {
    dispatch({
      type: 'UPDATE_INDEX_002',
      payload: currentIndex_002
    });
  }

  function updateIndex_003(currentIndex_003) {
    dispatch({
      type: 'UPDATE_INDEX_003',
      payload: currentIndex_003
    });
  }

  function setDegree_001(degree) {
    dispatch({
      type: 'SET_DEGREE_001',
      payload: degree
    })
  }
  
  function setDegree_002(degree) {
    dispatch({
      type: 'SET_DEGREE_002',
      payload: degree
    })
  }

  function setDegree_003(degree) {
    dispatch({
      type: 'SET_DEGREE_003',
      payload: degree
    })
  }

  function setActiveButtonBlack() {
    dispatch({
      type: 'SET_ACTIVE_BUTTON_BLACK',
      payload: 'black'
    })
  }

  function setActiveButtonWhite() {
    dispatch({
      type: 'SET_ACTIVE_BUTTON_WHITE',
      payload: 'white'
    })
  }

  function setActiveButtonColor() {
    dispatch({
      type: 'SET_ACTIVE_BUTTON_COLOR',
      payload: 'color'
    })
  }

  function setActiveButtonDisco() {
    dispatch({
      type: 'SET_ACTIVE_BUTTON_DISCO',
      payload: 'disco'
    })
  }

  function setIsPastel() {
    dispatch({
      type: 'SET_IS_PASTEL',
      payload: globalState.isPastel === 'true' ? 'false' : 'true'
    });
  }



  return (
    <GlobalContext.Provider
      value={{
        globalState,
        currentIndex_001: globalState.currentIndex_001,
        currentIndex_002: globalState.currentIndex_002,
        currentIndex_003: globalState.currentIndex_003,
        updateIndex_001,
        updateIndex_002,
        updateIndex_003,
        setDegree_001,
        setDegree_002,
        setDegree_003,
        setActiveButtonBlack,
        setActiveButtonWhite,
        setActiveButtonColor,
        setActiveButtonDisco,
        setIsPastel,
      }}>
      { children }
    </GlobalContext.Provider>
  );
};

