'use client'
import { ComputerDesktopIcon, DocumentTextIcon, HomeIcon, IdentificationIcon } from "@heroicons/react/24/solid"
import { Tab } from "@tremor/react"

type TabListProps = React.ComponentProps<typeof Tab>



export const TabListData: Array<TabListProps> = [
  {
    value: '/',
    text: "Home",
    icon: HomeIcon,
  },
  {
    value: '/projects',
    text: 'Projects',
    icon: ComputerDesktopIcon
  },
  {
    value: '/cv',
    text: 'CV',
    icon: DocumentTextIcon
  },
  {
    value: '/contact',
    text: 'Contact',
    icon: IdentificationIcon
  }
]
