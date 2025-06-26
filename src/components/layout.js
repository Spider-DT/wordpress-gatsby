/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "@reach/router"
import { useFooterFromCategory } from '../hooks/useWordPress'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const location = useLocation()
  const { footerData, loading: footerLoading, error: footerError } = useFooterFromCategory();

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          paddingTop: `calc(var(--size-gutter) + 60px)`,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            padding: '0.5rem 0',
            color: '#000',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'nowrap',
            gap: '0.5rem 1rem',
          }}
        >
          <div style={{
            flex: 1,
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {footerError && <span style={{ color: 'red' }}>Footer加载失败</span>}
            {!footerLoading && !footerError && footerData && (
              <>
                {footerData.text}
                {footerData.links && footerData.links.length > 0 && (
                  <>
                    {' • '}
                    {footerData.links.map((link, idx) => (
                      <React.Fragment key={link.url}>
                        <a href={link.url} style={{ color: '#000', textDecoration: 'none', margin: '0 0.5em' }}>{link.title}</a>
                        {idx < footerData.links.length - 1 && '•'}
                      </React.Fragment>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
          {footerData && footerData.github && (
            <a 
              href={footerData.github.url} 
              style={{ 
                color: '#000', 
                textDecoration: 'none',
                borderBottom: '1px solid #000',
                paddingBottom: '1px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#76cfc5';
                e.target.style.borderBottomColor = '#76cfc5';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#000';
                e.target.style.borderBottomColor = '#000';
                e.target.style.transform = 'translateY(0)';
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footerData.github.text}
            </a>
          )}
        </footer>
      </div>
    </>
  )
}

export default Layout
