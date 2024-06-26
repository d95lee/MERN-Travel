const countriesByContinent = {
    Africa: ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso",
    "Burundi", "Cape Verde", "Cameroon", "Central African Republic",
    "Chad", "Comoros", "Democratic Republic of the Congo",
    "Republic of the Congo", "Djibouti", "Egypt",
    "Equatorial Guinea", "Eritrea", "Eswatini",
    "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
    "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho",
    "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania",
    "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria",
    "Rwanda", "São Tomé and Príncipe", "Senegal", "Seychelles", "Sierra Leone",
     "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo",
     "Tunisia", "Uganda", "Zambia", "Zimbabwe"]
    ,
    Asia: ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain",
     "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus",
      "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan",
       "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon",
        "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea",
         "Oman", "Pakistan", "Palestine", "Philippines", "Qatar", "Russia",
          "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria",
           "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkey",
            "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"]
    ,
    Europe: ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan",
     "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia",
      "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France",
       "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy",
        "Kazakhstan", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg",
         "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia",
          "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino",
           "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
            "Turkey", "Ukraine", "United Kingdom", "Vatican City"]
    ,
    NorthAmerica: ["Antigua and Barbuda", "Bahamas",
     "Barbados", "Belize", "Canada", "Costa Rica",
      "Cuba", "Dominica", "Dominican Republic",
      "El Salvador", "Grenada", "Guatemala",
       "Haiti", "Honduras", "Jamaica", "Mexico",
        "Nicaragua", "Panama", "Saint Kitts and Nevis",
         "Saint Lucia", "Saint Vincent and the Grenadines",
          "Trinidad and Tobago", "United States"]
    ,
    SouthAmerica: ["Argentina", "Bolivia", "Brazil", "Chile",
     "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname",
      "Uruguay", "Venezuela"]
    ,
    Oceania: ["Australia", "Federated States of Micronesia",
     "Fiji", "Kiribati", "Marshall Islands", "Nauru", "New Zealand",
      "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga",
       "Tuvalu", "Vanuatu"]

  };

export const isCountryInContinent= (continent, country)=>{

    return countriesByContinent[continent].includes(country);
  }
