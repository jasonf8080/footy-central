import React from 'react';
import { leagues } from '../../utils/data';
import { Link } from 'react-router-dom';
const LeagueMenu = ({
  name,
  setShowMenu
}) => {
  return /*#__PURE__*/React.createElement("button", {
    className: "w-full absolute left-0 z-10 top-[100%] bg-[#1e1e1e] py-10 shadow-2xl border-t-2 border-t-black",
    onMouseEnter: () => setShowMenu(name),
    onMouseLeave: () => setShowMenu(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "container flex flex-wrap gap-4"
  }, leagues.map((item, index) => {
    return /*#__PURE__*/React.createElement(Link, {
      to: `/league/${item.id}`,
      className: "cursor-pointer"
    }, /*#__PURE__*/React.createElement("p", {
      className: " hover:bg-[#444] text-lg whitespace-nowrap px-4 py-2 bg-[#292929] rounded-md"
    }, item.name));
  })));
};
export default LeagueMenu;