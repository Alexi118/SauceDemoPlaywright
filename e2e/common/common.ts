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
    return listOfElements.sort(function(a,b) { return a-b; });
};

export const sortListHromAtoL = (listOfElements:string[])=>{
    return listOfElements.sort(function(a,b) { return b-a; });
};
