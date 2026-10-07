import { historyData, physicsData, geographyData, civicEducationData, lawData } from "./data.js";
import callFocusContainer from "./firstContainer.js";
import openAndCloseList from "./list.js";
import callFunctionNavigation from "./navigation.js";
import openContainer from "./openContainer.js";
import text from "./text.js";
import createElement from "./validetion.js";

openContainer()
createElement(historyData, physicsData, geographyData, civicEducationData, lawData)
openAndCloseList()
callFunctionNavigation()
callFocusContainer()
text()