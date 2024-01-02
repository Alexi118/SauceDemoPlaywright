import { Locator } from "@playwright/test";

export const getListOfElements = async (listOfElements:Locator)=>{
    return await listOfElements.allInnerTexts();
};

export const sortListFromZtoA = async (listOfElements:Locator)=>{
    return await listOfElements.allInnerTexts();
}