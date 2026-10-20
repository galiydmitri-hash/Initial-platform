import changeForms from "./changeForms.js";
import scroll from "./controlMenu.js";
import { historyData, physicsData, geographyData, civicEducationData, lawData } from "./data.js";
import fastGoTo from "./fastGoTo.js";
import callFocusContainer from "./firstContainer.js";
import openAndCloseList from "./list.js";
import callFunctionNavigation from "./navigation.js";
import openContainer from "./openContainer.js";
import counter from "./paragraphCounter.js";
import settingsFunction from "./settingsContainer.js";
import text from "./text.js";
import createElement from "./validetion.js";

openContainer()
createElement(historyData, physicsData, geographyData, civicEducationData, lawData)
callFunctionNavigation()
callFocusContainer()
text()
changeForms()
scroll()
openAndCloseList()
settingsFunction()
counter(historyData, physicsData, geographyData, civicEducationData, lawData)
fastGoTo()