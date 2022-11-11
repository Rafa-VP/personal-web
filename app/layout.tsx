'use client'
import './styles/globals.css'
import '@tremor/react/dist/esm/tremor.css'
import { Tab, TabList } from '@tremor/react'
import { TabListData } from './data/TabListData'
import styles from './styles/page.module.css'
import FooterCopyRight from './components/footer/FooterCopyRight'
import { Analytics } from '@vercel/analytics/react'
import { useState } from 'react'
import Home from './page'
import ProjectsPage from './projects/page'
import CVPage from './cv/page'
import ContactPage from './contact/page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  type RouteComponent = {
    path: string,
    children: Function
  }

  const childrens: Array<RouteComponent> = [
    {
      path: '/',
      children: Home
    },
    {
      path: '/projects',
      children: ProjectsPage
    },
    {
      path: '/cv',
      children: CVPage
    },
    {
      path: '/contact',
      children: ContactPage
    }
  ]

  const [route, setRoute] = useState(window.location.pathname)

  return (
    <html lang="en">
      <head>
        <title>
          Home
        </title>
      </head>
      <body>
        <div className={styles.container}>
          <TabList
            defaultValue={route}
            color="amber"
            handleSelect={(value) => {
              history.replaceState(null, '', value)
              setRoute(value)
            }}
          >
            {TabListData.map(element =>
              <Tab key={element.value} text={element.text} value={element.value} icon={element.icon} privateProps={
                {
                  isActive: true,
                  color: 'amber',
                  handleTabClick: () => null
                }
              }
              />
            )}
          </TabList>
          {childrens.map((page) => {
            if (page.path === route) return <page.children />
          })}
          <FooterCopyRight />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
