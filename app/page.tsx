import Image from "next/image";

export default function Home() {
  return (
    <main>
    <div className="center-container">
        <div className="prompt-container">
            <div className="vocab-con">
             <span className="current-vocab inline-block" id="current-vocab" >Vocab</span>
           </div>
            <input type="text" className="centered-input inline-block" placeholder="Enter text here"></input>
            <button className="btn inline-block" id="myBtn" type="submit">Go!</button>
        </div>
    </div>
    </main>
  );
}
