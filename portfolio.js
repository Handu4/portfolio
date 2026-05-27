function switchTab(tab, btn) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('on'));
  document.querySelectorAll('.doc-panel').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('panel-' + tab).classList.add('on');
}

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && ['s','p','u'].includes(e.key.toLowerCase())) { e.preventDefault(); }
  if (e.key === 'Escape') closeModal();
});

const DOCS = {
  cashflow: {
    title: '12-Month Cash Flow Forecast — FY 2024',
    headers: ['Month','Opening Balance','Inflows','Outflows','Net Cash Flow','Closing Balance'],
    rows: [
      ['Jan 2024','₦12,500,000','₦8,200,000','₦6,800,000','₦1,400,000','₦13,900,000'],
      ['Feb 2024','₦13,900,000','₦9,100,000','₦7,200,000','₦1,900,000','₦15,800,000'],
      ['Mar 2024','₦15,800,000','₦11,500,000','₦8,100,000','₦3,400,000','₦19,200,000'],
      ['Apr 2024','₦19,200,000','₦7,800,000','₦9,500,000','(₦1,700,000)','₦17,500,000'],
      ['May 2024','₦17,500,000','₦10,200,000','₦8,300,000','₦1,900,000','₦19,400,000'],
      ['Jun 2024','₦19,400,000','₦12,600,000','₦10,100,000','₦2,500,000','₦21,900,000'],
      ['Jul 2024','₦21,900,000','₦9,800,000','₦8,900,000','₦900,000','₦22,800,000'],
      ['Aug 2024','₦22,800,000','₦10,400,000','₦7,600,000','₦2,800,000','₦25,600,000'],
      ['Sep 2024','₦25,600,000','₦13,200,000','₦11,400,000','₦1,800,000','₦27,400,000'],
      ['Oct 2024','₦27,400,000','₦8,900,000','₦9,200,000','(₦300,000)','₦27,100,000'],
      ['Nov 2024','₦27,100,000','₦14,700,000','₦10,800,000','₦3,900,000','₦31,000,000'],
      ['Dec 2024','₦31,000,000','₦16,200,000','₦12,500,000','₦3,700,000','₦34,700,000'],
    ],
    totals: ['TOTAL FY2024','—','₦132,600,000','₦110,400,000','₦22,200,000','—']
  },
  pnl: {
    title: 'Profit & Loss Statement — Q3 2024',
    headers: ['Line Item','Q3 2024','Q3 2023','Variance','Var %'],
    rows: [
      ['REVENUE','','','','','H'],
      ['Product Sales','₦48,200,000','₦39,100,000','₦9,100,000','+23.3%','P'],
      ['Service Revenue','₦12,600,000','₦10,800,000','₦1,800,000','+16.7%','P'],
      ['Other Income','₦1,100,000','₦800,000','₦300,000','+37.5%','P'],
      ['Total Revenue','₦61,900,000','₦50,700,000','₦11,200,000','+22.1%','TP'],
      ['COST OF SALES','','','','','H'],
      ['Direct Materials','₦18,400,000','₦15,200,000','₦3,200,000','+21.1%','N'],
      ['Direct Labour','₦9,800,000','₦8,100,000','₦1,700,000','+21.0%','N'],
      ['Manufacturing OH','₦4,200,000','₦3,900,000','₦300,000','+7.7%','N'],
      ['Gross Profit','₦29,500,000','₦23,500,000','₦6,000,000','+25.5%','TP'],
      ['Gross Margin','47.7%','46.4%','+1.3pp','',''],
      ['OPERATING EXPENSES','','','','','H'],
      ['Salaries & Benefits','₦8,100,000','₦7,200,000','₦900,000','+12.5%','N'],
      ['Marketing','₦2,400,000','₦1,800,000','₦600,000','+33.3%','N'],
      ['Admin & General','₦1,900,000','₦2,100,000','(₦200,000)','-9.5%','P'],
      ['Depreciation','₦1,200,000','₦1,100,000','₦100,000','+9.1%','N'],
      ['Operating Profit','₦15,900,000','₦11,300,000','₦4,600,000','+40.7%','TP'],
      ['Net Profit After Tax','₦11,130,000','₦7,910,000','₦3,220,000','+40.7%','TP'],
    ],
    totals: null
  },
  budget: {
    title: 'Budget vs. Actuals Tracker — FY 2024',
    headers: ['Department','Annual Budget','YTD Actual','YTD Budget','Variance','Status'],
    rows: [
      ['Sales & Marketing','₦24,000,000','₦18,200,000','₦18,000,000','+₦200,000','✓ On track'],
      ['Operations','₦36,000,000','₦29,100,000','₦27,000,000','-₦2,100,000','⚠ Over budget'],
      ['Human Resources','₦18,000,000','₦13,200,000','₦13,500,000','+₦300,000','✓ Under budget'],
      ['Finance & Legal','₦9,600,000','₦7,400,000','₦7,200,000','-₦200,000','⚠ Slight over'],
      ['Technology','₦12,000,000','₦8,100,000','₦9,000,000','+₦900,000','✓ Under budget'],
      ['Executive Office','₦6,000,000','₦4,600,000','₦4,500,000','-₦100,000','✓ On track'],
    ],
    totals: ['TOTAL','₦105,600,000','₦80,600,000','₦79,200,000','-₦1,400,000','⚠ Monitor ops']
  },
  dcf: {
    title: 'DCF Valuation Model — Fintech Acquisition Target',
    headers: ['Year','Revenue (₦M)','EBITDA','EBITDA Margin','FCF (₦M)','PV of FCF'],
    rows: [
      ['2024E','₦420M','₦84M','20.0%','₦67.2M','₦61.1M'],
      ['2025E','₦588M','₦129.4M','22.0%','₦103.5M','₦85.5M'],
      ['2026E','₦794M','₦190.6M','24.0%','₦152.5M','₦114.3M'],
      ['2027E','₦1,033M','₦268.6M','26.0%','₦214.9M','₦145.9M'],
      ['2028E','₦1,291M','₦348.6M','27.0%','₦278.9M','₦171.6M'],
      ['Terminal Value','','','','','₦2,140M'],
    ],
    totals: ['Enterprise Value','','','','','₦2,718M']
  }
};

