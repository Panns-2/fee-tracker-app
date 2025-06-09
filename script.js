<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Fee Tracker App - Panns Education Centre</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --color-primary: #04396d;
      --color-accent: #04668c; /* Deep Sea Blue */
      --color-accent-light: #2ea3cc;
      --color-bg: #ffffff;
      --color-text: #374151;
      --color-text-muted: #6b7280;
      --color-border: #e5e7eb;
      --radius: 0.75rem;
      --shadow: 0 4px 10px rgb(0 0 0 / 0.08);
      --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      --max-width: 1200px;
      font-family: 'Poppins', sans-serif;
    }
    /* Reset and base */
    *, *::before, *::after {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      background-color: var(--color-bg);
      color: var(--color-text);
      line-height: 1.6;
      font-size: 16px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    h1,h2,h3,h4 {
      margin: 0 0 0.5rem 0;
      font-weight: 700;
      color: var(--color-primary);
      line-height: 1.2;
    }
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    p {
      margin-top: 0;
      margin-bottom: 1rem;
      color: var(--color-text-muted);
    }
    a {
      color: var(--color-primary);
      text-decoration: none;
      transition: color var(--transition);
    }
    a:hover, a:focus {
      color: var(--color-accent-light);
      outline: none;
    }

    /* Container */
    .container {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 1rem 1.5rem 3rem 1.5rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    /* Header/nav */
    header {
      background: var(--color-bg);
      box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
      position: sticky;
      top: 0;
      z-index: 99;
    }
    nav {
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1.5rem;
    }
    .logo {
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--color-primary);
      letter-spacing: 0.05em;
      user-select: none;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
    }
    nav li {
      display: flex;
      align-items: center;
    }
    nav button {
      background: var(--color-primary);
      border: none;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: var(--radius);
      font-weight: 600;
      cursor: pointer;
      transition: background-color var(--transition);
      user-select: none;
    }
    nav button:hover, nav button:focus {
      background-color: var(--color-accent-light);
      outline: none;
    }

    /* Main */
    main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    /* Login Screen */
    .login-screen {
      max-width: 400px;
      margin: 3rem auto;
      background: var(--color-bg);
      box-shadow: var(--shadow);
      border-radius: var(--radius);
      padding: 2rem 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .login-screen h2 {
      color: var(--color-primary);
      text-align: center;
      margin-bottom: 1.5rem;
    }
    label {
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
      color: var(--color-text-muted);
      display: block;
    }
    input[type="text"], input[type="password"] {
      font-family: inherit;
      font-size: 1rem;
      padding: 0.5rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius);
      width: 100%;
      transition: border-color var(--transition);
    }
    input[type="text"]:focus, input[type="password"]:focus {
      border-color: var(--color-primary);
      outline: none;
    }
    .login-btn {
      background: var(--color-primary);
      color: white;
      border: none;
      padding: 0.75rem;
      font-weight: 700;
      font-size: 1.1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: background-color var(--transition);
      margin-top: 1rem;
    }
    .login-btn:hover, .login-btn:focus {
      background-color: var(--color-accent-light);
      outline: none;
    }
    .login-error {
      color: #b91c1c;
      font-weight: 600;
      font-size: 0.9rem;
      text-align: center;
      margin-top: 0.5rem;
    }

    /* Tabs */
    .tabs {
      display: flex;
      border-bottom: 2px solid var(--color-border);
      margin-bottom: 1rem;
      gap: 1rem;
      padding-left: 1rem;
      overflow-x: auto;
    }
    .tab {
      font-weight: 600;
      cursor: pointer;
      padding: 0.75rem 1rem;
      border-radius: var(--radius) var(--radius) 0 0;
      background-color: var(--color-bg);
      color: var(--color-text-muted);
      user-select: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: background-color var(--transition), color var(--transition);
      flex-shrink: 0;
    }
    .tab svg {
      fill: var(--color-text-muted);
      width: 20px;
      height: 20px;
    }
    .tab:hover, .tab:focus {
      color: var(--color-primary);
      outline: none;
    }
    .tab.active {
      background-color: var(--color-primary);
      color: white;
      box-shadow: var(--shadow);
    }
    .tab.active svg {
      fill: white;
    }

    /* Icons Silhouette Style for navigation tabs */
    .icon-silhouette {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    /* Card */
    .card {
      background: var(--color-bg);
      box-shadow: var(--shadow);
      border-radius: var(--radius);
      padding: 1.5rem 2rem;
      margin-bottom: 2rem;
      transition: box-shadow var(--transition);
    }
    .card:hover, .card:focus-within {
      box-shadow: 0 8px 20px rgb(0 0 0 / 0.12);
    }

    /* Fee Summary Table */
    .fee-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 0.75rem;
      font-size: 1rem;
      user-select: none;
    }
    .fee-table thead tr {
      font-weight: 600;
      color: var(--color-primary);
      border-bottom: 2px solid var(--color-primary);
    }
    .fee-table th, .fee-table td {
      padding: 0.75rem 1rem;
      text-align: left;
      background: white;
      border-radius: var(--radius);
    }
    .fee-table tbody tr {
      box-shadow: var(--shadow);
      cursor: default;
      transition: box-shadow var(--transition);
    }
    .fee-table tbody tr:hover {
      box-shadow: 0 6px 15px rgb(0 0 0 / 0.08);
    }
    .fee-table .fee-type {
      font-weight: 600;
      color: var(--color-primary);
    }
    .expandable-row {
      cursor: pointer;
      user-select: none;
      position: relative;
    }
    .expandable-row::after {
      content: "▼";
      position: absolute;
      right: 1rem;
      font-size: 0.8rem;
      color: var(--color-accent);
      transition: transform var(--transition);
      transform-origin: center;
    }
    .expandable-row.expanded::after {
      transform: rotate(-180deg);
    }

    /* General Fees Breakdown Table */
    .breakdown-table {
      width: 90%;
      margin: 0.5rem auto 1rem auto;
      border-collapse: collapse;
      font-size: 0.9rem;
    }
    .breakdown-table td {
      padding: 0.3rem 0.5rem;
    }
    .breakdown-table tr:nth-child(odd) {
      background-color: #f9f9f9;
      border-radius: var(--radius);
    }

    /* Contact buttons */
    .contact-buttons {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      justify-content: center;
    }
    .contact-btn {
      flex: 1;
      background-color: var(--color-primary);
      border: none;
      color: white;
      border-radius: var(--radius);
      padding: 0.75rem 1rem;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: background-color var(--transition);
      user-select: none;
      text-decoration: none;
    }
    .contact-btn:hover, .contact-btn:focus {
      background-color: var(--color-accent-light);
      outline: none;
      text-decoration: none;
      color: white;
    }
    .contact-btn svg {
      fill: white;
      width: 20px;
      height: 20px;
    }

    /* Admin Dashboard */
    .admin-dashboard {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
    label[for] {
      font-weight: 600;
      margin-bottom: 0.25rem;
      font-size: 0.9rem;
      color: var(--color-text-muted);
    }
    input[type="text"], input[type="number"], select {
      padding: 0.5rem;
      border-radius: var(--radius);
      border: 1px solid var(--color-border);
      font-size: 1rem;
      transition: border-color var(--transition);
    }
    input[type="text"]:focus, input[type="number"]:focus, select:focus {
      border-color: var(--color-primary);
      outline: none;
    }
    button.primary-btn {
      background-color: var(--color-primary);
      color: white;
      padding: 0.6rem 1.25rem;
      font-weight: 600;
      border: none;
      border-radius: var(--radius);
      cursor: pointer;
      transition: background-color var(--transition);
      user-select: none;
    }
    button.primary-btn:hover, button.primary-btn:focus {
      background-color: var(--color-accent-light);
      outline: none;
    }
    .student-list {
      max-width: 350px;
      overflow-y: auto;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      background: var(--color-bg);
    }
    .student-list-item {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--color-border);
      cursor: pointer;
      font-weight: 600;
      color: var(--color-primary);
      transition: background-color var(--transition), color var(--transition);
    }
    .student-list-item.selected, .student-list-item:hover {
      background: var(--color-accent-light);
      color: white;
      outline: none;
    }
    .student-form {
      max-width: 600px;
      padding: 1rem;
      box-shadow: var(--shadow);
      background: var(--color-bg);
      border-radius: var(--radius);
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .section-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 1rem;
      border-bottom: 2px solid var(--color-primary);
      padding-bottom: 0.25rem;
    }
    .fee-breakdown-list {
      list-style: none;
      padding-left: 0;
    }
    .fee-breakdown-list li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    .fee-breakdown-list li span {
      color: var(--color-text-muted);
      font-weight: 400;
    }
    .message-box {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    textarea {
      resize: vertical;
      min-height: 70px;
      padding: 0.5rem;
      border-radius: var(--radius);
      border: 1px solid var(--color-border);
      font-family: inherit;
      font-size: 1rem;
      transition: border-color var(--transition);
    }
    textarea:focus {
      border-color: var(--color-primary);
      outline: none;
    }
    .message-send-btn {
      align-self: flex-end;
      background-color: var(--color-primary);
      border: none;
      color: white;
      padding: 0.6rem 1.25rem;
      font-weight: 600;
      border-radius: var(--radius);
      cursor: pointer;
      transition: background-color var(--transition);
      user-select: none;
    }
    .message-send-btn:hover, .message-send-btn:focus {
      background-color: var(--color-accent-light);
      outline: none;
    }
    /* Responsive */
    @media (max-width: 768px) {
      nav ul {
        display: none;
      }
      main {
        padding: 0 1rem;
      }
      .admin-dashboard {
        flex-direction: column;
        gap: 1.5rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <nav aria-label="Primary navigation">
      <div class="logo" tabindex="0" aria-label="Fee Tracker App Logo">Fee Tracker</div>
      <ul role="menubar" aria-label="Main menu">
        <!-- Navigation items will be dynamically injected -->
      </ul>
      <button id="logoutBtn" aria-label="Logout" style="display:none;">Logout</button>
    </nav>
  </header>

  <main>
    <!-- Login Screen -->
    <section id="loginScreen" class="login-screen" aria-label="Login screen">
      <h2>Login</h2>
      <form id="loginForm" aria-describedby="loginHelp">
        <label for="userTypeSelect">Login as</label>
        <select id="userTypeSelect" name="userType" required aria-required="true" aria-label="Select user type">
          <option value="">Select user type</option>
          <option value="parent">Parent</option>
          <option value="admin">Admin</option>
        </select>

        <label for="loginIdInput" id="loginIdLabel">Student ID</label>
        <input
          type="text"
          id="loginIdInput"
          name="loginId"
          placeholder="Enter Student ID"
          aria-required="true"
          autocomplete="username"
          required
        />

        <button type="submit" class="login-btn" aria-label="Login">Login</button>
      </form>
      <div id="loginError" class="login-error" role="alert" aria-live="assertive"></div>
    </section>

    <!-- Parent Dashboard -->
    <section id="parentDashboard" style="display:none;" aria-label="Parent dashboard">
      <div class="container">
        <h1>Welcome, <span id="studentNameDisplay">Student Name</span></h1>
        <p>Class: <span id="studentClassDisplay">Class Info</span></p>

        <div class="card" role="region" aria-labelledby="feeSummaryLabel">
          <h2 id="feeSummaryLabel">Fee Summary</h2>
          <table class="fee-table" aria-describedby="feeSummaryDesc">
            <thead>
              <tr>
                <th scope="col">Fee Type</th>
                <th scope="col">Amount (GH¢)</th>
                <th scope="col">Paid (GH¢)</th>
                <th scope="col">Balance (GH¢)</th>
              </tr>
            </thead>
            <tbody id="feeSummaryBody">
              <!-- Filled dynamically -->
            </tbody>
          </table>
          <p id="feeSummaryDesc" class="visually-hidden">
            Table summarizing general fees, feeding fee, totals, and balances
          </p>
        </div>

        <div id="generalFeesBreakdown" class="card" role="region" aria-live="polite" aria-hidden="true" style="display:none;">
          <h2>General Fees Breakdown</h2>
          <table class="breakdown-table" aria-describedby="generalFeesDesc">
            <tbody id="generalFeesBody">
              <!-- Filled dynamically -->
            </tbody>
          </table>
          <p id="generalFeesDesc" class="visually-hidden">
            Breakdown of general fees into components like books, uniform, exam fees, and PTA dues.
          </p>
        </div>

        <div class="contact-buttons" aria-label="Contact school">
          <a href="" id="whatsappBtn" class="contact-btn" target="_blank" rel="noopener" aria-label="Contact school via WhatsApp">
            <svg class="icon-silhouette" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.52 3.48A11.88 11.88 0 0012 0C5.373 0 0 5.373 0 12a11.89 11.89 0 001.743 6.055L0 24l5.978-1.756A11.91 11.91 0 0012 24c6.627 0 12-5.373 12-12 0-2.953-1.14-5.74-3.48-7.52zM12 21.75a9.76 9.76 0 01-4.958-1.435l-.355-.215-3.54 1.04 1.04-3.46-.23-.357A9.714 9.714 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75zm5.272-7.067c-.188-.094-1.11-.548-1.283-.609-.172-.064-.3-.094-.426.094-.126.188-.49.609-.6.73-.11.126-.22.14-.408.047-.188-.094-.79-.292-1.5-.927-.554-.493-.928-1.103-1.04-1.29-.11-.188-.012-.289.084-.382.086-.086.188-.22.28-.33.094-.11.126-.188.188-.313.063-.126.03-.235-.015-.33-.047-.094-.426-1.027-.58-1.41-.153-.37-.31-.32-.426-.327-.11-.006-.235-.006-.36-.006-.126 0-.33.047-.505.235-.175.188-.673.657-.673 1.6 0 .94.69 1.85.787 1.978.094.126 1.36 2.074 3.295 2.905.46.2.82.32 1.1.41.462.15.88.128 1.21.078.37-.058 1.11-.453 1.266-.89.158-.438.158-.813.11-.89-.047-.08-.172-.126-.36-.22z"/></svg>
            WhatsApp
          </a>
          <a href="mailto:pannseducationcentre@gmail.com" id="emailBtn" class="contact-btn" aria-label="Contact school via Email">
            <svg class="icon-silhouette" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 4a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16zm0 2v.511l-8 4.889-8-4.889V6h16zM4 18h16v-6.997l-7.91 4.834a1 1 0 01-1.18 0L4 11.003V18z"/></svg>
            Email
          </a>
          <a href="tel:0545203743" id="callBtn" class="contact-btn" aria-label="Contact school via Phone Call">
            <svg class="icon-silhouette" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 12.74 12.74 0 004 1.24 1 1 0 011 1v3.14a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.14a1 1 0 011 1 12.74 12.74 0 001.24 4 1 1 0 01-.21 1.11l-2.2 2.2z"/></svg>
            Call
          </a>
        </div>
      </div>
    </section>

    <!-- Admin Dashboard -->
    <section id="adminDashboard" style="display:none;" aria-label="Admin dashboard" class="container">
      <h1>Admin Dashboard</h1>
      <div class="admin-dashboard" role="main">
        <div class="student-list" tabindex="0" aria-label="Student list" role="listbox" aria-activedescendant="" >
          <!-- Student list items added dynamically -->
        </div>
        <form id="studentForm" class="student-form" aria-labelledby="studentFormTitle" aria-live="polite" novalidate>
          <h2 id="studentFormTitle" class="section-title">Student Profile</h2>
          <div class="form-group">
            <label for="studentNameInput">Student Name</label>
            <input type="text" id="studentNameInput" name="studentName" required aria-required="true" autocomplete="off" />
          </div>
          <div class="form-group">
            <label for="studentClassInput">Class</label>
            <input type="text" id="studentClassInput" name="studentClass" required aria-required="true" autocomplete="off" />
          </div>
          <div class="form-group">
            <label for="feedingFeeInput">Feeding Fee (GH¢)</label>
            <input type="number" id="feedingFeeInput" name="feedingFee" min="0" step="0.01" required aria-required="true" />
          </div>
          <div class="form-group">
            <label for="generalFeesInput">General Fees Total (GH¢)</label>
            <input type="number" id="generalFeesInput" name="generalFees" min="0" step="0.01" required aria-required="true" />
          </div>
          <div class="form-group">
            <label>General Fees Breakdown</label>
            <ul id="feeBreakdownList" class="fee-breakdown-list" aria-label="General fees breakdown list">
              <!-- Breakdown items dynamically -->
            </ul>
            <button type="button" id="addBreakdownItemBtn" class="primary-btn" aria-label="Add fee breakdown item">Add Breakdown Item</button>
          </div>
          <button type="submit" class="primary-btn" aria-label="Save student profile">Save Student</button>
          <button type="button" id="deleteStudentBtn" class="primary-btn" style="background-color:#b91c1c; margin-top:1rem;" aria-label="Delete student profile">Delete Student</button>
          <div class="message-box" aria-label="Send message to parents">
            <label for="messageTextarea">Send Reminder / Message to Parents</label>
            <textarea id="messageTextarea" name="message" placeholder="Enter message here..."></textarea>
            <button type="button" id="sendMessageBtn" class="message-send-btn" aria-label="Send message">Send</button>
          </div>
        </form>
      </div>
    </section>
  </main>

  <script>
    // Sample data to simulate a backend data persistence
    let students = [
      {
        id: 'S001',
        name: 'Kwame Nkrumah',
        class: 'Grade 5',
        feedingFee: 130,
        feedingFeePaid: 100,
        generalFees: 300,
        generalFeesPaid: 200,
        generalFeeBreakdown: [
          { item: 'Books', amount: 100 },
          { item: 'Uniform', amount: 80 },
          { item: 'Exam Fees', amount: 70 },
          { item: 'PTA Dues', amount: 50 },
        ]
      },
      {
        id: 'S002',
        name: 'Ama Serwaa',
        class: 'Grade 3',
        feedingFee: 150,
        feedingFeePaid: 150,
        generalFees: 250,
        generalFeesPaid: 250,
        generalFeeBreakdown: [
          { item: 'Books', amount: 90 },
          { item: 'Uniform', amount: 60 },
          { item: 'Exam Fees', amount: 50 },
          { item: 'PTA Dues', amount: 50 },
        ]
      }
    ];

    let currentUser = null; // 'parent' or 'admin'
    let currentStudent = null;

    // DOM elements
    const loginScreen = document.getElementById('loginScreen');
    const parentDashboard = document.getElementById('parentDashboard');
    const adminDashboard = document.getElementById('adminDashboard');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginForm = document.getElementById('loginForm');
    const userTypeSelect = document.getElementById('userTypeSelect');
    const loginIdInput = document.getElementById('loginIdInput');
    const loginIdLabel = document.getElementById('loginIdLabel');
    const loginError = document.getElementById('loginError');
    const studentNameDisplay = document.getElementById('studentNameDisplay');
    const studentClassDisplay = document.getElementById('studentClassDisplay');
    const feeSummaryBody = document.getElementById('feeSummaryBody');
    const generalFeesBreakdown = document.getElementById('generalFeesBreakdown');
    const generalFeesBody = document.getElementById('generalFeesBody');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const emailBtn = document.getElementById('emailBtn');
    const callBtn = document.getElementById('callBtn');
    const nav = document.querySelector('nav ul');
    const studentList = document.querySelector('.student-list');
    const studentForm = document.getElementById('studentForm');
    const studentNameInput = document.getElementById('studentNameInput');
    const studentClassInput = document.getElementById('studentClassInput');
    const feedingFeeInput = document.getElementById('feedingFeeInput');
    const generalFeesInput = document.getElementById('generalFeesInput');
    const feeBreakdownList = document.getElementById('feeBreakdownList');
    const addBreakdownItemBtn = document.getElementById('addBreakdownItemBtn');
    const deleteStudentBtn = document.getElementById('deleteStudentBtn');
    const messageTextarea = document.getElementById('messageTextarea');
    const sendMessageBtn = document.getElementById('sendMessageBtn');

    // Silhouette SVG icons for tabs
    const icons = {
      parent: `<svg class="icon-silhouette" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="7" r="4"/><path d="M12 15c-4 0-7 2-7 4v3h14v-3c0-2-3-4-7-4z"/></svg>`,
      admin: `<svg class="icon-silhouette" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 6h18v12H3z"/><path d="M7 6v12"/><path d="M17 6v12"/></svg>`,
      fees: `<svg class="icon-silhouette" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 6h18v2H3zm0 6h18v2H3z"/></svg>`,
      students: `<svg class="icon-silhouette" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="7" cy="7" r="4"/><circle cx="17" cy="7" r="4"/><path d="M2 18a5 5 0 0110 0zM12 18a5 5 0 0110 0z"/></svg>`,
      messages: `<svg class="icon-silhouette" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M2 6v12h20V6H2zm0-2h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>`
    };

    // Utility functions

    // Show only one main section and manage nav visibility
    function switchView(view) {
      currentUser = view;
      loginScreen.style.display = view ? 'none' : 'flex';
      parentDashboard.style.display = (view === 'parent') ? 'block' : 'none';
      adminDashboard.style.display = (view === 'admin') ? 'block' : 'none';
      logoutBtn.style.display = view ? 'inline-block' : 'none';
      nav.innerHTML = '';
      loginError.textContent = '';
      currentStudent = null;
      if (view === 'parent') {
        setupParentNav();
      } else if (view === 'admin') {
        setupAdminNav();
      }
    }

    // Login form submit handler
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      loginError.textContent = '';
      const userType = userTypeSelect.value;
      const loginId = loginIdInput.value.trim();

      if (!userType) {
        loginError.textContent = 'Please select a user type.';
        return;
      }
      if (!loginId) {
        loginError.textContent = userType === 'parent' ? 'Please enter Student ID.' : 'Please enter Admin code.';
        return;
      }

      if (userType === 'parent') {
        // Validate student ID exists
        const student = students.find(s => s.id.toLowerCase() === loginId.toLowerCase());
        if (!student) {
          loginError.textContent = 'Student ID not found.';
          return;
        }
        currentStudent = student;
        populateParentDashboard();
        switchView('parent');
      } else if (userType === 'admin') {
        // For demo purposes accept any non-empty admin code
        // Could later extend login validation
        switchView('admin');
        populateStudentList();
        clearStudentForm();
      }
    });

    // Adjust login label based on user type
    userTypeSelect.addEventListener('change', () => {
      loginError.textContent = '';
      if (userTypeSelect.value === 'parent') {
        loginIdLabel.textContent = 'Student ID';
        loginIdInput.placeholder = 'Enter Student ID';
        loginIdInput.autocomplete = "username";
      } else if (userTypeSelect.value === 'admin') {
        loginIdLabel.textContent = 'Admin Code';
        loginIdInput.placeholder = 'Enter Admin code';
        loginIdInput.autocomplete = "current-password";
      } else {
        loginIdLabel.textContent = 'Login ID';
        loginIdInput.placeholder = '';
        loginIdInput.autocomplete = "off";
      }
    });

    // Logout handler
    logoutBtn.addEventListener('click', () => {
      currentUser = null;
      currentStudent = null;
      switchView(null);
      userTypeSelect.value = '';
      loginIdInput.value = '';
      clearStudentForm();
    });

    // Parent Dashboard population
    function populateParentDashboard() {
      studentNameDisplay.textContent = currentStudent.name;
      studentClassDisplay.textContent = currentStudent.class;

      // Calculate balances
      const feedingBalance = (currentStudent.feedingFee || 0) - (currentStudent.feedingFeePaid || 0);
      const generalBalance = (currentStudent.generalFees || 0) - (currentStudent.generalFeesPaid || 0);
      const totalAmount = (currentStudent.feedingFee || 0) + (currentStudent.generalFees || 0);
      const totalPaid = (currentStudent.feedingFeePaid || 0) + (currentStudent.generalFeesPaid || 0);
      const totalBalance = totalAmount - totalPaid;

      // Fill fee summary table
      feeSummaryBody.innerHTML = `
        <tr>
          <td>Feeding Fee</td>
          <td>${currentStudent.feedingFee.toFixed(2)}</td>
          <td>${currentStudent.feedingFeePaid.toFixed(2)}</td>
          <td>${feedingBalance.toFixed(2)}</td>
        </tr>
        <tr class="expandable-row" tabindex="0" role="button" aria-expanded="false" aria-controls="generalFeesBreakdown" id="generalFeesRow">
          <td class="fee-type">General Fees</td>
          <td>${currentStudent.generalFees.toFixed(2)}</td>
          <td>${currentStudent.generalFeesPaid.toFixed(2)}</td>
          <td>${generalBalance.toFixed(2)}</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>${totalAmount.toFixed(2)}</strong></td>
          <td><strong>${totalPaid.toFixed(2)}</strong></td>
          <td><strong>${totalBalance.toFixed(2)}</strong></td>
        </tr>
      `;

      // Fill general fees breakdown table
      generalFeesBody.innerHTML = currentStudent.generalFeeBreakdown.map(item =>
        `<tr><td>${item.item}</td><td>GH¢ ${item.amount.toFixed(2)}</td></tr>`
      ).join('');
      generalFeesBreakdown.setAttribute('aria-hidden', 'true');
      generalFeesBreakdown.style.display = 'none';

      // Contact links
      whatsappBtn.href = `https://wa.me/233545203743?text=Hello%20Panns%20Education%20Centre,%20I%20am%20contacting%20regarding%20my%20child's%20fees.`;
      emailBtn.href = 'mailto:pannseducationcentre@gmail.com?subject=Fee%20Inquiry';
      callBtn.href = 'tel:0545203743';
    }

    // Expand/collapse General Fees breakdown
    document.getElementById('feeSummaryBody').addEventListener('click', e => {
      const target = e.target.closest('.expandable-row');
      if (target) {
        toggleGeneralFeesBreakdown();
      }
    });
    // Keyboard accessible via Enter or Space
    document.getElementById('feeSummaryBody').addEventListener('keydown', e => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('expandable-row')) {
        e.preventDefault();
        toggleGeneralFeesBreakdown();
      }
    });

    function toggleGeneralFeesBreakdown() {
      const row = document.getElementById('generalFeesRow');
      const expanded = row.classList.toggle('expanded');
      row.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      generalFeesBreakdown.style.display = expanded ? 'block' : 'none';
      generalFeesBreakdown.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    }

    // Setup parent nav (empty for now)
    function setupParentNav() {
      nav.innerHTML = `<li class="tab active" tabindex="0" aria-selected="true">${icons.parent} Parent View</li>`;
    }

    // Setup admin nav
    function setupAdminNav() {
      nav.innerHTML = `
        <li class="tab active" tabindex="0" aria-selected="true" id="tabStudents">${icons.students} Students</li>
        <li class="tab" tabindex="0" id="tabMessages">${icons.messages} Messages</li>
      `;
      const tabs = nav.querySelectorAll('.tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
          if (tab.id === 'tabStudents') {
            studentList.style.display = 'block';
            studentForm.style.display = 'flex';
            messageTextarea.parentElement.style.display = 'none';
            sendMessageBtn.style.display = 'none';
          } else if (tab.id === 'tabMessages') {
            studentList.style.display = 'none';
            studentForm.style.display = 'none';
            messageTextarea.parentElement.style.display = 'flex';
            sendMessageBtn.style.display = 'inline-block';
          }
        });
      });
      // Initialize visibility
      studentList.style.display = 'block';
      studentForm.style.display = 'flex';
      messageTextarea.parentElement.style.display = 'none';
      sendMessageBtn.style.display = 'none';
    }

    // Populate student list (admin)
    function populateStudentList() {
      studentList.innerHTML = '';
      students.forEach((student, index) => {
        const item = document.createElement('div');
        item.className = 'student-list-item';
        item.textContent = `${student.id} - ${student.name}`;
        item.setAttribute('role', 'option');
        item.id = `student-${index}`;
        item.tabIndex = 0;
        item.addEventListener('click', () => {
          selectStudent(index);
        });
        item.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectStudent(index);
          }
        });
        studentList.appendChild(item);
      });
    }
    // Select student from list for editing (admin)
    function selectStudent(index) {
      const previouslySelected = studentList.querySelector('.selected');
      if (previouslySelected) previouslySelected.classList.remove('selected');
      const selectedItem = document.getElementById(`student-${index}`);
      selectedItem.classList.add('selected');

      currentStudent = students[index];
      studentNameInput.value = currentStudent.name;
      studentClassInput.value = currentStudent.class;
      feedingFeeInput.value = currentStudent.feedingFee;
      generalFeesInput.value = currentStudent.generalFees;
      refreshFeeBreakdownList();

      deleteStudentBtn.style.display = 'inline-block';
    }
    // Clear student form for new student
    function clearStudentForm() {
      currentStudent = null;
      studentNameInput.value = '';
      studentClassInput.value = '';
      feedingFeeInput.value = '';
      generalFeesInput.value = '';
      feeBreakdownList.innerHTML = '';
      deleteStudentBtn.style.display = 'none';
    }
    // Refresh fee breakdown list items in admin form
    function refreshFeeBreakdownList() {
      feeBreakdownList.innerHTML = '';
      if (!currentStudent || !currentStudent.generalFeeBreakdown) return;
      currentStudent.generalFeeBreakdown.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <input type="text" aria-label="Fee item name" value="${item.item}" data-index="${index}" class="breakdown-item-name" />
          <input type="number" aria-label="Fee item amount" value="${item.amount}" data-index="${index}" class="breakdown-item-amount" min="0" step="0.01" />
          <button type="button" aria-label="Remove this fee breakdown item" class="remove-breakdown-item" data-index="${index}" style="background:#b91c1c; color:white; border:none; border-radius:0.5rem; padding:0.25rem 0.5rem; cursor:pointer;">×</button>
        `;
        feeBreakdownList.appendChild(li);
      });
    }
    // Add fee breakdown item button handler
    addBreakdownItemBtn.addEventListener('click', () => {
      if (!currentStudent) {
        alert('Select a student first or create a new student profile.');
        return;
      }
      currentStudent.generalFeeBreakdown.push({ item: 'New Item', amount: 0 });
      refreshFeeBreakdownList();
    });
    // Handle fee breakdown item edits and removal using event delegation
    feeBreakdownList.addEventListener('input', e => {
      if (!currentStudent) return;
      const target = e.target;
      const index = target.getAttribute('data-index');
      if (target.classList.contains('breakdown-item-name')) {
        currentStudent.generalFeeBreakdown[index].item = target.value;
      } else if (target.classList.contains('breakdown-item-amount')) {
        const val = parseFloat(target.value);
        currentStudent.generalFeeBreakdown[index].amount = isNaN(val) ? 0 : val;
        updateGeneralFeesTotalFromBreakdown();
      }
    });
    feeBreakdownList.addEventListener('click', e => {
      if (e.target.classList.contains('remove-breakdown-item') && currentStudent) {
        const index = e.target.getAttribute('data-index');
        currentStudent.generalFeeBreakdown.splice(index, 1);
        refreshFeeBreakdownList();
        updateGeneralFeesTotalFromBreakdown();
      }
    });
    // Sync general fees total amount from breakdown sub-items
    function updateGeneralFeesTotalFromBreakdown() {
      if (!currentStudent) return;
      const total = currentStudent.generalFeeBreakdown.reduce((sum, item) => sum + (item.amount || 0), 0);
      generalFeesInput.value = total.toFixed(2);
      currentStudent.generalFees = total;
    }
    // Save or add student profile on form submit
    studentForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = studentNameInput.value.trim();
      const studentClass = studentClassInput.value.trim();
      const feedingFeeVal = parseFloat(feedingFeeInput.value);
      const generalFeesVal = parseFloat(generalFeesInput.value);
      if (!name || !studentClass || isNaN(feedingFeeVal) || isNaN(generalFeesVal)) {
        alert('Please fill all required fields with valid values.');
        return;
      }
      if (currentStudent) {
        // Update existing student profile
        currentStudent.name = name;
        currentStudent.class = studentClass;
        currentStudent.feedingFee = feedingFeeVal;
        currentStudent.generalFees = generalFeesVal;
      } else {
        // Create new student profile with a generated ID
        const newId = generateStudentId();
        currentStudent = {
          id: newId,
          name,
          class: studentClass,
          feedingFee: feedingFeeVal,
          feedingFeePaid: 0,
          generalFees: generalFeesVal,
          generalFeesPaid: 0,
          generalFeeBreakdown: []
        };
        students.push(currentStudent);
      }
      populateStudentList();
      clearStudentForm();
      alert('Student profile saved.');
    });

    // Delete student handler
    deleteStudentBtn.addEventListener('click', () => {
      if (!currentStudent) return;
      if (!confirm(`Are you sure you want to delete student ${currentStudent.name}? This action cannot be undone.`)) return;
      students = students.filter(s => s.id !== currentStudent.id);
      currentStudent = null;
      populateStudentList();
      clearStudentForm();
    });

    // Generate new student ID (simple incremental)
    function generateStudentId() {
      let maxNum = 0;
      students.forEach(s => {
        const num = parseInt(s.id.replace(/\D/g, ''), 10);
        if (!isNaN(num) && num > maxNum) maxNum = num;
      });
      return `S${(maxNum + 1).toString().padStart(3, '0')}`;
    }

    // Send message to all parents handler (simulated)
    sendMessageBtn.addEventListener('click', () => {
      const message = messageTextarea.value.trim();
      if (!message) {
        alert('Please enter a message to send.');
        return;
      }
      alert(`Message sent to all parents:\n\n${message}`);
      messageTextarea.value = '';
    });

    // On page load show login
    switchView(null);
  </script>
</body>
</html>

