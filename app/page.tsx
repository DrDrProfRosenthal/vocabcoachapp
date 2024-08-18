import Image from "next/image";
// import { lusitana } from '@/app/ui/fonts';

import { sql } from "@vercel/postgres";


export default async function Home({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from vocabs`;

 
  return (
    <main>
    <div className="center-container">
        <div className="prompt-container">
            <div className="vocab-con">
             <span className="current-vocab inline-block" id="current-vocab" >Vocab</span>
           </div>
            <input type="text" className="centered-input inline-block" placeholder="Enter text here"></input>
            <button className="btn inline-block" id="myBtn" type="submit">Go!</button>


            <div>
            {rows.map((row) => (
              <div key={row.id} className="vocab-item">
                <h2>{row.word}</h2>
                <p>{row.meaning}</p>
              </div>
            ))}
          </div>

          
         </div>

        
    </div>

    </main>
  );
}


