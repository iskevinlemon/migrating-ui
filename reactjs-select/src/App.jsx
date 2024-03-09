import { useState } from "react";

function App() {

  const [selectedCountry, setSelectedCountry] = useState("");

  var selectCountryOptions = [
    {
        id: 1,
        iconUrl: "icons/Singapore.png",
        value: "Singapore"
    },
    {
        id: 2,
        iconUrl: "icons/Malaysia.png",
        value: "Malaysia"
    },
    {
        id: 3,
        iconUrl: "icons/Indonesia.png",
        value: "Indonesia"
    }
  ];

  return (
    <>

      <div className="container mt-5">
          <h5>Select country</h5>

          <div className="dropdown">
            <div 
              className="dropdown-select"
              data-toggle="dropdown"
            >
              {selectedCountry != "" && 
                <img src={`icons/${selectedCountry}.png`}
                    className="ml-2 mr-2"
                    width="20" 
                    alt={`Logo of ${selectedCountry}`}
                />
              }
              {selectedCountry == "" && 
                <span>
                  Choose an option
                </span>
              }

              {selectedCountry}
            </div>

            <div className="dropdown-menu p-1">
              {selectCountryOptions.map((country) => (
                <a className="dropdown-item p-2 px-3" 
                  key={country.id}
                  onClick={(e) => setSelectedCountry(country.value)}
                >
                  <img src={`${country.iconUrl}`} width={20} className="mr-2"/>
                  {country.value}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-5">You have selected: {selectedCountry}</p>

      </div>
    </>
  );
}

export default App;
