import { Button, VStack, HStack, Heading, Grid, GridItem, Box, Text, extendTheme, Link, Flex, Center, Container } from '@chakra-ui/react'
import { Icon, createIcon } from '@chakra-ui/react'
import Image from 'next/image'
//import{Header} from '../components/Header'

import bg_sc from "./img/bg_2.png"
//import hex from "./img/Hex.png"
import NTU from "./img/NTU.png"
import Buspay from "./img/Logo_Buspay_Base.png"
import Scipopulis from "./img/marca_scipopulis-25.png"

import instagram from "./img/instagram.png"
import facebook from "./img/facebook.png"
import linkedin from "./img/linkedin.png"
import email from "./img/email.png"

import USP from "./img/USP.png"
import EESC from "./img/EESC.png"
import SEA from "./img/SEA.png"
import NEU from "./img/NEU.png"
import SIEEL from "./img/SIEEL.png"


export default function Home() {
  return (
  <>
      <HStack pl="4%"  h="103px" bg='#3C64B111' spacing="12%" align="center"> 
      
      <Heading fontWeight='700' as='h1' color='black' >SancaThon</Heading>
      <HStack spacing="10%">
          <Link href="">Desafio</Link>
          <Link href="">Cronograma</Link>
          <Link href="">Apoio</Link>
          <Link href="">Premiação</Link>
          <Link href="">Edições Anteriores</Link>
      </HStack>
      <HStack>
          <Link isExternal href='https://docs.google.com/document/d/1JEVvmQWqASfkWdQ0ELEhA0s-oDh5mjdJNb-ThNRg2XM/edit?usp=drivesdk'><Button borderRadius="none" color="#3C64B1">Regulamento</Button></Link>  
          <Link isExternal href='https://forms.gle/tGYLEAhLXpR9NL3E6'><Button borderRadius="none" color='#fff' bg="#DA0EFC">Inscreva-se</Button></Link>
      </HStack>
    </HStack>
    
    <Box>
    <Flex px='40'>
      <Box my='40'>
        <Box w='full' maxW='xl'>
          <Heading fontSize='30px' fontFamily='Roboto'>Hackathon realizado por estudantes da comunidade de São Carlos/SP</Heading>
        </Box>
        <Flex  w='full' maxW='xl'>
          <Box>
            <Icon m='4' viewBox="0 0 30 30" boxSize='30px'>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5555 19.6304V10.149C25.5551 9.73329 25.4453 9.32503 25.2373 8.96516C25.0293 8.60528 24.7303 8.30643 24.3703 8.09859L16.074 3.35785C15.7137 3.14981 15.3049 3.04028 14.8888 3.04028C14.4727 3.04028 14.064 3.14981 13.7036 3.35785L5.40735 8.09859C5.04737 8.30643 4.74837 8.60528 4.54034 8.96516C4.33232 9.32503 4.22259 9.73329 4.22217 10.149V19.6304C4.22259 20.0461 4.33232 20.4544 4.54034 20.8143C4.74837 21.1741 5.04737 21.473 5.40735 21.6808L13.7036 26.4216C14.064 26.6296 14.4727 26.7391 14.8888 26.7391C15.3049 26.7391 15.7137 26.6296 16.074 26.4216L24.3703 21.6808C24.7303 21.473 25.0293 21.1741 25.2373 20.8143C25.4453 20.4544 25.5551 20.0461 25.5555 19.6304Z" stroke="#3C64B1" stroke-width="1.77778" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.54224 8.91699L14.8889 14.9022L25.2356 8.91699" stroke="#3C64B1" stroke-width="1.77778" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.8889 26.8367V14.89" stroke="#3C64B1" stroke-width="1.77778" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </Icon>
            <Container w='full' maxW='md'>Buscar soluções inovadores de negócios, tecnologia, produtos e serviços para a mobilidade urbana e o transporte coletivo.</Container>
          </Box>
          <Box>  
            <Icon m='4' viewBox="0 0 30 30" boxSize='30px'>
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.2001 4.50732H4.8001C3.0401 4.50732 1.6001 5.94732 1.6001 7.70732V22.4273C1.6001 24.1873 3.0401 25.6273 4.8001 25.6273H11.2001V27.5473H8.9601C8.6081 27.5473 8.3201 27.8353 8.3201 28.1873C8.3201 28.5393 8.6081 28.8273 8.9601 28.8273H11.8401H20.1601H23.0401C23.3921 28.8273 23.6801 28.5393 23.6801 28.1873C23.6801 27.8353 23.3921 27.5473 23.0401 27.5473H20.8001V25.6273H27.2001C28.9601 25.6273 30.4001 24.1873 30.4001 22.4273V7.70732C30.4001 5.94732 28.9601 4.50732 27.2001 4.50732ZM4.8001 5.78732H27.2001C28.2561 5.78732 29.1201 6.65132 29.1201 7.70732V21.1473H2.8801V7.70732C2.8801 6.65132 3.7441 5.78732 4.8001 5.78732ZM19.5201 27.5473H12.4801V25.6273H19.5201V27.5473ZM27.2001 24.3473H20.1601H11.8401H4.8001C3.7441 24.3473 2.8801 23.4833 2.8801 22.4273H29.1201C29.1201 23.4833 28.2561 24.3473 27.2001 24.3473ZM6.5281 12.1553L9.6001 13.1793V16.5713C9.6001 16.8593 9.7921 17.0833 10.0481 17.1793L16.1281 19.1953C16.1921 19.2273 16.2561 19.2273 16.3201 19.2273C16.3841 19.2273 16.4481 19.2273 16.5121 19.1953L22.5921 17.1793C22.8481 17.0833 23.0401 16.8593 23.0401 16.5713V13.1793L25.2801 12.4433V18.5873C25.2801 18.9393 25.5681 19.2273 25.9201 19.2273C26.2721 19.2273 26.5601 18.9393 26.5601 18.5873V11.5473C26.5601 11.4833 26.5601 11.4193 26.5281 11.3553V11.3233C26.4961 11.2593 26.4961 11.2273 26.4641 11.1633C26.4641 11.1633 26.4641 11.1633 26.4641 11.1313C26.4321 11.0993 26.4001 11.0673 26.3681 11.0033C26.3681 11.0033 26.3681 11.0033 26.3361 10.9713C26.3041 10.9393 26.2401 10.9073 26.1761 10.8753L16.5761 7.67532C16.4481 7.64332 16.2881 7.64332 16.1601 7.67532L6.5601 10.8753C6.3041 10.9713 6.1121 11.1953 6.1121 11.4833C6.1121 11.7713 6.2721 12.0593 6.5281 12.1553ZM21.7601 16.0913L16.3201 17.9153L10.8801 16.0913V13.5953L16.1281 15.3553C16.1921 15.3873 16.2561 15.3873 16.3201 15.3873C16.3841 15.3873 16.4481 15.3873 16.5121 15.3553L21.7601 13.5953V16.0913ZM16.3201 9.01932L23.9041 11.5473L16.3201 14.0753L8.7361 11.5473L16.3201 9.01932Z" fill="#0153A0"/>
            </svg>
            </Icon>
            <Container  w='full' maxW='md'>Podem participar estudantes maiores de 18 anos de todas as Universidades Brasileiras.</Container>
          </Box>
        </Flex>
      </Box>
      <Box my="16">
        <Image src={bg_sc} />
        <Text align="right" fontSize='xx-small'>Foto: Alberto Medeiros - Pinterest</Text>
      </Box>
    </Flex>
    <Center>Para mais informações e um cronograma detalhado, consulte o <Link ml='1' href='' color='red'> regulamento do evento</Link></Center>
    </Box>
      
    <Box 
    bgColor='#302E2E'
    backgroundImage="/img/Hex.png"
    bgPosition="right"
    bgRepeat="no-repeat"
    pb='28'
    >
      <Center><Heading textShadow="0 0 8px #DA0EFC, -1px 0 2px #DA0EFC, 0 0 3px #fff" fontFamily="roboto" pt='16' color='#302E2E'>CRONOGRAMA</Heading></Center>
      <Flex fontWeight='bold' mt='52' mx='32'>
        <Box align="center" w='full' maxW='2xs' color='white'>
          <Text fontSize='2xl' >Inscrições</Text>
          <Text mt='2'>23/08/2021 a 03/09/2021</Text>
          <Text fontSize='xs'>12h00 12h00</Text>
        </Box>

        <Box  align="center" w='full' maxW='2xs' color='white'>
          <Text  fontSize='2xl' >Warmup e imersão</Text>
          <Text mt='2'>05/09/2021 a 10/09/2021</Text>
          <Text fontSize='xs'>12h00  18h00</Text>
        </Box>

        <Box align="center" w='full' maxW='2xs' color='white'>
          <Text fontSize='2xl' >Maratona de desenvolvimento</Text>
          <Text mt='2'>10/09/2021 a 12/09/2021</Text>
          <Text fontSize='xs'>18h00          18h00</Text>
        </Box>
      
        <Box align="center" w='full' maxW='2xs' color='white'>
          <Text fontSize='2xl'>Entrega da solução desenvolvida</Text>
          <Text mt='2'>12/09/2021</Text>
          <Text fontSize='xs'>19h00</Text>
        </Box>

        <Box align="center" w='full' maxW='2xs' color='white'>
          <Text fontSize='2xl' >Resultado Final</Text>
          <Text mt='2'>a divulgar</Text>
          
        </Box>
      </Flex>
    </Box>

    <Box
    bgColor='#FFF'
    bgImage="/img/Hex.png"
    bgPosition="right"
    bgRepeat="no-repeat"
    pb='28'
    >
      <Center><Heading textShadow="0 0 8px #DA0EFC, 0 0 2px #000, -1px 0 2px #DA0EFC, 0 0 3px #fff" fontFamily="roboto" pt='16' color='#FFF'>APOIO</Heading></Center>
      <HStack spacing='5%' mt='30' mx='32'>
      <Box><Link href='https://www.buspay.com.br/'><Image src={Buspay}/></Link></Box>  
      <Box><Link href='https://ntu.org.br/novo/Default.aspx?v=1232'><Image src={NTU}/></Link></Box>
      <Box><Link href='https://scipopulis.com/'><Image src={Scipopulis}/></Link></Box>
      </HStack>
    </Box>


    <Box
    bgColor='#302E2E'
    bgImage="img/Premiacao.png"
    bgPosition="center"
    bgRepeat="no-repeat"
    pb='28'
    >
      <Center><Heading textShadow="0 0 8px #DA0EFC, 0 0 2px #000, -1px 0 2px #DA0EFC, 0 0 3px #fff" fontFamily="roboto" pt='16' color='#FFF'>PREMIAÇÃO</Heading></Center>
      <HStack mt='48' mx='32' spacing="20%">
      <Box boxShadow='dark-lg' p='12' bg='white'>
          <Flex>
          <Icon mt='3' viewBox="0 0 62 92" boxSize='62px'>
          <svg width="62" height="92" viewBox="0 0 62 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.9043 10.0977C20.699 10.0977 12.4375 18.7673 12.4375 29.4769C12.4375 40.1864 20.699 48.856 30.9043 48.856C41.1096 48.856 49.3711 40.1864 49.3711 29.4769C49.3711 18.8693 41.1096 10.0977 30.9043 10.0977ZM30.9043 44.7762C22.8372 44.7762 16.3252 37.9425 16.3252 29.4769C16.3252 21.0112 22.8372 14.1775 30.9043 14.1775C38.9714 14.1775 45.4833 21.0112 45.4833 29.4769C45.4833 37.9425 38.9714 44.7762 30.9043 44.7762Z" fill="#302E2E"/>
          <path d="M30.9037 20.2971C26.044 20.2971 22.1562 24.3769 22.1562 29.4767C22.1562 30.5987 23.031 31.5166 24.1001 31.5166C25.1693 31.5166 26.044 30.5987 26.044 29.4767C26.044 26.6208 28.1823 24.3769 30.9037 24.3769C31.9728 24.3769 32.8476 23.459 32.8476 22.337C32.8476 21.2151 31.9728 20.2971 30.9037 20.2971Z" fill="#302E2E"/>
          <path d="M61.909 82.7184L51.2177 50.0798C56.0774 44.7761 59.1876 37.5344 59.1876 29.5787C59.1876 13.2594 46.5524 0 31.0014 0C15.4505 0 2.81529 13.2594 2.81529 29.5787C2.81529 37.5344 5.82829 44.7761 10.7852 50.0798L0.093864 82.7184C-0.100523 83.4324 -0.00332819 84.1463 0.48264 84.7583C0.968608 85.2683 1.64896 85.5743 2.32932 85.3703L12.2431 83.1264L18.755 91.286C19.1438 91.796 19.6298 92 20.2129 92C20.3101 92 20.4073 92 20.6017 92C21.2821 91.898 21.8652 91.388 22.0596 90.6741L30.9042 63.4412L39.8461 90.6741C40.0404 91.388 40.6236 91.898 41.304 92C41.4012 92 41.4984 92 41.6927 92C42.2759 92 42.7619 91.694 43.1506 91.286L49.6626 83.1264L59.5764 85.3703C60.2567 85.5743 60.9371 85.2683 61.423 84.7583C62.0062 84.1463 62.1034 83.4324 61.909 82.7184ZM19.4354 85.9823L14.3813 79.5565C13.8954 78.9446 13.215 78.7406 12.4375 78.8426L4.66197 80.6785L13.701 53.0377C17.7831 56.3016 22.74 58.4435 28.1828 59.0554L19.4354 85.9823ZM6.60584 29.4767C6.60584 15.4013 17.4915 3.97783 30.9042 3.97783C44.317 3.97783 55.2027 15.4013 55.2027 29.4767C55.2027 43.5521 44.317 54.9756 30.9042 54.9756C17.4915 54.9756 6.60584 43.5521 6.60584 29.4767ZM49.371 78.9446C48.6907 78.8426 47.9131 79.0466 47.4272 79.6585L42.3731 85.9823L33.5285 58.9534C38.9713 58.4435 43.9282 56.3015 48.0103 52.9357L57.1465 80.6785L49.371 78.9446Z" fill="#302E2E"/>
          </svg></Icon>  
          <Center><Heading>1° Lugar</Heading></Center>
          </Flex>
          <Center><Text fontWeight='bold' fontSize='2xl'>R$2500,00</Text></Center>
        </Box>

        <Box boxShadow='dark-lg' p='12' bg='white'>
          <Flex>
          <Icon mt='3' viewBox="0 0 62 92" boxSize='62px'>
          <svg width="62" height="92" viewBox="0 0 62 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.9043 10.0977C20.699 10.0977 12.4375 18.7673 12.4375 29.4769C12.4375 40.1864 20.699 48.856 30.9043 48.856C41.1096 48.856 49.3711 40.1864 49.3711 29.4769C49.3711 18.8693 41.1096 10.0977 30.9043 10.0977ZM30.9043 44.7762C22.8372 44.7762 16.3252 37.9425 16.3252 29.4769C16.3252 21.0112 22.8372 14.1775 30.9043 14.1775C38.9714 14.1775 45.4833 21.0112 45.4833 29.4769C45.4833 37.9425 38.9714 44.7762 30.9043 44.7762Z" fill="#302E2E"/>
          <path d="M30.9037 20.2971C26.044 20.2971 22.1562 24.3769 22.1562 29.4767C22.1562 30.5987 23.031 31.5166 24.1001 31.5166C25.1693 31.5166 26.044 30.5987 26.044 29.4767C26.044 26.6208 28.1823 24.3769 30.9037 24.3769C31.9728 24.3769 32.8476 23.459 32.8476 22.337C32.8476 21.2151 31.9728 20.2971 30.9037 20.2971Z" fill="#302E2E"/>
          <path d="M61.909 82.7184L51.2177 50.0798C56.0774 44.7761 59.1876 37.5344 59.1876 29.5787C59.1876 13.2594 46.5524 0 31.0014 0C15.4505 0 2.81529 13.2594 2.81529 29.5787C2.81529 37.5344 5.82829 44.7761 10.7852 50.0798L0.093864 82.7184C-0.100523 83.4324 -0.00332819 84.1463 0.48264 84.7583C0.968608 85.2683 1.64896 85.5743 2.32932 85.3703L12.2431 83.1264L18.755 91.286C19.1438 91.796 19.6298 92 20.2129 92C20.3101 92 20.4073 92 20.6017 92C21.2821 91.898 21.8652 91.388 22.0596 90.6741L30.9042 63.4412L39.8461 90.6741C40.0404 91.388 40.6236 91.898 41.304 92C41.4012 92 41.4984 92 41.6927 92C42.2759 92 42.7619 91.694 43.1506 91.286L49.6626 83.1264L59.5764 85.3703C60.2567 85.5743 60.9371 85.2683 61.423 84.7583C62.0062 84.1463 62.1034 83.4324 61.909 82.7184ZM19.4354 85.9823L14.3813 79.5565C13.8954 78.9446 13.215 78.7406 12.4375 78.8426L4.66197 80.6785L13.701 53.0377C17.7831 56.3016 22.74 58.4435 28.1828 59.0554L19.4354 85.9823ZM6.60584 29.4767C6.60584 15.4013 17.4915 3.97783 30.9042 3.97783C44.317 3.97783 55.2027 15.4013 55.2027 29.4767C55.2027 43.5521 44.317 54.9756 30.9042 54.9756C17.4915 54.9756 6.60584 43.5521 6.60584 29.4767ZM49.371 78.9446C48.6907 78.8426 47.9131 79.0466 47.4272 79.6585L42.3731 85.9823L33.5285 58.9534C38.9713 58.4435 43.9282 56.3015 48.0103 52.9357L57.1465 80.6785L49.371 78.9446Z" fill="#302E2E"/>
          </svg></Icon>  
          <Center><Heading>2° Lugar</Heading></Center>
          </Flex>
          <Center><Text fontWeight='bold' fontSize='2xl'>R$1000,00</Text></Center>
        </Box>

        <Box boxShadow='dark-lg' p='12' bg='white'>
          <Flex>
          <Icon mt='3' viewBox="0 0 62 92" boxSize='62px'>
          <svg width="62" height="92" viewBox="0 0 62 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.9043 10.0977C20.699 10.0977 12.4375 18.7673 12.4375 29.4769C12.4375 40.1864 20.699 48.856 30.9043 48.856C41.1096 48.856 49.3711 40.1864 49.3711 29.4769C49.3711 18.8693 41.1096 10.0977 30.9043 10.0977ZM30.9043 44.7762C22.8372 44.7762 16.3252 37.9425 16.3252 29.4769C16.3252 21.0112 22.8372 14.1775 30.9043 14.1775C38.9714 14.1775 45.4833 21.0112 45.4833 29.4769C45.4833 37.9425 38.9714 44.7762 30.9043 44.7762Z" fill="#302E2E"/>
          <path d="M30.9037 20.2971C26.044 20.2971 22.1562 24.3769 22.1562 29.4767C22.1562 30.5987 23.031 31.5166 24.1001 31.5166C25.1693 31.5166 26.044 30.5987 26.044 29.4767C26.044 26.6208 28.1823 24.3769 30.9037 24.3769C31.9728 24.3769 32.8476 23.459 32.8476 22.337C32.8476 21.2151 31.9728 20.2971 30.9037 20.2971Z" fill="#302E2E"/>
          <path d="M61.909 82.7184L51.2177 50.0798C56.0774 44.7761 59.1876 37.5344 59.1876 29.5787C59.1876 13.2594 46.5524 0 31.0014 0C15.4505 0 2.81529 13.2594 2.81529 29.5787C2.81529 37.5344 5.82829 44.7761 10.7852 50.0798L0.093864 82.7184C-0.100523 83.4324 -0.00332819 84.1463 0.48264 84.7583C0.968608 85.2683 1.64896 85.5743 2.32932 85.3703L12.2431 83.1264L18.755 91.286C19.1438 91.796 19.6298 92 20.2129 92C20.3101 92 20.4073 92 20.6017 92C21.2821 91.898 21.8652 91.388 22.0596 90.6741L30.9042 63.4412L39.8461 90.6741C40.0404 91.388 40.6236 91.898 41.304 92C41.4012 92 41.4984 92 41.6927 92C42.2759 92 42.7619 91.694 43.1506 91.286L49.6626 83.1264L59.5764 85.3703C60.2567 85.5743 60.9371 85.2683 61.423 84.7583C62.0062 84.1463 62.1034 83.4324 61.909 82.7184ZM19.4354 85.9823L14.3813 79.5565C13.8954 78.9446 13.215 78.7406 12.4375 78.8426L4.66197 80.6785L13.701 53.0377C17.7831 56.3016 22.74 58.4435 28.1828 59.0554L19.4354 85.9823ZM6.60584 29.4767C6.60584 15.4013 17.4915 3.97783 30.9042 3.97783C44.317 3.97783 55.2027 15.4013 55.2027 29.4767C55.2027 43.5521 44.317 54.9756 30.9042 54.9756C17.4915 54.9756 6.60584 43.5521 6.60584 29.4767ZM49.371 78.9446C48.6907 78.8426 47.9131 79.0466 47.4272 79.6585L42.3731 85.9823L33.5285 58.9534C38.9713 58.4435 43.9282 56.3015 48.0103 52.9357L57.1465 80.6785L49.371 78.9446Z" fill="#302E2E"/>
          </svg></Icon>  
          <Center><Heading>3° Lugar</Heading></Center>
          </Flex>
          <Center><Text fontWeight='bold' fontSize='2xl'>R$500,00</Text></Center>
        </Box>

      </HStack>
    </Box>

    <Box
    bgColor='#FFF'
    pb='28'
    >
      <Center><Heading textShadow="0 0 8px #DA0EFC, 0 0 2px #000, -1px 0 2px #DA0EFC, 0 0 3px #fff" fontFamily="roboto" pt='16' color='#FFF'>CONTATOS</Heading></Center>
      <Center><Text fontWeight="bold">Entre em contato conosco pelos canais:</Text></Center>
      <HStack spacing='20%' mt='40' mx='32'>
        <Box>
          <Center><Link isExternal href='https://www.instagram.com/sancathon/'><Image width='71px' height='71px' src={instagram}/></Link></Center>
          <Center><Text fontSize='small'>@sancathon</Text></Center>
        </Box>

        <Box>
          <Center><Link isExternal href='https://www.facebook.com/sancathon'><Image width='71px' height='71px' src={facebook}/></Link></Center>
          <Center><Text fontSize='small'>@fb.com/sancathon</Text></Center>
        </Box>

        <Box>
          <Center><Link isExternal href='https://www.linkedin.com/company/sancathon/'><Image width='71px' height='71px' src={linkedin}/></Link></Center>
          <Center><Text fontSize='small'>/company/sancathon</Text></Center>
        </Box>

        <Box>
          <Center><Link isExternal href='mailto:sancathon@eesc.usp.br'><Image width='71px' height='71px' src={email}/></Link></Center>
          <Center><Text fontSize='small'>sancathon@eesc.usp.br</Text></Center>
        </Box>
      </HStack>
    </Box>

    <Box
    bgColor='#FFF'
    pb='28'
    >
      <Center><Heading textShadow="0 0 8px #DA0EFC, 0 0 2px #000, -1px 0 2px #DA0EFC, 0 0 3px #fff" fontFamily="roboto" pt='16' color='#FFF'>ORGANIZAÇÃO:</Heading></Center>
      <HStack spacing="5%" mt='30' mx={{base: '52', md: '32'}}>
      <Center><Link isExternal href='https://www5.usp.br/'><Image src={USP}/></Link></Center>
      <Center><Link isExternal href='https://eesc.usp.br/'><Image src={EESC}/></Link></Center>
      <Center><Link isExternal href='https://www.facebook.com/SEA.EESC'><Image src={SEA}/></Link></Center>
      <Center><Link isExternal href='https://www.facebook.com/neusaocarlos'><Image src={NEU}/></Link></Center>
      <Center><Link isExternal href='https://www.facebook.com/SIEELSaoCarlos'><Image src={SIEEL}/></Link></Center>
      </HStack>
    </Box>

  </>
  )
  
}
