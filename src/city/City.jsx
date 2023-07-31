
import React, { useState } from 'react'
import './City.css'

function City() {
    const [selectCountry, setSelectCountry] = useState("")
 const [selectOption, setSelectOption ] = useState("")
    const country = [
        {
            country: "India",
            Code: "IN",
            cities: ["Delhi", "Mumbai", "chennai"]


        },
        {
            country: "china",
            code: "CN",
            cities: ["Foahan", "Human", "Beijing"]
        },
        {
            country: "Australia",
            code: "AU",
            cities: ["sydney", "Canberra", "Perth"]

        },
        {
            country: "Sri Lanka",
            code: "SL",
            cities: ["Colombo", "Candy", "Jaffna"]
        },
        {
            country: "Belize",
            code: "BZ",
            cities: [ "Corozal Town", "Dangriga, Orange Walk Town", "Punta Gorda, San Ignacio"]
        },
        {
            country: "Danemark",
            code: "DK",
            cities: ["Aarhus", "Randers", "Herning"]
        },
        {
            country: "Egypt",
            code: "EG",
            cities: ["Cairo", "Alexandria", "Gizeh"]
        },
        {
            country: "France",
            code: "FR",
            cities: ["Paris", "Marseille", "Lyon"]
        },
        {
            country: "Germany",
            code: "	DE",
            cities: ["Berlin", "Munich", "Dortmund"]
        },
        {
            country: "Hong Kong",
            code: "HK",
            cities: ["kowloon", "Sham Shui Po","sha Tin "]
        },


    ]
    // const [city , setCity]= useState()
    console.log(selectCountry)

    return (
        <div className='country'>
            <div className='CountryName'>
            <h1>Select country and get their city</h1>
            {/* <select >
        <option>Select country</option>
        <option>India</option>
        <option>China</option>
        <option>Australia</option>
        <option>Sri Lanka</option>
        </select>

        <select>
            <option></option>
        </select> */}
            <select   defaultValue={"select"} onChange={(e) => { setSelectCountry(e.target.value)  }}>
             
                <option value="select" disabled   className='option' >Select Country</option>
                {
                    country.map((city,index) => {

                        return (

                            <option  className='option'  on value={city.country} key={index}>{city.country} </option>
                        )
                    })

                }
            </select>

            <select>
                {
                    country.map((list) => {
                        return (
                            

                                    list.cities.map((city,index) => {
                                        if (list.country === selectCountry) {
                                            return (
                                                <option value={city} key={index}>{city}</option>
                                            )
                                        }

                                    })
                            

                        )
                        console.log(country)
                    })
                }

            </select>
            </div>
        </div>
    )
}

export default City

