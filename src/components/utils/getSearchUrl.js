import { API_BASE_URL} from "../config/config.js";

export default function Search(searchDetails)
{
    const searchBy=searchDetails.searchBy;
    const searchTerm=searchDetails.searchTerm;
 let finalUrl;
switch(searchBy)
{
    case "title":
    finalUrl=API_BASE_URL+"/dvds/title/"+searchTerm;
    break;

    case "releaseYear":
        finalUrl=API_BASE_URL+"/dvds/year/"+searchTerm;
    break;

    case "directorName":
        finalUrl=API_BASE_URL+"/dvds/director/"+searchTerm;
    break;
    
    case "rating":
        finalUrl=API_BASE_URL+"/dvds/rating/"+searchTerm;
}


return finalUrl;
}