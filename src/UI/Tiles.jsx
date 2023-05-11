
import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import TekoBold from "/Teko-Bold.woff"
import MontserratBold from "/Montserrat-Bold.woff"
import MontserratRegular from "/Montserrat-Regular.woff"
import Featured from "./Featured";
import Work from "./Work";
import Art from "./Art";
import About from "./About";
import { Contact } from "./Contact";
export function Tiles(props) {

  const { nodes } = useGLTF("/tiles.glb");
  const sound = props.sound

  const [interfaceState, setInterfaceState] = useState(
    [
      {
        type: "featured",
        key: "Yourganizer",
        description: "Yourganizer is a full-stack application designed to simplify the arrangement of any academic task or material. The incentive of the app is to keep academic materials such as lecture pdfs, notes, and files in one place so they can be accessed faster and saved for future usage while in academia or after graduation. It introduces easy to use interface, a personal account as well as the ability to save a variety of multimedia including notes, audio, dates, and other supplementary files saved in the database. The back-end is still in development.",
        technology: `#React.JS #Express.JS #MongoDB #Styled-Components #Tailwind #React-Router #Axios`,
        bio: "Your Pocket Class Organizer"
      },
      {
        type: "featured",
        key: "Portfolio",
        description: "The project features an interactive 3d environment in the form of an accessible interface to introduce an interesting approach to website interaction in form of immersive 3d presentation. It offers a cartoony style three-dimensional layout and camera movement as the main medium of interaction to showcase the entire interior of the 3d model as well as to present interactive elements to demonstrate my past work. The project uses React Three Fiber library to include webGL functionality and basic React to mainly manage, references and distribute states and objects between JSX components but also to bring react like clean file structure.",
        technology: "#ReactThreeFiber #drei #Tailwind #Styled-Components #React-Router #GSAP",
        bio: "React Three Fiber Portfolio"
      },
      {
        type: "web",
        key: "Dispersion",
        description: "Dispersion Lab was a rebuild/redesign project for York University digitally-mediated performance, electroacoustic and computer music, sonic arts, improvisation, and computational creativity lab. The new design introduced a sharp and modern interface with a touch of old accents and systems but also introduced new solutions like filtering and archive systems. The website uses WordPress build with a basic PHP CMS structure as well as an advanced custom fields plugin to provide great flexibility but simplicity in terms of content addition",
        technology: "#Wordpress #Bootstrap #CSS #HTML",
        link: "https://dispersionlab.org/",
        bio: "Research-creation laboratory",
        references: "Image and Name taken from - https://dispersionlab.org/"
      },
      {
        type: "web",
        key: "Doug",
        description: "The website was created as a personal portfolio for York University Professor Douglas Van Nort. Work included creating similar to the former template layout with a more modern touch and slight animations, improvement of content addition functionalities including basic WordPress gutenberg functionality, core WP pages  as well as dynamic filtering using JSON object.",
        technology: "#Wordpress #Bootstrap #PHP #HTML #CSS #Javascript",
        link: "https://dvntsea.com/",
        bio: "Personal Portfolio Website",
        references: "Image and name taken from - https://dvntsea.com/"
      },
      {
        type: "web",
        key: "Slo",
        description: "The SLO Lab website was created to provide multimedia hub functionality to York University's interdisciplinary research-creation laboratory - SLO Lab. The simple, minimalistic yet clean, and grid bootstrap-based interface maximizes the simplicity of use with clean subtle hover/click animations to indicate the title of the artistic element. It was created on the WordPress platform using the basic PHP file structure and custom querying to create grid structures and menus as well as to simplify the usage/addition of the content.",
        technology: "#Wordpress #Bootstrap #CSS #HTML",
        link: "https://slolab.ca/",
        bio: "Research-creation laboratory",
        references: "Taken from - https://slolab.ca/"
      },
      {
        type: "web",
        key: "Crs",
        description: "A small business website introducing a simple but informative interface about concrete repair and pouring services. Clean interface and simplicity of use were a priority for the website that's why WordPress along with Elementor was used in development to accommodate visual needs, Search Engine Optimization as well as ease of content modification and addition.",
        technology: "#Wordpres #Elementor",
        link: "https://concreterepairsolutions.ca/",
        bio: "Concrete Services Website"
      },
      {
        type: "art",
        key: "deforeventure",
        description: "Deforeventure is an exploratory website that inspires and educates interactors about the complex issue of deforestation and the impacts on the natural world. In the spirit of interactive storytelling, this website offers users a journey through a number of contextual and thematic categories that reveal the causes and effects of deforestation on animals, people, and natural environments. Item has been showcased in 2020/2021 York University End of the Year Gallery",
        technology: "#WordPress #HTML #CSS #Javascript #Elementor",
        link: "http://dmgallery.apps01.yorku.ca/deforeventure/",
        bio: "Deforestation Web/Art Interface",
      },
      {
        type: "art",
        key: "soot",
        description: "Soot : Stories of Wildfires is an interactive Unity visualization showcasing  a bear which is struggling with natural occurence of wildfires in British Columbia. The environment reflected a real BC geological location heightmap and procedurally created rich forest flora. The project used unity as visualization engine with interactive quick time events to create a dynamic plot and custom cutscenes.",
        technology: "#Unity #C#",
        bio: "Interactive Wildfire Unity Visualization"
      },
      {
        type: "art",
        key: "model",
        description: "The project indirectly symbolises humans as a creature of resilience, bound to nature and sensitivity. The golden tail deeply stuck in the rock indicates success in endeavours while it also pierces through the chest showcasing hard efforts towards the goals. Chest and legs are covered in bark and moss which directly reflects our genesis and environment we live in as well as our curiosity about nature. Glass made body illustrates that as resilient as we are in our efforts to succeed, we also have sensitive and empathetic feelings towards other more important matters and people. Item has been showcased in 2022/2023 York University End of the Year Showcase",
        technology: "#Maya",
        bio: "Naturally Fragile Person on the Edge",
        link: "http://dmgallery.apps01.yorku.ca/digital-media-eoys-2023/"
      },
      {
        type: "art",
        key: "carousel",
        description: "The project showcases an interesting data visualization made in processing. Every group member recorded drink consumption over a week in the Excel sheet which after the data was averaged and put as a weekly drink consumption interface. The interface was designed as 8-bit pixel art and the item sizes on the carousel depended on the average daily consumption. The main technology used was an art/data visualization program called processing and Java.",
        technology: "#Java #Processing",
        bio: "Weekly Drink Intake Data Visualization"
      },
      {
        type: "about",
        key: "PHILIP \n MICHALOWSKI",
        jobTitle: "FRONT-END DEVELOPER",
        description: "I am a passionate front-end developer who \n specializes in both clean and simple interfaces \n as well as innovative web experiences. \n As a holder of B. A Digital Media \n from York University and diverse innovative \n design and programming courses I always \n combine technical skills and design knowledge \n with new innovative approaches \n to web development following current trends."
      },
      {
        key: "call",
        type: " contact",
        email: "emailLink",
        linkedin: "link",
        github: "link",
      }
    ]
  )

  return (
    <>
     <Featured sound={sound} object={interfaceState.filter(datum => datum.type === "featured")} nodes={nodes} TekoBold={TekoBold} MontserratBold={MontserratBold} MontserratRegular={MontserratRegular}></Featured>
     <Work sound={sound} object={interfaceState.filter(datum => datum.type === "web")} nodes={nodes} TekoBold={TekoBold} MontserratBold={MontserratBold} MontserratRegular={MontserratRegular}></Work>
     <Art sound={sound} object={interfaceState.filter(datum => datum.type === "art")} nodes={nodes} TekoBold={TekoBold} MontserratBold={MontserratBold} MontserratRegular={MontserratRegular}></Art>
    <About sound={sound} state={interfaceState.find(datum => datum.type === "about")} TekoBold={TekoBold} MontserratBold={MontserratBold} MontserratRegular={MontserratRegular}></About>
   <Contact sound={sound} TekoBold={TekoBold} MontserratBold={MontserratBold} MontserratRegular={MontserratRegular}></Contact>
    </>
  );
}

useGLTF.preload("/tiles.glb");