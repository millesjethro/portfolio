import React, {useState} from 'react';
import './home.css';
import protproj from './Proteus.jpg'
import androidproj from './android.jpg'
import tinkerproj from './tinkercad.jpg'
import webproj from './website.jpg'




export default function Home() {
    const [infos, setInfo] = useState(false)
    const info = () =>{
        if(infos==false){
            setInfo(true);
        }
        else{
            setInfo(false);
        }
    }

    const [hobbos, setHobbos] = useState(false)
    const hobby = () =>{
        if(hobbos==false){
            setHobbos(true);
        }
        else{
            setHobbos(false);
        }
    }

    const [lang, setLang] = useState(false)
    const languages = () =>{
        if(lang==false){
            setLang(true);
        }
        else{
            setLang(false);
        }
    }

    const [proj, setProject] = useState(false);
    const projects = () =>{
        if(proj==false){
            setProject(true);
        }
        else{
            setProject(false);
        }
    }

    const [prot, setProt] = useState(false);
    const proteus = () =>{
        if(prot==false){
            setProt(true);
        }
        else{
            setProt(false);
        }
    }

    const [andr, setAndroid] = useState(false);
    const android = () =>{
        if(andr==false){
            setAndroid(true);
        }
        else{
            setAndroid(false);
        }
    }

    const [web, setWebsite] = useState(false);
    const website = () =>{
        if(web==false){
            setWebsite(true);
        }
        else{
            setWebsite(false);
        }
    }

    const [tink, setTinker] = useState(false);
    const tinker = () =>{
        if(tink==false){
            setTinker(true);
        }
        else{
            setTinker(false);
        }
    }
    return (
        <body>
            <div className="introduction">
                <div className="hello">HELLO!</div>
                <div className="name">I'm Del Rosario, M.</div>
            </div>
            <div className="start">
                <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" className="imginfo"/>
                <div className="list">
                    <ul> PROJECTS COMPLETED:
                        <li>LET'S WATCH APPLICATION</li>
                        <li>BUY AND SELL CAR WEBSITE</li>
                        <li>TINKERCAD ACTIVITIES</li>
                        <li>PROTEUS ACTIVITIES</li>
                    </ul>
                </div>
            </div>
            <button className="middle first" onClick={info}>
                <img src="https://img.icons8.com/fluency/2x/about-us-male.png" className='icon ifirst'/>
                <div className="fontbasic">BASIC INFORMATION</div>
            </button>
            <div className='information' style={{display:(infos? 'block':'none')}}>
                <ul>BASIC INFORMATION:
                    <li>Name: Milles Jethro D. Del Rosario</li>
                    <li>Occupation: Student</li>
                    <li>Course: Computer Engineering</li>
                    <li>Address: #12 Marinas Street Sto. Cristo Concepcion, Tarlac</li>
                </ul>
            </div>
            <button className="middle second" onClick={hobby}>
                <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-hobby-lifestyles-flaticons-flat-flat-icons.png" className='icon isecond'/>
                <div className="fontbasic">MY HOBBY</div>
            </button>
            <div className='information' style={{display:(hobbos? 'block':'none')}}>
                <ul>My Hobbies:
                    <li>Playing Computer Games</li>
                    <li>Watching Anime</li>
                    <li>Coding Stuffs</li>
                    <li>Biking</li>
                </ul>
            </div>
            <button className="middle third" onClick={languages}>
                <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-parse-big-data-flaticons-flat-flat-icons.png" className='icon ithird'/>
                <div className="fontbasic">COMPUTER LANGUAGES</div>
            </button>
            <div className='information' style={{display:(lang? 'block':'none')}}>
                <ul>Computer Literacy:
                    <li>C#, C++, C</li>
                    <li>Java, JavaScript</li>
                    <li>Assembly Language</li>
                    <li>Kotlin, xml</li>
                    <li>MySql</li>
                    <li>CSS, HTML, Jquery</li>
                    <li>Microsoft Office Application (Word, Excel, PowerPoint, etc.)</li>
                </ul>
            </div>
            <button className="middle fourth" onClick={projects}>
                <img src="https://img.icons8.com/color/2x/project-management.png" className='icon ithird'/>
                <div className="fontbasic">PROJECTS</div>
            </button>

            <div className='btndisplay' style={{display:(proj? 'block':'none')}}>
                <button className="last first" onClick={android}>
                    <img src="https://img.icons8.com/fluency/512/android.png" className='icon ithird'/>
                    ANDRIOD
                </button >
                <img src={androidproj} className='imgprot' style={{display:(andr? 'block':'none')}}/>
                <button className="last second" onClick={website}>
                    <img src="https://img.icons8.com/fluency/2x/internet.png" className='icon ithird'/>
                    WEBSITE
                </button>
                <img src={webproj} className='imgprot' style={{display:(web? 'block':'none')}}/>
                <button className="last third" onClick={tinker}>
                    <img src="https://editor.tinkercad.com/assets_v2_2govof8/images/tinkercad-beta-y0tgPT.svg" className='icon ithird'/>
                    TINKERCAD
                </button>
                <img src={tinkerproj} className='imgprot' style={{display:(tink? 'block':'none')}}/>
                <button className="last fourth" onClick={proteus}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Proteus_Design_Suite_Atom_Logo.png/120px-Proteus_Design_Suite_Atom_Logo.png" className='icon ithird'/>
                    PROTEUS
                </button>
                <img src={protproj} className='imgprot' style={{display:(prot? 'block':'none')}}/>                
            </div>
        </body>
    );
}
