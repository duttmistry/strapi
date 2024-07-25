/*
 *
 * HomePage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import CustomTabPanel from "../../components/CustomTabPanel";

const HomePage = () => {
  return (
    <div>
      <CustomTabPanel />
      <h1>{pluginId}&apos;s HomePage</h1>
    </div>
  );
};

export default HomePage;
