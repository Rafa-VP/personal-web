'use client'
import './styles/globals.css'
import '@tremor/react/dist/esm/tremor.css'
import { Tab, TabList } from '@tremor/react'
import { TabListData } from './data/TabListData'
import styles from './styles/page.module.css'
import FooterCopyRight from './components/footer/FooterCopyRight'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

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
            defaultValue={undefined}
            color="amber"
            handleSelect={undefined}
          >
            {TabListData.map(element =>
              <Tab key={element.value} text={element.text} value={element.value} icon={element.icon} privateProps={element.privateProps} />
            )}
          </TabList>
          {children}
          <FooterCopyRight />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
