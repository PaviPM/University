import logo from './logo.svg';
import './App.css';
import img_1 from './Images/img1.jpg'
import img_2 from './Images/img2.jpg'
import Sample from './sample';
import { useState } from 'react';


function App(){
    return(
        <>
        <Output />
        <Data_1 />
       
        
        </>
    )
}
function Output() {
    const [value, setvalue] = useState ("");
    function Modify(){
        setvalue(<div id='scholar'><li>University scholarships</li>
        <li>Endowed scholarships</li>
        <li>External scholarships</li></div>)
    }
  return (
    <>
    <div id='container_1'>
        <ul>
            <li>Current Students</li>
            <li>Faculty & Staff</li>
            <li>Alumni</li>
            <li>COVID-19</li>
            <li>APPLY</li>
            <li>REQUEST INFO</li>
            <li>PLAN A VISIT</li>
            <li>MYABC</li>
        </ul>
    </div>
    
    <div id='container_2'>
        <ul>
            <li id='title'>ABC University</li>
            <li>Campus Centers</li>
            <li>Online</li>
        </ul>
        <input></input>
    </div>

    <div id='container_3'>
        <img src={img_2}></img>
        <h1>PREPARING STUDENTS FOR SUCCESSFUL CARRERS</h1>
        <button id='btn_1'>FIND YOUR PROGRAM</button>
        <button id='btn_2'>REQUEST INFO</button>
    </div>
    
    <div id='container_4'>
        <h1>75+ Programs. For You.</h1>
        <p>Transform your life and career with an undergraduate or graduate degree! Both online and on-campus learning is available so you can learn on your schedule.</p>
    </div>

    <div id='container_5'>
        <img src={img_1}></img>
        <h1>Making College Affordable</h1>
        <p>Paying for your college degree is possible! At ABC University, we offer financial aid, scholarships, grants and military discounts to help you pay for college.</p>
        <button onClick={Modify}>VIEW SCHOLARSHIPS</button>
        <div><p>{value}</p></div>
    </div>
    </>
  );
}
function Data_1(){
    return(
        <>
       <div id='container_6'>
        <h1>Online & On-Campus</h1>
        <p>Transform your life and career with an undergraduate or graduate degree! Both online and on-campus learning is available so you can learn on your schedule.</p>
    </div>
    <Sample />
        </>
    )
}

function Pavi_1(){
    const [data,setdata] = useState("")
    function Change(){
        setdata(<div><div id='cat_1'>"MBBS or Bachelor of Medicine and Bachelor of Surgery is a very prolonged study that requires a huge amount of patience and ability. Being a medical professional is one of the bravest and most humble occupations. MBBS curriculum describes different medicine and human anatomy and is able to educate the participants on how to test and cure specific diseases."</div>
        <div id='cat_2'>"BDS (Bachelor of Dental Surgery) is a 5-years undergraduate program and the only approved professional dental course in India. Students become doctors after the BDS course. It is a compulsory course for students aspiring to work as dentists at government or private hospitals.BDS mainly focuses on training and introducing students to the dental sciences and surgeries."</div>
        <div id='cat_3'>"BHMS(Bachelor in Homeopathic Medicine and Surgery) covers the knowledge regarding homeopathic medical system, which involves the treatment of patients with the high dilutions of the homeopathic medicines mainly in liquid and tablet form to enhance body's natural healing system. BHMS course duration is 5 years and 6 months which includes 1 year of rotatory internship."</div>
        
        
        
        </div>)
        
    }
    return(
        <>
        <div id='containee'>
        <h2>HOW CAN WE HELP?</h2>
        <p>I want to be a Doctor</p>

        <p>so that I can choose  <select name="" id="">
            <option value="">MBBS</option>
            <option value="">BDS</option>
            <option value="">BHMS</option>
        </select></p>
        <h4>We'll offer ideas to help you meet your goal.</h4>
        <div><p>{data}</p></div>
        <button onClick={Change}>See Suggestions</button>
    </div>
        </>
    )
}

export default (Pavi_1);
export {App};
