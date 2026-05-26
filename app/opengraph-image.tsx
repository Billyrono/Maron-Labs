import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Maron Labs - Premium Tech & Digital Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #161312 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f9f8f9',
          border: '1px solid rgba(249, 248, 249, 0.1)',
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(249, 248, 249, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(249, 248, 249, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }}
        />

        {/* Center content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(22, 19, 18, 0.95)',
            padding: '80px 120px',
            borderTop: '1px solid rgba(249, 248, 249, 0.1)',
            borderBottom: '1px solid rgba(249, 248, 249, 0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          {/* Top subtle line */}
          <div
            style={{
              width: '60px',
              height: '2px',
              background: '#cc5500',
              marginBottom: '40px',
            }}
          />

          <h1
            style={{
              fontSize: 100,
              fontWeight: 400,
              margin: 0,
              marginBottom: '20px',
              color: '#f9f8f9',
              fontFamily: 'serif',
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            Maron<span style={{ color: '#cc5500', marginLeft: '20px', fontStyle: 'italic' }}>Labs</span>
          </h1>

          <p
            style={{
              fontSize: 24,
              margin: 0,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#979696',
            }}
          >
            Premium Tech & Digital Solutions
          </p>

          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '60px',
              fontSize: 18,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#cc5500',
            }}
          >
            <span>Systems</span>
            <span>•</span>
            <span>AI</span>
            <span>•</span>
            <span>Hardware</span>
            <span>•</span>
            <span>Digital</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
