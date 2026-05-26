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
        }}
      >
        {/* Center content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#161312',
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
              display: 'flex',
            }}
          />

          <div
            style={{
              fontSize: 100,
              fontWeight: 400,
              margin: 0,
              marginBottom: '20px',
              color: '#f9f8f9',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Maron<span style={{ color: '#cc5500', marginLeft: '20px' }}>Labs</span>
          </div>

          <div
            style={{
              fontSize: 24,
              margin: 0,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#979696',
              display: 'flex',
            }}
          >
            Premium Tech & Digital Solutions
          </div>

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
            <span style={{ display: 'flex' }}>Systems</span>
            <span style={{ display: 'flex' }}>•</span>
            <span style={{ display: 'flex' }}>AI</span>
            <span style={{ display: 'flex' }}>•</span>
            <span style={{ display: 'flex' }}>Hardware</span>
            <span style={{ display: 'flex' }}>•</span>
            <span style={{ display: 'flex' }}>Digital</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
