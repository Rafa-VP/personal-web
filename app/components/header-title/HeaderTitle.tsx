'use client'
import { Color, Flex, Text } from "@tremor/react";
import "../styles/HeaderTitle.css"

type TitleProps = {
  name: string,
  color: Color,
}

export default function HeaderTitle(props: TitleProps) {
  return (
    <div id="header-title">
      <Flex justifyContent="justify-center">
        <Text textAlignment="text-center" color={props.color}>
          <span id="header-title">{props.name}</span>
        </Text>
      </Flex>
    </div>
  )
}
