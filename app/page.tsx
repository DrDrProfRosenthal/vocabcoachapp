import Image from "next/image";
// import { lusitana } from '@/app/ui/fonts';

import VocabChart from '@/app/ui/dashboard/vocab-chart';
import { fetchVocabs} from '@/app/lib/data';


export default async function Home() {

  const vocabs = await fetchVocabs();

  return (
    <main>
    <div className="center-container">
        <div className="prompt-container">
            <div className="vocab-con">
             <span className="current-vocab inline-block" id="current-vocab" >Vocab</span>
           </div>
            <input type="text" className="centered-input inline-block" placeholder="Enter text here"></input>
            <button className="btn inline-block" id="myBtn" type="submit">Go!</button>


       <div >
        { <VocabChart vocab={vocabs}  /> }
      
      </div>

        </div>
    </div>





    </main>
  );
}


