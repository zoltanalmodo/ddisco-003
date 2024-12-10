import React, { createContext, useReducer, useEffect } from 'react';
import { AppReducer } from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  currentIndex_001: 0,
  currentIndex_002: 0,
  currentIndex_003: 0,
  degree_001: 0,
  degree_002: 0,
  degree_003: 0,
  activeButton: 'disco',
  previousActiveButton: 'disco',
  isPastel: "false",
  selectedSize: 'custom',
  // API-related state
  data: 'data fetched form the API',
  loading: true,
  error: null,
};

// Actions
const ACTIONS = {
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  SET_LOADING: 'SET_LOADING',
  // Add other actions as needed for managing API state
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(AppReducer, initialState);

  // API Call: Fetch Data
  const fetchData = async () => {
    dispatch({ type: ACTIONS.SET_LOADING });
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: ACTIONS.FETCH_ERROR, payload: 'Failed to fetch data from the API.' });
    }
  };

  // Fetch data on provider mount
  useEffect(() => {
    fetchData();
  }, []);

  // List of Actions
  function updateIndex_001(currentIndex_001) {
    dispatch({
      type: 'UPDATE_INDEX_001',
      payload: currentIndex_001,
    });
  }

  function updateIndex_002(currentIndex_002) {
    dispatch({
      type: 'UPDATE_INDEX_002',
      payload: currentIndex_002,
    });
  }

  function updateIndex_003(currentIndex_003) {
    dispatch({
      type: 'UPDATE_INDEX_003',
      payload: currentIndex_003,
    });
  }

  function setDegree_001(degree) {
    dispatch({
      type: 'SET_DEGREE_001',
      payload: degree,
    });
  }

  function setDegree_002(degree) {
    dispatch({
      type: 'SET_DEGREE_002',
      payload: degree,
    });
  }

  function setDegree_003(degree) {
    dispatch({
      type: 'SET_DEGREE_003',
      payload: degree,
    });
  }

  function setActiveButtonBlack() {
    dispatch({
      type: 'SET_ACTIVE_BUTTON_BLACK',
      payload: 'black',
    });
  }

  function setActiveButtonWhite() {
    dispatch({
      type: 'SET_ACTIVE_BUTTON_WHITE',
      payload: 'white',
    });
  }

  function setActiveButtonColor() {
    dispatch({
      type: 'SET_ACTIVE_BUTTON_COLOR',
      payload: 'color',
    });
  }

  function setActiveButtonDisco() {
    dispatch({
      type: 'SET_ACTIVE_BUTTON_DISCO',
      payload: 'disco',
    });
  }

  function setActiveButtonShop() {
    dispatch({
      type: 'SET_ACTIVE_BUTTON_SHOP',
      payload: 'shop',
    });
  }

  function setIsPastel() {
    dispatch({
      type: 'SET_IS_PASTEL',
      payload: globalState.isPastel === "true" ? "false" : "true",
    });
  }

  function setSelectedSizeSmall() {
    dispatch({
      type: 'SET_SELECTED_SIZE_SMALL',
      payload: 'small',
    });
  }

  function setSelectedSizeMedium() {
    dispatch({
      type: 'SET_SELECTED_SIZE_MEDIUM',
      payload: 'medium',
    });
  }

  function setSelectedSizeLarge() {
    dispatch({
      type: 'SET_SELECTED_SIZE_LARGE',
      payload: 'large',
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        // Expose global state
        globalState,
        currentIndex_001: globalState.currentIndex_001,
        currentIndex_002: globalState.currentIndex_002,
        currentIndex_003: globalState.currentIndex_003,
        degree_001: globalState.degree_001,
        degree_002: globalState.degree_002,
        degree_003: globalState.degree_003,
        activeButton: globalState.activeButton,
        previousActiveButton: globalState.previousActiveButton,
        isPastel: globalState.isPastel,
        selectedSize: globalState.selectedSize,
        data: globalState.data,
        loading: globalState.loading,
        error: globalState.error,
        // Expose actions
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
        setActiveButtonShop,
        setIsPastel,
        setSelectedSizeSmall,
        setSelectedSizeMedium,
        setSelectedSizeLarge,
        fetchData, // Expose fetchData to refetch manually if needed
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
