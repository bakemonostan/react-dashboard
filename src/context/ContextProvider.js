import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// intial state for the icons in the navbars
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  // the state for screen size to dynamically display the sidebar depending on the current screen size
  const [screenSize, setScreenSize] = useState(undefined);

  // const [currentColor, setCurrentColor] = useState('#03C9D7');
  // const [currentMode, setCurrentMode] = useState('Light');
  // const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);

  // this would change the states of the navbar icons to collapse or uncollaspe the dropdown menus
  const [isClicked, setIsClicked] = useState(initialState);

  //   const setMode = (e) => {
  //     setCurrentMode(e.target.value);
  //     localStorage.setItem('themeMode', e.target.value);
  //   };

  //   const setColor = (color) => {
  //     setCurrentColor(color);
  //     localStorage.setItem('colorMode', color);
  //   };

  // the function takes an arguement that determines which icon has been clicked
  //remember that the initial state is an object, so we have to spread the states first before only changing that which has been clicked
  // alternatively, a 'useReducer' hook can also be used here.
  // practicing using useReducer with similar functionalities
  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        // currentColor,
        // currentMode,
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        // initialState,
        setIsClicked,
        // setActiveMenu,
        // setCurrentColor,
        // setCurrentMode,
        // setMode,
        // setColor,
        // themeSettings,
        // setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
