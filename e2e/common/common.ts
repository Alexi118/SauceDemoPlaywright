import { Locator } from "@playwright/test";
import { resolve } from "path";

export const getListOfElements = (listOfElements:Locator)=>{
    const myPro = new Promise((resolve, reject))=>{
        resolve(listOfElements.allInnerTexts().then((res)=>{
        res.map(x=>x.replace('$',''))
    }))}
    return myPro;
};

export const sortListFromAtoZ = (listOfElements:string[])=>{
    return listOfElements.sort();
};

export const sortListFromZtoA = (listOfElements:string[])=>{
    return listOfElements.reverse();
};