import { historyData, physicsData, geographyData } from "./data.js";
import callFocusContainer from "./firstContainer.js";
import openAndCloseList from "./list.js";
import callFunctionNavigation from "./navigation.js";
import openContainer from "./openContainer.js";
import createElement from "./validetion.js";

openContainer()
createElement(historyData, physicsData, geographyData)
openAndCloseList()
callFunctionNavigation()
callFocusContainer()