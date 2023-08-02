"use client"

import React from "react";
import axios from 'axios';


export default function Home() {




const calculerMilieuVacances = async () => {
  try {
    const response = await axios.get('https://exemple-api.com/calendrier-scolaire');

    const data = response.data;

    const resultat = data.resultat;

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.textContent = resultat;
  } catch (error) {
    console.error('Erreur lors de la requête vers l\'API :', error);
  }
};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <h1 className='font-bold '>CALCUL DU MILIEU DES VACANCES</h1>

      <div id='principaldiv' className="w-screen mt-9" style={{ display: 'flex', height: '120vh', border: '1px solid gray', padding: '0' }}>
        <section style={{ flex: 1 , padding: '3%'}} className="flex flex-col justify-center">
          <h1 className='font-bold tracking-wide  leading-relaxed mt-20 mb-6 font-playfair-thin'>CET OUTIL CALCULERA LA MOITIE DES VACANCES</h1>
          <p className='text-[#635E5A] mt-9'>Régulièrement lors des séparations ou des jugements de divorce, les enfants sont confiés à un parent pendant une moitié des vacances, puis à l'autre parent pendant l'autre moitié. La question qui revient régulièrement : Quel est le jour des milieux des vacances scolaires ?</p>

          
          <div className="flex ml-40 items-center space-x-5 mt-20">
          <label className="text-[#C74300]" htmlFor="zone">
            </label>
            <select className=" text-center border border-[#C74300] focus:border-[#C74300]">
              <option value="">Sélectionnez une zone</option>
              <option value="Période 1">Zone 1</option>
              <option value="Période 2">Zone 2</option>
              <option value="Période 3">Zone 3</option>
            </select>
            </div>

           <div className="flex ml-40 items-center space-x-5 mt-1">
            <label htmlFor="periode">
            </label>
            <select className=" text-center border color-[#C74300]">
              <option value="">La période des vacances</option>
              <option value="Période 1">Période 1</option>
              <option value="Période 2">Période 2</option>
              <option value="Période 3">Période 3</option>
            </select>
          </div>





          <div className="flex ml-40 items-center space-x-5 mt-1">
   <label htmlFor="heure"></label>
   <select className="text-center border color-[#C74300]" id="heure" name="heure">
    <option value="">Sélectionnez une heure</option>
    {Array.from({ length: 24 }, (_, i) => (
      <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
        {`${i.toString().padStart(2, '0')}:00`}
      </option>
    ))}
  </select>
</div>

            


          
            
          <div className=" flex mr-14 justify-center  mt-9">




          <button className="bg-[rgba(199,67,0,0.3)] border border-[#C74300] text-[#C74300] hover:bg-[rgba(199,67,0,0.5)] hover:border-[#C74300] m-4 hover:text-[#C74300] py-4 px-14
  rounded btnn" onClick={calculerMilieuVacances}>
  CALCULER
</button>





      
            
          </div>

          <p className='text-[#635E5A] mt-20'>Cet outil tient compte des heures d'été/hiver, des années bissextiles, etc.... </p>
          <p className='text-[#635E5A] mt-5 mb-10'>Souvent il est recommandé de prendre les dates des vacances de l'académie où est scolarisé l'enfant. Elles peuvent différer de celles de l'académie où vous résidez. Si vous avez un doute, vous pouvez consulter le site officiel du Ministère de l'Éducation Nationale.</p>
        </section>

        <section style={{ flex: 1 }}>
          <img src="p.png" alt="Image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </section>

        <div id="resultContainer" className="text-[#C74300] bg-[rgba(199,67,0,0.3)] border border-[#C74300] py-2 px-2 rounded font-bold text-xl text-center" style={{ position: 'absolute', top: '70%', left: '78%', transform: 'translate(-60%, -50%)', zIndex: 9999,   }}></div>

        



      </div>
      <p  className="text-[#C74300] pt-3" >Cet outil est un service gratuit pour les utilisateurs et les personnes concernées. Sa maintenance et sa mise à jour pourrait être financée par des bannières de publicités. Merci de votre compréhension</p>


    </main>
  );
}
