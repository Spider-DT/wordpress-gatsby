import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// 引入 Giscus React 组件
import Giscus from '@giscus/react';

const CommentsPage = () => {
  return (
    <Layout>
      <Seo 
        title="Comments & Discussion"
        description="Share your thoughts, questions, or suggestions here. Let's connect and discuss!"
      />
      
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            background: linear-gradient(120deg, #f8fafc 0%, #f5f7fa 100%) !important;
            min-height: 100vh;
          }
          :root {
            --size-content: 1200px !important;
          }
          .comments-page-container {
            max-width: 1200px !important;
            margin: 0 auto !important;
            padding: 0 2rem !important;
          }
          @media (max-width: 768px) {
            .comments-page-container {
              padding: 0 1rem !important;
            }
          }
          
          /* 自定义 Giscus 样式 */
          .giscus {
            background: white !important;
            border-radius: 16px !important;
            padding: 2rem !important;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important;
            border: 1px solid #e9ecef !important;
          }
          
          /* Giscus 评论框样式 */
          .giscus .gsc-comment-box {
            background: linear-gradient(135deg, #f8fafc 0%, #e6f7f4 100%) !important;
            border-radius: 12px !important;
            border: 1px solid #e9ecef !important;
            padding: 1.5rem !important;
          }
          
          /* Giscus 输入框样式 */
          .giscus .gsc-comment-box textarea {
            border: 2px solid #e9ecef !important;
            border-radius: 12px !important;
            padding: 1rem !important;
            font-size: 1rem !important;
            transition: all 0.2s ease !important;
            background: white !important;
          }
          
          .giscus .gsc-comment-box textarea:focus {
            border-color: #76cfc5 !important;
            box-shadow: 0 0 0 3px rgba(118, 207, 197, 0.1) !important;
            outline: none !important;
          }
          
          /* Giscus 按钮样式 */
          .giscus .gsc-comment-box button {
            background: linear-gradient(90deg, #76cfc5 0%, #ffb400 100%) !important;
            color: white !important;
            border: none !important;
            padding: 0.75rem 2rem !important;
            border-radius: 12px !important;
            font-weight: 600 !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 4px 20px rgba(118, 207, 197, 0.3) !important;
          }
          
          .giscus .gsc-comment-box button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 30px rgba(118, 207, 197, 0.4) !important;
          }
          
          /* Giscus 评论列表样式 */
          .giscus .gsc-comments {
            margin-top: 2rem !important;
          }
          
          /* Giscus 单个评论样式 */
          .giscus .gsc-comment {
            background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%) !important;
            border-radius: 12px !important;
            padding: 1.5rem !important;
            margin-bottom: 1rem !important;
            border: 1px solid #e9ecef !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05) !important;
            transition: all 0.3s ease !important;
          }
          
          .giscus .gsc-comment:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 30px rgba(0,0,0,0.1) !important;
          }
          
          /* Giscus 用户头像样式 */
          .giscus .gsc-comment .gsc-comment-header img {
            border-radius: 50% !important;
            border: 3px solid #e9ecef !important;
          }
          
          /* Giscus 用户名样式 */
          .giscus .gsc-comment .gsc-comment-header .gsc-comment-author {
            color: #333 !important;
            font-weight: 600 !important;
            font-size: 1.1rem !important;
          }
          
          /* Giscus 评论时间样式 */
          .giscus .gsc-comment .gsc-comment-header .gsc-comment-timestamp {
            color: #666 !important;
            font-size: 0.9rem !important;
          }
          
          /* Giscus 评论内容样式 */
          .giscus .gsc-comment .gsc-comment-content {
            color: #555 !important;
            line-height: 1.7 !important;
            font-size: 1rem !important;
            margin-top: 0.5rem !important;
          }
          
          /* Giscus 回复按钮样式 */
          .giscus .gsc-comment .gsc-comment-actions button {
            background: none !important;
            border: 1px solid #e9ecef !important;
            color: #666 !important;
            padding: 0.5rem 1rem !important;
            border-radius: 8px !important;
            transition: all 0.2s ease !important;
          }
          
          .giscus .gsc-comment .gsc-comment-actions button:hover {
            background: #f8fafc !important;
            border-color: #76cfc5 !important;
            color: #76cfc5 !important;
          }
          
          /* Giscus 登录提示样式 */
          .giscus .gsc-header {
            background: linear-gradient(135deg, #f8fafc 0%, #e6f7f4 100%) !important;
            border-radius: 12px !important;
            padding: 1.5rem !important;
            border: 1px solid #e9ecef !important;
            margin-bottom: 2rem !important;
            text-align: center !important;
          }
          
          .giscus .gsc-header .gsc-header-text {
            color: #555 !important;
            font-size: 1.1rem !important;
            margin-bottom: 1rem !important;
          }
          
          .giscus .gsc-header .gsc-header-button {
            background: linear-gradient(90deg, #76cfc5 0%, #ffb400 100%) !important;
            color: white !important;
            border: none !important;
            padding: 0.75rem 2rem !important;
            border-radius: 12px !important;
            font-weight: 600 !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 4px 20px rgba(118, 207, 197, 0.3) !important;
          }
          
          .giscus .gsc-header .gsc-header-button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 30px rgba(118, 207, 197, 0.4) !important;
          }
        `
      }} />
      
      <div className="comments-page-container">
        {/* 页面标题 */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="comments-title" style={{ 
            fontSize: '2.5rem', 
            fontWeight: '800', 
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, #76cfc5 0%, #b4b8f8 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Comments & Discussion
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            margin: '0 auto',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            Share your thoughts, questions, or suggestions here. Let's connect and discuss!
          </p>
          {/* 彩色分割线 */}
          <div style={{
            height: '6px',
            width: '120px',
            margin: '1.5rem auto 2rem',
            borderRadius: '3px',
            background: 'linear-gradient(90deg, #76cfc5 0%, #b4b8f8 100%)'
          }} />
          <ul style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem 1.5rem',
            listStyle: 'none',
            padding: 0,
            margin: '0 auto',
            maxWidth: '700px',
            textAlign: 'left',
            justifyContent: 'center',
            fontSize: '1.1rem',
            color: '#666',
            lineHeight: 1.7
          }}>
            <li style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
              {/* 圆形底+白色小圆点 */}
              <span style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#76cfc5',
                marginRight: '0.7em',
                verticalAlign: 'middle',
                flexShrink: 0,
                position: 'relative'
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <circle cx="9" cy="9" r="3.2" fill="#fff" />
                </svg>
              </span>
              Be respectful and constructive in your comments
            </li>
            <li style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
              {/* 圆形底+白色方块 */}
              <span style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#ffb400',
                marginRight: '0.7em',
                verticalAlign: 'middle',
                flexShrink: 0,
                position: 'relative'
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <rect x="5.2" y="5.2" width="7.6" height="7.6" rx="2" fill="#fff" />
                </svg>
              </span>
              No spam, self-promotion, or advertising allowed
            </li>
            <li style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
              {/* 圆形底+白色三角 */}
              <span style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#ec6664',
                marginRight: '0.7em',
                verticalAlign: 'middle',
                flexShrink: 0,
                position: 'relative'
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <polygon points="9,5.2 12.8,12.8 5.2,12.8" fill="#fff" />
                </svg>
              </span>
              No personal attacks, hate speech, or harassment
            </li>
            <li style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
              {/* 圆形底+白色五边形 */}
              <span style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#b4b8f8',
                marginRight: '0.7em',
                verticalAlign: 'middle',
                flexShrink: 0,
                position: 'relative'
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <polygon points="9,5 13.2,8 11.8,13 6.2,13 4.8,8" fill="#fff" />
                </svg>
              </span>
              Stay on topic and keep discussions relevant
            </li>
            <li style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
              {/* 圆形底+白色星形 */}
              <span style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#76cfc5',
                marginRight: '0.7em',
                verticalAlign: 'middle',
                flexShrink: 0,
                position: 'relative'
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <polygon points="9,5 10,8 13.2,8.3 10.8,10.3 11.6,13.5 9,11.7 6.4,13.5 7.2,10.3 4.8,8.3 8,8" fill="#fff" />
                </svg>
              </span>
              No inappropriate, offensive, or illegal content
            </li>
            <li style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
              {/* 圆形底+白色心形 */}
              <span style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#ffb400',
                marginRight: '0.7em',
                verticalAlign: 'middle',
                flexShrink: 0,
                position: 'relative'
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <path d="M9 14.5s-3.5-2.5-3.5-4.7A2.2 2.2 0 0 1 9 7.5a2.2 2.2 0 0 1 3.5 2.3c0 2.2-3.5 4.7-3.5 4.7z" fill="#fff" />
                </svg>
              </span>
              Use clear, friendly, and inclusive language
            </li>
          </ul>
        </div>

        {/* Comments Area */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#333',
            textAlign: 'center'
          }}>
            💬 Join the Discussion
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '2rem',
            textAlign: 'center',
            lineHeight: 1.6
          }}>
            Have something to say or ask? Leave your comment below!
          </p>
          
          {/* Giscus 评论系统集成 */}
          <div style={{
            textAlign: 'center',
            padding: '0',
            background: 'none',
            borderRadius: '12px',
            border: 'none'
          }}>
            <Giscus
              id="comments"
              repo="tomcomtang/portfolio-blog"
              repoId="R_kgDOPBDz5Q"
              category="Ideas"
              categoryId="DIC_kwDOPBDz5c4Cr_AK"
              mapping="pathname"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              // theme="https://tomcomtang.github.io/portfolio-blog/giscus-theme.css"
              theme="noborder_light"
              lang="en"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CommentsPage 