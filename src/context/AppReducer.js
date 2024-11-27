
export const AppReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_INDEX_001' : 
      return {
        ...state,
        currentIndex_001: action.payload,
      };
    case 'UPDATE_INDEX_002' : 
      return {
        ...state,
        currentIndex_002: action.payload,
      };
    case 'UPDATE_INDEX_003' : 
      return {
        ...state,
        currentIndex_003: action.payload,
      };
    case 'SET_DEGREE_001' :
      return {
        ...state,
        degree_001: action.payload
      };
    case 'SET_DEGREE_002' :
        return {
          ...state,
          degree_002: action.payload
        };
    case 'SET_DEGREE_003' :
      return {
        ...state,
        degree_003: action.payload
      };
    case 'SET_ACTIVE_BUTTON_BLACK' :
      return {
        ...state,
        previousActiveButton: state.activeButton,
        activeButton: 'black'
      };
    case 'SET_ACTIVE_BUTTON_WHITE' :
      return {
        ...state,
        previousActiveButton: state.activeButton,
        activeButton: 'white'
      };
    case 'SET_ACTIVE_BUTTON_COLOR' :
      return {
        ...state,
        previousActiveButton: state.activeButton,
        activeButton: 'color'
      };
    case 'SET_ACTIVE_BUTTON_DISCO' :
      return {
        ...state,
        previousActiveButton: state.activeButton,
        activeButton: 'disco'
      };
    case 'SET_ACTIVE_BUTTON_BUY' :
      return {
        ...state,
        previousActiveButton: state.activeButton,
        activeButton: 'buy'
      };
    case 'SET_IS_PASTEL' :
      return {
        ...state,
        isPastel: action.payload
      };
    case 'SET_SELECTED_SIZE_SMALL' :
      return {
        ...state,
        selectedSize: 'small'
      };
    case 'SET_SELECTED_SIZE_MEDIUM' :
      return {
        ...state,
        selectedSize: 'medium'
      };
    case 'SET_SELECTED_SIZE_LARGE' :
      return {
        ...state,
        selectedSize: 'large'
      };
    default:
      return state;
  }
}