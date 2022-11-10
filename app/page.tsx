'use client'
import { Flex, Footer, Text } from "@tremor/react"
import HeaderTitle from "./components/HeaderTitle"
import styles from './styles/page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderTitle name="HOME" color="amber" />
      <Footer>
        <Flex justifyContent="justify-center">
          <Text textAlignment="text-center" color="amber">
            Rafael VP &copy; 2022
          </Text>
        </Flex>
      </Footer>
    </div>
  )
}
