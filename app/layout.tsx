'use client'
import './styles/globals.css'
import '@tremor/react/dist/esm/tremor.css'
import { Tab, TabList } from '@tremor/react'
import { TabListData } from './data/TabListData'
import styles from './styles/page.module.css'
import FooterCopyRight from './components/footer/FooterCopyRight'
import { Analytics } from '@vercel/analytics/react'
import { Suspense, useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  /*   type RouteComponent = {
      path: string,
      children: Function
    } */

  /* const childrens: Array<RouteComponent> = [
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
  ] */

  const [route, setRoute] = useState('/')

  return (
    <html lang="en">
      <head />
      <body>
        <div className={styles.container}>
          <TabList
            defaultValue={location.pathname}
            color="amber"
            handleSelect={(value) => {
              location.href = value
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
          {/*   {childrens.map((page) => {
            if (page.path === route) return <page.children />
          })} */}
          <Suspense fallback='loading...'>
            {children}
          </Suspense>

          <FooterCopyRight />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
