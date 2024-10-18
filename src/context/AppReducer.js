
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
        activeButton: 'black'
      };
    case 'SET_ACTIVE_BUTTON_WHITE' :
      return {
        ...state,
        activeButton: 'white'
      };
    case 'SET_ACTIVE_BUTTON_COLOR' :
      return {
        ...state,
        activeButton: 'color'
      };
    case 'SET_ACTIVE_BUTTON_DISCO' :
      return {
        ...state,
        activeButton: 'disco'
      };
    case 'SET_ACTIVE_BUTTON_PASTEL' :
      return {
        ...state,
        activeButton: 'pastel'
      };  
    default:
      return state;
  }
}