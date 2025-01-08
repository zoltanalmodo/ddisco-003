export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INDEX_001':
      return {
        ...state,
        currentIndex_001: action.payload,
      };
    case 'UPDATE_INDEX_002':
      return {
        ...state,
        currentIndex_002: action.payload,
      };
    case 'UPDATE_INDEX_003':
      return {
        ...state,
        currentIndex_003: action.payload,
      };
    case 'SET_DEGREE_001':
      return {
        ...state,
        degree_001: action.payload,
      };
    case 'SET_DEGREE_002':
      return {
        ...state,
        degree_002: action.payload,
      };
    case 'SET_DEGREE_003':
      return {
        ...state,
        degree_003: action.payload,
      };
    case 'SET_ACTIVE_BUTTON_BLACK':
      return {
        ...state,
        previousActiveButton: state.activeButton,
        activeButton: 'black',
      };
    case 'SET_ACTIVE_BUTTON_WHITE':
      return {
        ...state,
        previousActiveButton: state.activeButton,
        activeButton: 'white',
      };
    case 'SET_ACTIVE_BUTTON_COLOR':
      return {
        ...state,
        previousActiveButton: state.activeButton,
        activeButton: 'color',
      };
    case 'SET_ACTIVE_BUTTON_DISCO':
      return {
        ...state,
        previousActiveButton: state.activeButton,
        activeButton: 'disco',
      };
    case 'SET_ACTIVE_BUTTON_SHOP':
      return {
        ...state,
        previousActiveButton: state.activeButton,
        activeButton: 'shop',
      };
    case 'SET_IS_PASTEL':
      return {
        ...state,
        isPastel: action.payload,
      };
    case 'SET_SELECTED_SIZE_SMALL':
      return {
        ...state,
        selectedSize: 'small',
      };
    case 'SET_SELECTED_SIZE_MEDIUM':
      return {
        ...state,
        selectedSize: 'medium',
      };
    case 'SET_SELECTED_SIZE_LARGE':
      return {
        ...state,
        selectedSize: 'large',
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'TOGGLE_AUTOPLAY':
      return {
        ...state,
        autoplay: action.payload,
      };
    case 'UPDATE_COLOR':
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
