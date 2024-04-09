console.log("HAB Taxi Services");

// FETCH and READ the .json disk files
fetch('./employee.json')
  .then(response => response.json())
  .then(employee => {
    
    // Loop through an array in the JSON Data
    employee.forEach(empInfo => {
        personalInfo(empInfo);
        const addressString = describeAddress(empInfo.empAddress);
        const licenseString = describeLicense(empInfo.licenseInfo);
        createDescriptionElement(addressString);
        createDescriptionElement(licenseString);
        console.log(empInfo);
        console.log(addressString);
        console.log(licenseString);
    });
    })
    
    .catch(error => {
        console.error(error);
    });    
    
    function personalInfo(empInfo) {
        const personElement = document.createElement('div');
        personElement.classList.add('empInfo');
        personElement.textContent = `Welcome ${empInfo.empInfo.empFirstName} ${empInfo.empInfo.empLastName}. Your employee ID is ${empInfo.empInfo.empID}`;
        document.querySelector('body').appendChild(personElement);
    }

    // Function to create a new element with description text and append it to the body
    function createDescriptionElement(description) {
        const descriptionElement = document.createElement('div');
        descriptionElement.textContent = description;
        document.querySelector('body').appendChild(descriptionElement);       
    }

    // Function to return a string describing address information
    function describeAddress(empAddress) {
        return `Address: ${empAddress.empStreet}, ${empAddress.empCity}, ${empAddress.empProvince}, ${empAddress.empPostalCode}, Phone: ${empAddress.empPhoneNo}`;
    }

    // Function to return a string describing license information
    function describeLicense(licenseInfo) {
        return `License No: ${licenseInfo.empLicenseNo}, Expiry: ${licenseInfo.licenseExpiry}`;
    }

    