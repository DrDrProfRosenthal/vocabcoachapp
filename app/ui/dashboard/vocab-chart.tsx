
import { lusitana } from '@/app/ui/fonts';

import { VocabFormat } from '@/app/lib/definitions';



export default async function VocabChart(
  {
    vocab,
}: {
  vocab: VocabFormat[];
}) {
  return (
    <div>
     hello   
              <p >
                {vocab.german}
              </p>
     </div>
        
   
  );
}


