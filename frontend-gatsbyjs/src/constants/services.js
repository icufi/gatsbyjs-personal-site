import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "full stack Web and web3 development",
    text: `MERN Full Stack including NodeJS, Express, React, MongoDB, Solidity, Web3JS, IPFS, Truffle, GatsbyJS, HTML, CSS, Material UI, GraphQL, REST APIs.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `UX UI design with Adobe XD, Illustrator, Premiere Pro, After Effects, Photoshop`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "mobile app development",
    text: `React Native Android and IOS`,
  },
]

export default services
