import { TbBrandPython } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";

export const projects = [ 
    {   
        id: 1,
        imgLink: 'portfo.png',
        title: 'Portfolio',
        descr: 'My portfolio landing page project created using React',
        languages: [
             <FaReact />,              
            <TbBrandTailwind />,
        ],
        link: 'https://github.com/Olugbengz/my-portfolio',
    },
    {   
        id:2,
        imgLink: 'telemed.jpg',
        title: 'Telemedicine',
        descr: 'Ongoing: A Telemedicine project that intends to cater to the needs of users.',
        languages: [
             <TbBrandPython />, 
             <TbBrandDjango />, 
            <FaReact />,
            <TbBrandTailwind />,
        ],
        link: 'https://github.com/Olugbengz/telemed-project',
    },
    // {   
    //     image: '',
    //     title: '',
    //     descr: '',
    //     languages: {

    //     },
    //     link: '',
    // },
    // {   
    //     image: '',
    //     title: '',
    //     descr: '',
    //     languages: {

    //     },
    //     link: '',
    // },
]


// https://images.pexels.com/photos/7195084/pexels-photo-7195084.jpeg?auto=compress&cs=tinysrgb&w=600