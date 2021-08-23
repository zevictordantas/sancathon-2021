import { Box, Flex, Container, Icon, Center, Heading, Text, Link} from "@chakra-ui/react"
import Image from 'next/image'
import bg_sc from "/img/Sao_Carlos.png"

export const SegundoPainel = () =>{
  return(
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
        <Center>Para mais informações e um cronograma detalhado, consulte o <Link ml='1' href='https://docs.google.com/document/d/1JEVvmQWqASfkWdQ0ELEhA0s-oDh5mjdJNb-ThNRg2XM/edit?usp=drivesdk' color='red'> regulamento do evento</Link></Center>
        </Box>
  )
}