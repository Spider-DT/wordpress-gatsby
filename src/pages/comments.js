import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { commentsPageStyles } from "../styles/commentsStyles"
import Giscus from '@giscus/react';
import { getCommentsFromCategory } from "../services/wordpressApi"

const ICONS = ["circle", "square", "triangle", "pentagon", "star", "heart"];
const COLORS = ["#76cfc5", "#ffb400", "#ec6664", "#b4b8f8", "#76cfc5", "#ffb400"];

const renderIcon = (iconType, color) => {
  switch (iconType) {
    case 'circle':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
          <circle cx="9" cy="9" r="3.2" fill={color} />
        </svg>
      )
    case 'square':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
          <rect x="5.2" y="5.2" width="7.6" height="7.6" rx="2" fill={color} />
        </svg>
      )
    case 'triangle':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
          <polygon points="9,5.2 12.8,12.8 5.2,12.8" fill={color} />
        </svg>
      )
    case 'pentagon':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
          <polygon points="9,5 13.2,8 11.8,13 6.2,13 4.8,8" fill={color} />
        </svg>
      )
    case 'star':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
          <polygon points="9,5 10,8 13.2,8.3 10.8,10.3 11.6,13.5 9,11.7 6.4,13.5 7.2,10.3 4.8,8.3 8,8" fill={color} />
        </svg>
      )
    case 'heart':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
          <path d="M9 14.5s-3.5-2.5-3.5-4.7A2.2 2.2 0 0 1 9 7.5a2.2 2.2 0 0 1 3.5 2.3c0 2.2-3.5 4.7-3.5 4.7z" fill={color} />
        </svg>
      )
    default:
      return null;
  }
}

const CommentsPage = () => {
  console.log('useCommentsFromCategory');
  const { data: commentsData, loading, error } = getCommentsFromCategory();

  if (loading) {
    return (
      <Layout>
        <Seo title="Comments" description="Loading..." />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', fontSize: '1.2rem', color: '#666' }}>
          Loading comments data...
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Seo title="Comments" description="Error loading comments data" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', fontSize: '1.2rem', color: '#ec6664' }}>
          Error loading comments data. Please try again later.
        </div>
      </Layout>
    );
  }

  // fallback
  const fallbackData = {
    title: "Comments & Discussion",
    subtitle: "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
    rules: [
      "Be respectful and constructive in your comments.",
      "No spam, self-promotion, or advertising allowed.",
      "No personal attacks, hate speech, or harassment.",
      "Stay on topic and keep discussions relevant.",
      "No inappropriate, offensive, or illegal content.",
      "Use clear, friendly, and inclusive language."
    ]
  };

  const pageData = (
    commentsData &&
    typeof commentsData === 'object' &&
    Array.isArray(commentsData.rules)
  ) ? commentsData : fallbackData;

  return (
    <Layout>
      <Seo title={pageData.title} description={pageData.subtitle} />
      <style dangerouslySetInnerHTML={{ __html: commentsPageStyles }} />
      <div className="comments-page-container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, #76cfc5 0%, #b4b8f8 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            {pageData.title}
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            margin: '0 auto',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            {pageData.subtitle}
          </p>
          <div style={{
            height: '6px',
            width: '120px',
            margin: '1.5rem auto 2rem',
            borderRadius: '3px',
            background: 'linear-gradient(90deg, #76cfc5 0%, #b4b8f8 100%)'
          }} />
        </div>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#179b8e', marginBottom: '1.2rem', marginTop: 0, textAlign: 'center' }}>Community Guidelines</h2>
        <ul style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.5rem 1.5rem',
          listStyle: 'none',
          padding: 0,
          margin: '0 auto 2.5rem auto',
          maxWidth: '700px',
          textAlign: 'left',
          justifyContent: 'center',
          fontSize: '1.1rem',
          color: '#666',
          lineHeight: 1.7
        }}>
          {(Array.isArray(pageData.rules) ? pageData.rules : []).map((rule, idx) => (
            <li key={idx} style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
              <span style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: COLORS[idx % COLORS.length],
                marginRight: '0.7em',
                verticalAlign: 'middle',
                flexShrink: 0,
                position: 'relative'
              }}>
                {renderIcon(ICONS[idx % ICONS.length], '#fff')}
              </span>
              {rule}
            </li>
          ))}
        </ul>
        <div
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '2.5rem 3rem 3rem 3rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid #e9ecef',
            margin: '0 auto 3rem auto',
            maxWidth: '1200px'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Giscus
              repo="tomcomtang/portfolio-blog"
              repoId="R_kgDOPBDz5Q"
              category="Ideas"
              categoryId="DIC_kwDOPBDz5c4Cr_AK"
              mapping="pathname"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme="noborder_light"
              lang="en"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommentsPage; 