import animation from "./animation.js";
import bgColor from "./bg.js";
import callCloseContainer from "./closeContainer.js";
import { civicEducationData, geographyData, historyData, lawData, physicsData } from "./data.js";
import imgAltScript from "./imgAltScript.js";
import createNote from "./note.js";
import callOpenContainer from "./openContainer.js";
import callParagraph from "./paragraph.js";
import profile from "./profile.js";
import callSearching from "./search.js";
import switchContainer from "./switch.js";
import callDataValidation from "./validation.js";

callDataValidation(historyData, physicsData, geographyData, civicEducationData, lawData)
bgColor()
callParagraph(historyData, physicsData, geographyData, civicEducationData, lawData)
callOpenContainer()
callCloseContainer()
switchContainer()
callSearching()
createNote()
profile()
animation()
imgAltScript()