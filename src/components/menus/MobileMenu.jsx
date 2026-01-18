import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { LiaTimesSolid } from "react-icons/lia";
import { useDispatch, useSelector } from 'react-redux';
import MobileTeams from './MobileTeams';
import MobileLeagues from './MobileLeagues';
import { setShowMobileMenu } from '../../features/menu';
import { AnimatePresence } from 'framer-motion';
const MobileMenu = () => {
  const dispatch = useDispatch();
  const {
    navbarSearchTerm
  } = useSelector(state => state.playerSearch);
  const [activeMenu, setActiveMenu] = useState(null);
  return /*#__PURE__*/React.createElement("aside", {
    className: "md:hidden overflow-hidden fixed top-0 left-0 bg-[#1a1a1a] w-[100vw] h-[100vh] z-20 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[90%] mx-auto flex justify-end py-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[40px]",
    onClick: () => dispatch(setShowMobileMenu())
  }, /*#__PURE__*/React.createElement(LiaTimesSolid, null))), /*#__PURE__*/React.createElement("div", {
    className: "w-[80%] mx-auto mt-8"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement(MobileLink, {
    name: "leagues",
    activeMenu: activeMenu,
    setActiveMenu: setActiveMenu,
    component: /*#__PURE__*/React.createElement(MobileLeagues, null)
  }), /*#__PURE__*/React.createElement(MobileLink, {
    name: "teams",
    activeMenu: activeMenu,
    setActiveMenu: setActiveMenu,
    component: /*#__PURE__*/React.createElement(MobileTeams, null)
  }))));
};
const MobileLink = ({
  name,
  activeMenu,
  setActiveMenu,
  component
}) => {
  // Next Step -- toggle when clicked again.... then animate presence using FramerMotion - more smooth transition to the dropdown --
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    className: "flex justify-between relative w-full mb-6",
    onClick: () => setActiveMenu(name === activeMenu ? null : name)
  }, /*#__PURE__*/React.createElement("p", {
    className: "capitalize text-2xl"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "text-xl"
  }, activeMenu === name ? /*#__PURE__*/React.createElement(FaMinus, null) : /*#__PURE__*/React.createElement(FaPlus, null))), /*#__PURE__*/React.createElement(AnimatePresence, {
    mode: "wait"
  }, activeMenu === name && component));
};
export default MobileMenu;