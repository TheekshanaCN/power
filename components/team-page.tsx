"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"
import { Twitter, Linkedin, Github } from "lucide-react"

const teamMembers = [
  {
    name: "Power School",
    role: "Team Leader / CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "I Am Profficional Technology Teacher In Sri Lanka",
    social: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe"
    }
  },
  {
    name: "Jane Smith",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Full-stack expert specializing in scalable architectures.",
    social: {
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith"
    }
  },
  {
    name: "Theekshana Chamodhya",
    role: "Web developer / IT Executive / Visual Producer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Hey I Am Theekshana.I Am Self-Thought Software Engineer / Web Developer",
    social: {
      twitter: "https://twitter.com/mikejohnson",
      linkedin: "https://linkedin.com/in/mikejohnson",
      github: "https://github.com/mikejohnson"
    }
  },
  {
    name: "Sarah Lee",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Bridging the gap between tech and business needs.",
    social: {
      twitter: "https://twitter.com/sarahlee",
      linkedin: "https://linkedin.com/in/sarahlee",
      github: "https://github.com/sarahlee"
    }
  },
  {
    name: "Alex Chen",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Turning data into actionable insights for better decision-making.",
    social: {
      twitter: "https://twitter.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      github: "https://github.com/alexchen"
    }
  },
  {
    name: "Emily Taylor",
    role: "Marketing Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Crafting compelling narratives to engage our audience.",
    social: {
      twitter: "https://twitter.com/emilytaylor",
      linkedin: "https://linkedin.com/in/emilytaylor",
      github: "https://github.com/emilytaylor"
    }
  },
]

const TeamMemberCard = ({ member }) => (
  <CardContainer className="inter-var w-full max-w-sm"> {/* Set max-width here */}
    <CardBody className="relative group bg-gray-800 hover:shadow-xl hover:shadow-emerald-600/30 border border-gray-700 w-full h-auto rounded-xl p-6 transition-all duration-300">
      <CardItem translateZ="50" className="text-xl font-bold text-white text-center">
        {member.name}
      </CardItem>
      <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mt-2 text-center">
        {member.role}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <img
          src={member.image}
          height="200"
          width="200"
          className="h-60 w-full object-cover rounded-xl group-hover:opacity-50 transition-opacity duration-300"
          alt={member.name}
        />
      </CardItem>
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <CardItem translateZ="50" className="text-white text-sm max-w-sm text-center px-4">
          {member.bio}
        </CardItem>
        <CardItem translateZ="100" className="flex space-x-4 mt-4">
          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-200">
            <Twitter size={24} />
          </a>
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-200">
            <Linkedin size={24} />
          </a>
          <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-200">
            <Github size={24} />
          </a>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
)

export default function TeamPage() {
  const [leader, ...members] = teamMembers

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-center md:text-6xl mb-6 font-bold text-transparent bg-gradient-to-b from-green-400 to-blue-500 bg-clip-text">
          Our Production Team
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 sm:col-span-2 col-span-1"
            viewport={{ once: false }}
          >
            <TeamMemberCard member={leader} />
          </motion.div>
          
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              viewport={{ once: false }} // This makes it animate each time it comes into view
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
        </div>
      </div>
  )
}
