'use client'
import { ComputerDesktopIcon, DocumentTextIcon, HomeIcon, IdentificationIcon } from "@heroicons/react/24/solid"
import { Tab } from "@tremor/react"

type TabListProps = React.ComponentProps<typeof Tab>

export const TabListData: Array<TabListProps> = [
  {
    value: 0,
    text: "Home",
    icon: HomeIcon,
    privateProps: {
      color: "amber",
      isActive: true,
      handleTabClick: () => null
    }
  },
  {
    value: 1,
    text: 'Projects',
    icon: ComputerDesktopIcon
  },
  {
    value: 2,
    text: 'CV',
    icon: DocumentTextIcon
  },
  {
    value: 3,
    text: 'Contact',
    icon: IdentificationIcon
  }
]