const PDFS = {
  audit: {
    title: 'Statutory Audit Report — FY 2023',
    heading: "Independent Auditor's Report",
    subtitle: 'To the Shareholders of [Client Name] Limited · Financial Year ended 31 December 2023',
    sections: [
      { title: 'Opinion', content: [
        { label: 'Basis of Opinion', value: "We conducted our audit in accordance with International Standards on Auditing (ISAs). Our responsibilities are described in the Auditor's Responsibilities section." },
        { label: 'Audit Opinion', value: 'In our opinion, the financial statements give a true and fair view of the financial position of the Company as at 31 December 2023.' },
      ]},
      { title: 'Key Audit Matters', rows: [
        { l: 'Revenue Recognition', v: 'Significant judgement' },
        { l: 'Inventory Valuation', v: 'Significant judgement' },
        { l: 'Going Concern', v: 'Assessed — No material uncertainty' },
      ]},
      { title: "Financial Highlights (₦'000)", rows: [
        { l: 'Total Assets', v: '₦4,280,400' },
        { l: 'Total Liabilities', v: '₦2,190,800' },
        { l: 'Equity', v: '₦2,089,600' },
        { l: 'Revenue', v: '₦6,120,000' },
        { l: 'Profit After Tax', v: '₦428,400', t: true },
      ]},
    ]
  },
  tax: {
    title: 'Tax Compliance Summary — CIT & VAT 2023',
    File: "pdf/AFM_Exam_Worksheet Global Discount Ibrahim Handu.pdf"
  },
  valuation: {
    title: 'Business Valuation Report — M&A Target',
    heading: 'Business Valuation Report',
    subtitle: 'Confidential · Prepared for Transaction Advisory Purposes · October 2024',
    sections: [
      { title: 'Valuation Summary (₦ Millions)', rows: [
        { l: 'DCF Method (Base Case)', v: '₦2,718M' },
        { l: 'Comparable Companies (EV/EBITDA)', v: '₦2,490M' },
        { l: 'Precedent Transactions', v: '₦2,950M' },
        { l: 'Concluded Enterprise Value', v: '₦2,718M', t: true },
        { l: 'Less: Net Debt', v: '(₦320M)' },
        { l: 'Equity Value', v: '₦2,398M', t: true },
      ]},
      { title: 'Key Assumptions', rows: [
        { l: 'Discount Rate (WACC)', v: '23.5%' },
        { l: 'Terminal Growth Rate', v: '5.0%' },
        { l: 'Revenue CAGR (5yr)', v: '32.4%' },
        { l: 'Terminal EBITDA Margin', v: '27.0%' },
      ]},
    ]
  },
  mgmt: {
    title: 'Management Accounts — Q4 2023',
    heading: 'Management Accounts',
    subtitle: 'Quarter 4 · October – December 2023 · Prepared by Ibrahim HANDU CPA',
    sections: [
      { title: "Income Statement (₦'000)", rows: [
        { l: 'Revenue', v: '₦61,900' },
        { l: 'Cost of Sales', v: '(₦32,400)' },
        { l: 'Gross Profit', v: '₦29,500', t: true },
        { l: 'Operating Expenses', v: '(₦13,600)' },
        { l: 'EBITDA', v: '₦15,900', t: true },
        { l: 'Depreciation', v: '(₦1,200)' },
        { l: 'Interest & Finance', v: '(₦800)' },
        { l: 'Profit Before Tax', v: '₦13,900', t: true },
        { l: 'Taxation (30%)', v: '(₦4,170)' },
        { l: 'Profit After Tax', v: '₦9,730', t: true },
      ]},
      { title: 'Balance Sheet Snapshot', rows: [
        { l: 'Total Fixed Assets', v: '₦84,200' },
        { l: 'Net Current Assets', v: '₦32,600' },
        { l: 'Total Equity', v: '₦78,900', t: true },
        { l: 'Long-Term Borrowings', v: '₦37,900' },
      ]},
    ]
  }
};

