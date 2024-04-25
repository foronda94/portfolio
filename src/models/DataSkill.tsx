import { SkillItem } from './Skill';
import styledComponents from '../assets/img/skill/styled-components.svg';
import typescript from '../assets/img/skill/typescript.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faHtml5, faCss3Alt, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';

export const DataSkill: SkillItem[] = [
  {
    name: "HTML",  
    logo: <FontAwesomeIcon icon={faHtml5} fontSize="80px" color='#000' />,
  },
  {
    name: "CSS",  
    logo: <FontAwesomeIcon icon={faCss3Alt} fontSize="80px" color='#000' />,
  },
  {
    name: "Bootstrap",  
    logo: <FontAwesomeIcon icon={faBootstrap} fontSize="80px" color='#000' />,
  },
  {
    name: "Styled-Components",  
    logo: styledComponents,
  },
  {
    name: "JavaScript",  
    logo: <FontAwesomeIcon icon={faJs} fontSize="80px" color='#000' />,
  },
  {
    name: "TypeScript",  
    logo: typescript,
  },
  {
    name: "React",  
    logo: <FontAwesomeIcon icon={faReact} fontSize="80px" color='#000' />,
  },
  {
    name: "Git",  
    logo: <FontAwesomeIcon icon={faGithub} fontSize="80px" color='#000' />,
  },
]