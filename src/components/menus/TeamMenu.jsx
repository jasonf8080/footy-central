import React from 'react';
import { menuTeams } from '../../utils/data';
import { Link } from 'react-router-dom';
const TeamMenu = ({
  name,
  setShowMenu
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full absolute left-0 z-10 top-[100%] bg-[#1e1e1e] py-10 shadow-2xl border-t-2 border-t-black",
    onMouseEnter: () => setShowMenu(name),
    onMouseLeave: () => setShowMenu(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "container flex flex-wrap gap-4"
  }, menuTeams.map((item, index) => {
    return /*#__PURE__*/React.createElement(Link, {
      to: `/team/${item.id}/schedule`,
      className: "cursor-pointer hover:bg-[#444] text-lg whitespace-nowrap px-4 py-2 bg-[#292929] rounded-md flex"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: "",
      className: "w-[30px] h-[30px] mr-2"
    }), /*#__PURE__*/React.createElement("p", {
      className: ""
    }, item.name));
  })));
};
export default TeamMenu;