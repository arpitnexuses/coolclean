import React from 'react';

const EmailTemplate = ({ data }: { data: any }) => {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '30px',
        borderBottom: '2px solid #f0f0f0',
        paddingBottom: '20px'
      }}>
        <h1 style={{
          color: '#2c3e50',
          fontSize: '24px',
          margin: '0 0 10px 0'
        }}>CO2 Emissions Report</h1>
        <p style={{
          color: '#7f8c8d',
          fontSize: '16px',
          margin: '0'
        }}>Your Environmental Impact Analysis</p>
      </div>

      <div style={{
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px'
      }}>
        <h2 style={{
          color: '#34495e',
          fontSize: '18px',
          marginBottom: '15px'
        }}>Summary</h2>
        <p style={{
          color: '#2c3e50',
          fontSize: '15px',
          lineHeight: '1.6',
          margin: '0'
        }}>
          Based on your recent activity, here's a breakdown of your CO2 emissions:
        </p>
      </div>

      <div style={{
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px'
      }}>
        <h2 style={{
          color: '#34495e',
          fontSize: '18px',
          marginBottom: '15px'
        }}>Detailed Analysis</h2>
        <ul style={{
          listStyle: 'none',
          padding: '0',
          margin: '0'
        }}>
          {data.map((item: any, index: number) => (
            <li key={index} style={{
              padding: '12px 0',
              borderBottom: index !== data.length - 1 ? '1px solid #e0e0e0' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: '#2c3e50', fontSize: '14px' }}>{item.category}</span>
              <span style={{ 
                color: '#27ae60', 
                fontSize: '14px',
                fontWeight: '500'
              }}>{item.value} kg CO2</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#e8f5e9',
        borderRadius: '6px',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#2e7d32',
          fontSize: '18px',
          marginBottom: '10px'
        }}>Recommendations</h2>
        <p style={{
          color: '#1b5e20',
          fontSize: '14px',
          lineHeight: '1.6',
          margin: '0'
        }}>
          Consider these eco-friendly alternatives to reduce your carbon footprint.
        </p>
      </div>

      <div style={{
        marginTop: '30px',
        textAlign: 'center',
        color: '#95a5a6',
        fontSize: '12px',
        borderTop: '1px solid #f0f0f0',
        paddingTop: '20px'
      }}>
        <p style={{ margin: '0' }}>This report was generated automatically. Please do not reply to this email.</p>
      </div>
    </div>
  );
};

export default EmailTemplate; 