function buildSS(doc) {
  let h = `<div class="ss-wrap"><table class="ss-tbl" oncontextmenu="return false"><thead><tr><th class="rn"></th>`;
  doc.headers.forEach((hd, i) => { h += `<th>${String.fromCharCode(65+i)} · ${hd}</th>`; });
  h += `</tr></thead><tbody>`;
  doc.rows.forEach((row, ri) => {
    const f = (row[row.length-1]||'').toString();
    const isH = f==='H', isT = f.includes('T'), isP = f==='P', isN = f==='N';
    const cells = (isH||isT||isP||isN) ? row.slice(0,-1) : row;
    h += `<tr><td class="rn">${ri+1}</td>`;
    cells.forEach((c, ci) => {
      let cls = '';
      if (isH) cls = 'ch';
      else if (isT) cls = 'ct' + (f.includes('P') ? ' cp' : '');
      else if (ci > 0) {
        const s = c.toString();
        if (s.startsWith('(') || s.startsWith('-')) cls = 'cng';
        else if (s.startsWith('+') || isP) cls = 'cp';
      }
      if (ci > 0 && !isH) cls += ' cn';
      h += `<td class="${cls.trim()}">${c}</td>`;
    });
    h += `</tr>`;
  });
  if (doc.totals) {
    h += `<tr><td class="rn"></td>`;
    doc.totals.forEach((c,i) => { h += `<td class="ct cn${i===0?' ch':''}">${c}</td>`; });
    h += `</tr>`;
  }
  h += `</tbody></table></div>`;
  return h;
}

function buildPDF(doc) {
  let h = `<div class="pdf-wrap"><div class="pdf-pg"><h1>${doc.heading}</h1><p class="pdf-sub">${doc.subtitle}</p>`;
  doc.sections.forEach(s => {
    h += `<div class="pdf-sec"><div class="pdf-sec-title">${s.title}</div>`;
    if (s.content) s.content.forEach(c => {
      h += `<p style="font-size:.82rem;line-height:1.7;color:#444;margin-bottom:.75rem"><strong style="display:block;font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:#b8975a;margin-bottom:.2rem">${c.label}</strong>${c.value}</p>`;
    });
    if (s.rows) s.rows.forEach(r => {
      h += `<div class="pdf-row${r.t?' tot':''}"><span>${r.l}</span><span>${r.v}</span></div>`;
    });
    h += `</div>`;
  });
  h += `</div></div>`;
  return h;
}

function openDoc(id) {
  const modal = document.getElementById('docModal');
  const body  = document.getElementById('modalBody');
  const title = document.getElementById('modalTitle');
  if (DOCS[id]) {
    title.textContent = DOCS[id].title;
    body.style.height = '520px';
    body.innerHTML = buildSS(DOCS[id]);
  } else if (PDFS[id]) {
    title.textContent = PDFS[id].title;
    body.style.height = '520px';
    body.innerHTML = buildPDF(PDFS[id]);
  }
  modal.classList.add('on');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('docModal').classList.remove('on');
  document.body.style.overflow = '';
}

document.getElementById('docModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

window.addEventListener('beforeprint', e => { e.preventDefault(); window.stop(); });