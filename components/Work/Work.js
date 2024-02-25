/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { Fade } from "react-reveal";
import { Howl } from "howler";
import Button from "../Button/Button";
import styles from "./Work.module.scss";
import { MENULINKS, WORK } from "../../constants";
const Work = ({ clientWidth }) => {
  const [checked, setChecked] = useState(new Array(WORK.length).fill(false));
  const [isActive, setIsActive] = useState(false);
  const [gunStyle, setGunStyle] = useState({});
  const [mockupStyle, setMockupStyle] = useState({});
  const [macTopStyle, setMacTopStyle] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [reveal, setReveal] = useState(0);
  const targetSection = useRef(null);
  const inputRef = useRef(null);
  const macRef = useRef(null);
  const companyCard = useRef(null);
  const heightRef = useRef(null);
  const videoRef = useRef(null);

  const options = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.1,
    gyroscope: false,
  };

  const checkedSound = new Howl({
    src: ["/sounds/pop-down.mp3"],
    volume: 0.7,
  });

  const getHeight = (position) => heightRef.current + 53 * position;

  const handleChange = (position) => {
    const height = getHeight(position);

    setChecked(() =>
      checked.map((item, index) => {
        if (index === position) return true;
        else return item;
      })
    );

    setGunStyle({
      transform: "translateY(" + height + "px)",
      visibility: "visible",
    });
    setIsActive(true);

    setChecked(() =>
      checked.map((item, index) => {
        if (index === position) return false;
        else return item;
      })
    );

    setTimeout(() => {
      checkedSound.play();
      setMockupStyle({
        transform: "translate3d(0, 0, 0) rotateX(-90deg)",
        transition: "1s",
      });
      setMacTopStyle({
        transform: "translate3d(0, 0, 0) rotateX(-90deg)",
        transition: "1s",
      });
    }, 1500);

    setTimeout(() => {
      setIsActive(false);
      macRef.current.scrollIntoView({
        behavior: "smooth",
      });
      setGunStyle({
        transform: "translateY(500px)",
        visibility: "hidden",
      });
      setMockupStyle({
        transform: "translate3d(0, 0, 0) rotateX(0deg)",
        transition: "500ms",
      });
      setMacTopStyle({
        transform: "translate3d(0, 0, 0) rotateX(0deg)",
        transition: "500ms",
      });
      videoRef.current?.load();
    }, 3000);
  };

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".work-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection, isActive]);

  useEffect(() => {
    VanillaTilt.init(companyCard.current, options);
  }, [companyCard.current]);

  useEffect(() => {
    if (inputRef.current) {
      const handlePosition = () => {
        const { top } = inputRef.current.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        const clientTop = document.documentElement.clientTop;
        const output = Math.floor((top + scrollTop - clientTop) / 100) + 60;
        heightRef.current = output;
      };

      handlePosition();
      window.addEventListener("resize", handlePosition);
      window.addEventListener("scroll", handlePosition);
    }

    return () => {
      window.removeEventListener("resize", handlePosition);
      window.removeEventListener("scroll", handlePosition);
    };
  }, [inputRef.current]);

  return (
    <section
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-20"
      id={MENULINKS[3].ref}
      ref={targetSection}
    >
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
            TRAVAIL
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
            Expérience
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
            Un bref récapitulatif de l'endroit où j'ai travaillé.{" "}
            </h2>
          </div>
        </div>
        <div className="-my-6">

        <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

                <div className="w-full max-w-3xl mx-auto">
                
                    <div className="-my-6">

                        <div className="relative pl-8 sm:pl-32 py-6 group">
                            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Développeur Web Full Stack</div>
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2023</time>
                                <div className="text-xl font-bold text-slate-900">Stage chez NEJMA SERVICE SARL</div>
                            </div>
                            <div className="text-slate-500">Participation au développement d'une application web de gestion des ressources humaines en utilisant du HTML, CSS, JavaScript et React.js.</div>
                            <div className="text-slate-500">Implémentation de fonctionnalités front-end telles que la création de tableaux de bord interactifs et la gestion des formulaires.</div>
                            <div className="text-slate-500">Contribution au développement du backend en utilisant Node.js et Express.js pour la création d'API RESTful pour l'interaction avec la base de données.</div>

                        </div>
                        
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Web Designer</div>
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2022</time>
                                <div className="text-xl font-bold text-slate-900">Stage chez REMBRAND DESIGN</div>
                            </div>
                            <div className="text-slate-500">Collaboré avec le Digital Art Director pour affiner les concepts, intégrer les retours d'équipe et optimiser les designs en fonction des objectifs du marketing.</div>
                            <div className="text-slate-500">Participé aux réunions de planification pour discuter des exigences du projet, proposer des idées et présenter les concepts de design.</div>

                        </div>
                        
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Designer Graphiste</div>
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2021</time>
                                <div className="text-xl font-bold text-slate-900">Stage chez REMBRAND DESIGN</div>
                            </div>
                         
                            <div className="text-slate-500">Participé activement à la création et à la mise en page de supports visuels tels que des affiches, des dépliants et des visuels pour les médias sociaux.</div>
                            <div className="text-slate-500">Contribué à la conception de maquettes et de prototypes en utilisant des outils de conception graphique tels que Adobe Photoshop et Illustrator.</div>

                        </div>
                        
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Assistant Chef de Projet</div>
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2020</time>
                                <div className="text-xl font-bold text-slate-900">Stage au sein de NH MULTl-AFFAIRE SARL</div>
                            </div>
                            
                            <div className="text-slate-500">Collaborer à distance avec l'équipe du Département Marketing en tant qu'Assistant Chef de Projet.</div>
                            <div className="text-slate-500">Démontrer un engagement exceptionnel et une grande capacité d'apprentissage malgré les défis liés à la crise sanitaire.</div>
                            <div className="text-slate-500">Contribuer de manière précieuse à l'entreprise en fournissant des idées et des efforts concrets.  </div>
                            <div className="text-slate-500">Atteindre les objectifs fixés pour la période de formation.</div>

                        </div>

                    </div>
                    
                </div>

               

                

            </div>
        </div>
    </main>
        </div>
      </div>
    </section>
  );
};

export default Work;
