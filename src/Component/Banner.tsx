import {
  chakra,
  Box,
  Flex,
  Image,
  Text,
  VStack,
  shouldForwardProp,
  keyframes,
  HStack,
  Icon,
} from '@chakra-ui/react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { tsParticles } from 'tsparticles-engine'
import { useCallback } from 'react'
import ApichaAvatar from '../assets/apicha-avatar.png'
import { isValidMotionProp, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

const Banner = () => {
  const layout = {
    width: '100%',
    minHeight: '120vh',
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
  }

  const bannerFlex = {
    width: '100%',
    maxWidth: '1280px',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '224px',
  }

  const avatarImg = {
    zIndex: '1',
    maxWidth: '480px',
    borderRadius: '100%',
    width: '50%',
    margin: 'auto',
    background:
      'radial-gradient(circle, rgba(237,90,20,1) 0%, rgba(39,44,72,1) 64%, rgba(39,44,72,1) 100%)',
  }

  const titleText = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '42px',
    lineHeight: '1',
  }

  const jobText = {
    color: 'white',
    fontSize: '32px',
  }

  const cursorKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }

  `
  const cursor = {
    backgroundColor: 'orange',
    height: '32px',
    width: '3px',
    animation: `${cursorKeyframe} 1s infinite`,
    margin: '4px 0 0 4px',
  }

  const socialFlex = {
    paddingTop: '16px',
    width: '100%',
    maxWidth: '200px',
    justifyContent: 'space-between',
  }

  const socialIcon = {
    boxSize: '32px',
    color: 'cyan',
    zIndex: '1',
    cursor: 'pointer',
    transition: 'all 0.12s ease-in-out',
    _hover: {
      color: 'orange',
    },
  }

  let wordList = [
    'Frontend Developer',
    'Backend Developer',
    'Fullstack Developer',
  ]

  const [wordIndex, setWordIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handle = setTimeout(() => {
      if (letterIndex === wordList[wordIndex].length) {
        setIsDeleting(true)
      } else if (letterIndex === 0) {
        setIsDeleting(false)
        setWordIndex((wordIndex) => (wordIndex + 1) % wordList.length)
      }

      setLetterIndex((letterIndex) =>
        isDeleting ? letterIndex - 1 : letterIndex + 1
      )
    }, 72)

    return () => {
      clearTimeout(handle)
    }
  }, [isDeleting, letterIndex])

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container)
  }, [])

  return (
    <>
      <Box sx={layout}>
        <Flex sx={bannerFlex}>
          <VStack width="50%" alignItems="flex-start">
            <Text sx={titleText}>
              Hello bro<chakra.span color="orange">,</chakra.span>
            </Text>
            <Text sx={titleText}>
              I<chakra.span color="orange">'</chakra.span>m Apicha On
              <chakra.span color="orange">-</chakra.span>amphai
            </Text>
            <Flex alignItems="center" height="48px">
              <Text sx={jobText}>
                {wordList[wordIndex].substring(0, letterIndex)}
              </Text>
              <Box sx={cursor} />
            </Flex>
            <Flex sx={socialFlex}>
              <Icon as={BsFacebook} sx={socialIcon} />
              <Icon as={BsInstagram} sx={socialIcon} />
              <Icon as={BsGithub} sx={socialIcon} />
              <Icon as={BsLinkedin} sx={socialIcon} />
            </Flex>
          </VStack>

          <Image src={ApichaAvatar} sx={avatarImg} />
        </Flex>

        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            particles: {
              number: {
                value: 160,
                density: { enable: true, value_area: 800 },
              },
              color: { value: '#ffffff' },
              shape: {
                type: 'circle',
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 5 },
                image: { src: 'img/github.svg', width: 100, height: 100 },
              },
              opacity: {
                value: 1,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 600 },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: { enable: true, mode: 'bubble' },
                onclick: { enable: true, mode: 'repulse' },
                resize: true,
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3,
                },
                repulse: { distance: 400, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
          }}
        />
      </Box>
    </>
  )
}

export default Banner
