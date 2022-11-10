'use client'
import { Flex, Footer, Text } from "@tremor/react";

export default function FooterCopyRight() {
  return (
    <Footer>
      <Flex justifyContent="justify-center">
        <Text textAlignment="text-center" color="amber">
          Rafael VP &copy; 2022
        </Text>
      </Flex>
    </Footer>
  )
}
