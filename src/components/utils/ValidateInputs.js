export default function ValidateInputs(dvd) {
  
    const validationErrors = {};
    if (dvd.title.trim() === "") {
      validationErrors.title="Please enter a title for the DVD"; 
      return validationErrors; 
    }

    if (dvd.releaseYear.trim() === "" || dvd.releaseYear.length !== 4) {     
      validationErrors.releaseYear="Please enter a 4-digit year"; 
      return validationErrors;     
    }
    if (dvd.releaseYear > 2023) {      
      validationErrors.releaseYear="Please enter a 4-digit year not greater than 2023";  
      return validationErrors;        
    }
   
    return validationErrors;
  }