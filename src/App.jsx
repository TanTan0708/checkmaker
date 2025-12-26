import React from 'react';

// Logo Component
function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-placeholder">
        <img src="/logo.svg" alt="" />
      </div>
    </div>
  );
}

// Body Component
function Body() {
  const [payee, setPayee] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [wording, setWording] = React.useState('');
  const [bank, setBank] = React.useState('');
  const [date, setDate] = React.useState('12/18/2025');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="body-container">
      <div className="check-form">
        <div className="form-header">
          <div className="bank-input-group">
            <input 
              type="text" 
              placeholder="Bank" 
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              className="bank-input"
            />
            <div className="icon-placeholder"><img src="/DropDown.svg" alt="" id='icon'/></div>
          </div>
          <div className="date-input-group">
            <input 
              type="text" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="date-input"
            />
            <div className="icon-placeholder"><img src="/CalendarPlus.svg" alt="" /></div>
          </div>
        </div>

        <div className="form-body">
          <div className="form-row">
            <div className="checkbox-placeholder"><img src="/Checked Checkbox.svg" alt="" /></div>
            <label>Payee:</label>
            <input 
              type="text" 
              value={payee}
              onChange={(e) => setPayee(e.target.value)}
              className="text-input"
            />
          </div>

          <div className="form-row">
            <div className="checkbox-placeholder"><img src="/Checked Checkbox.svg" alt="" /></div>
            <label>Amount:</label>
            <input 
              type="text" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-input"
            />
          </div>

          <div className="form-row wording-row">
            <label>Wording (</label>
            <input 
              type="text" 
              value={wording}
              onChange={(e) => setWording(e.target.value)}
              className="wording-input"
            />
            <label>)</label>
          </div>
        </div>

        <div className="form-footer">
          <button onClick={handlePrint} className="print-button">
            Print
          </button>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <div className="footercontainer">
      <div className="info-icon-placeholder">
        <img src="/Info.svg" alt="" />
      </div>
    </div>
  );
}

// Main App
export default function App() {
  return (
    <>
      <Logo />
      <Body />
      <Footer />
    </>
  );
}