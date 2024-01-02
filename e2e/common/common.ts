import { Locator } from "@playwright/test";

export const getListOfElements = (listOfElements:Locator)=>{
    return listOfElements.allInnerTexts().then((res)=>{
        var result = res.map(x=>x.replace('$',''))
        return result;
    });
};

export const sortListFromAtoZ = (listOfElements:string[])=>{
    return listOfElements.sort();
};

export const sortListFromZtoA = (listOfElements:string[])=>{
    return listOfElements.reverse();
};

export const sortListFromLtoH = (listOfElements:string[])=>{
    const numbers = listOfElements.map(parseFloat);
    numbers.sort((a, b) => a - b);
    const sortedString = numbers.map((number)=>number.toString());
    return sortedString;
};

export const sortListFromHtoL = (listOfElements:string[])=>{
    const numbers = listOfElements.map(parseFloat);
    numbers.sort((a, b) => b - a);
    const sortedString = numbers.map((number)=>number.toString());
    return sortedString;
};
