import React from 'react';
import { leagues } from '../../utils/data';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setShowMobileMenu } from '../../features/menu';
import { motion } from 'framer-motion';
const MobileLeagues = () => {
  const dispatch = useDispatch();
  return /*#__PURE__*/React.createElement(motion.ul, {
    initial: {
      maxHeight: 0
    },
    animate: {
      maxHeight: 170
    },
    transition: {
      duration: 0.3
    },
    className: "flex flex-wrap overflow-scroll gap-3 mb-6"
  }, leagues.map((league, index) => {
    return /*#__PURE__*/React.createElement(Link, {
      to: `/league/${league.id}`,
      onClick: () => dispatch(setShowMobileMenu())
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-lg whitespace-nowrap px-4 py-2 bg-[#333] rounded-md"
    }, league.name));
  }));
};
export default MobileLeagues;