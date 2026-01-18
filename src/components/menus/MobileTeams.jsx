import React from 'react';
import { menuTeams as teams } from '../../utils/data';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setShowMobileMenu } from '../../features/menu';
import { motion } from 'framer-motion';
const MobileTeams = () => {
  const dispatch = useDispatch();
  return /*#__PURE__*/React.createElement(motion.ul, {
    initial: {
      maxHeight: 0
    },
    animate: {
      maxHeight: 380
    },
    transition: {
      duration: 0.3
    },
    className: "flex flex-wrap gap-3 overflow-scroll"
  }, teams.map((team, index) => {
    return /*#__PURE__*/React.createElement(Link, {
      className: "flex items-center text-sm px-4 py-2 bg-[#333] rounded-md overflow-hidden",
      to: `/team/${team.id}/schedule`,
      onClick: () => dispatch(setShowMobileMenu())
    }, /*#__PURE__*/React.createElement("img", {
      src: team.image,
      className: "w-[25px] h-[25px] mr-2",
      alt: ""
    }), /*#__PURE__*/React.createElement("p", null, team.name));
  }));
};
export default MobileTeams;