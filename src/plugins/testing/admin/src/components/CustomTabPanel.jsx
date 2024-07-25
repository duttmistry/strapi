// import * as React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import About from "../pages/About";
// import Test from "../pages/Test";
// import pluginId from "../pluginId";
// import { useNavigate } from "react-router";
// import { Button } from "@mui/material";
// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);
//   const navigate = useNavigate();
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//         >
//           <Tab label="Home" {...a11yProps(0)} />
//           <Tab label="About" {...a11yProps(1)} />
//           <Tab label="Test" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}></CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         <About />
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         <Test />
//       </CustomTabPanel>
//       <Button onClick={() => navigate(`/plugins/${pluginId}/about`)}>
//         About
//       </Button>
//       <Button onClick={() => navigate(`/plugins/${pluginId}/test`)}>
//         Test
//       </Button>
//     </Box>
//   );
// }
