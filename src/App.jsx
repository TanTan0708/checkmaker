import React from 'react';

// Number to words conversion function
function numberToWords(num) {
  if (!num || num === '') return '';
  
  const numValue = parseFloat(num.toString().replace(/,/g, ''));
  
  if (isNaN(numValue)) return '';
  if (numValue === 0) return 'Zero';
  if (numValue < 0) return 'Negative ' + numberToWords(Math.abs(numValue));
  
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  
  function convertLessThanThousand(n) {
    if (n === 0) return '';
    
    let result = '';
    
    if (n >= 100) {
      result += ones[Math.floor(n / 100)] + ' Hundred';
      n %= 100;
      if (n > 0) result += ' ';
    }
    
    if (n >= 10 && n <= 19) {
      result += teens[n - 10];
    } else if (n >= 20) {
      result += tens[Math.floor(n / 10)];
      if (n % 10 > 0) {
        result += ' ' + ones[n % 10];
      }
    } else if (n > 0) {
      result += ones[n];
    }
    
    return result;
  }
  
  // Split into dollars and cents
  const parts = numValue.toFixed(2).split('.');
  const dollars = parseInt(parts[0]);
  const cents = parseInt(parts[1]);
  
  let result = '';
  
  if (dollars >= 1000000000) {
    const billions = Math.floor(dollars / 1000000000);
    result += convertLessThanThousand(billions) + ' Billion';
    const remainder = dollars % 1000000000;
    if (remainder > 0) result += ' ';
  }
  
  const millionPart = Math.floor((dollars % 1000000000) / 1000000);
  if (millionPart > 0) {
    result += convertLessThanThousand(millionPart) + ' Million';
    if (dollars % 1000000 > 0) result += ' ';
  }
  
  const thousandPart = Math.floor((dollars % 1000000) / 1000);
  if (thousandPart > 0) {
    result += convertLessThanThousand(thousandPart) + ' Thousand';
    if (dollars % 1000 > 0) result += ' ';
  }
  
  const lastPart = dollars % 1000;
  if (lastPart > 0 || dollars === 0) {
    result += convertLessThanThousand(lastPart);
  }
  
  result = result.trim();
  
  if (cents > 0) {
    result += ' and ' + cents + '/100';
  } else {
    result += ' and 00/100';
  }
  
  return result;
}

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
  const [bank, setBank] = React.useState('');
  const [date, setDate] = React.useState('12/18/2025');

  const wording = numberToWords(amount);

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
              readOnly
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