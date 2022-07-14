import React from "react";

function Pet({pet, onAdoptPet}) {
  const {id, name, type, age, weight, gender, isAdopted} = pet

  function handleAdoptClick(id){
    // console.log(pet.isAdopted)
    onAdoptPet(id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}  
          {/* PET NAME */}
          {gender === "male" ? `${name} ♂` : `${name} ♀`}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => handleAdoptClick(id)}>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;
