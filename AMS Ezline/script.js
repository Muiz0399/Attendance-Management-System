//                                          Login Panel 
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simplified login logic (for demonstration purposes)
    if (username === 'user' && password === 'userpass') {
      document.querySelector('.login-container').style.display = 'none';
      document.querySelector('.user-panel').style.display = 'block';
    } else if (username === 'admin' && password === 'adminpass') {
      document.querySelector('.login-container').style.display = 'none';
      document.querySelector('.admin-panel').style.display = 'block';
    } else {
      alert('Invalid credentials');
    }
  }
  
//                                           User Panel 

function markAttendance() {
  const today = new Date().toDateString();
  const userId = 'user123'; // Replace with actual user ID after authentication
  const attendanceKey = `${userId}-${today}`;
  
  if (!localStorage.getItem(attendanceKey)) {
    // Mark attendance
    const attendanceRecords = document.getElementById('attendanceRecords');
    const listItem = document.createElement('li');
    listItem.textContent = 'Attendance marked';
    attendanceRecords.appendChild(listItem);
    
    // Store attendance for today
    localStorage.setItem(attendanceKey, 'present');
    alert('Attendance marked successfully.');
  } else {
    alert('Attendance already marked for today.');
  }
}
  
  function markLeave() {
    // Similar logic for marking leave using localStorage
  const today = new Date().toDateString();
  const userId = 'user123'; // Replace with actual user ID after authentication
  const leaveKey = `${userId}-leave-${today}`;

  if (!localStorage.getItem(leaveKey)) {
    // Mark leave
    const leaveRecords = document.getElementById('attendanceRecords');
    const listItem = document.createElement('li');
    listItem.textContent = 'Leave marked';
    leaveRecords.appendChild(listItem);

    // Store leave for today
    localStorage.setItem(leaveKey, 'leave');
    alert('Leave marked successfully.');
  } else {
    alert('Leave already marked for today.');
  }
}
 
  function viewAttendance() {
    const today = new Date().toDateString();
    const userId = 'user123'; // Replace with actual user ID after authentication
    const attendanceKey = `${userId}-${today}`;
    
    const attendanceStatus = localStorage.getItem(attendanceKey);
  
    if (attendanceStatus) {
      alert(`Attendance status for today: ${attendanceStatus}`);
    } else {
      alert('Attendance not marked for today.');
    }
  }
  
  //                                        Leave Request 
  document.getElementById('leaveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const leaveReason = document.getElementById('leaveReason').value;
    // You can handle the leave request here
    // For demonstration, let's alert the reason
    alert(`Leave Request Submitted. Reason: ${leaveReason}`);
  });

  //                                          Profile 
  document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click(); // Trigger file input click event
  });

  // Display uploaded profile picture
  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
      const previewImage = document.getElementById('previewImage');
      previewImage.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file); // Read file as URL
    }
  });

  
//                                           Admin Panel 
const userAttendanceData = [
  { userId: 1, date: '2024-01-10', status: 'Present' },
  { userId: 2, date: '2024-01-11', status: 'Absent' },
  // Add more user attendance data...
];

// Function to generate user attendance report
function generateReport() {
  const fromDate = document.getElementById('fromDate').value;
  const toDate = document.getElementById('toDate').value;

  // Filter user attendance data based on 'From' and 'To' dates
  const filteredData = userAttendanceData.filter(entry => entry.date >= fromDate && entry.date <= toDate);

  // Prepare the report HTML
  let reportHTML = '<h3>Attendance Report</h3>';
  reportHTML += `<p>From: ${fromDate} - To: ${toDate}</p>`;
  reportHTML += '<table>';
  reportHTML += '<tr><th>User ID</th><th>Date</th><th>Status</th></tr>';

  filteredData.forEach(entry => {
    reportHTML += `<tr><td>${entry.userId}</td><td>${entry.date}</td><td>${entry.status}</td></tr>`;
  });

  reportHTML += '</table>';

  // Display the generated report
  const reportDisplay = document.getElementById('reportDisplay');
  reportDisplay.innerHTML = reportHTML;
}
//                                              LA 
// Sample leave requests data
const leaveRequests = [
  { id: 1, name: "Musa", status: "Leave" },
  { id: 2, name: "Taha", status: "Present" },
  { id: 3, name: "Ali", status: "Leave" },
  // Add more leave requests...
];

// Function to display leave requests and update counts
function displayLeaveRequests() {
  const leaveList = document.getElementById('leaveList');
  let totalLeaves = 0;
  let totalPresents = 0;
  let totalAbsents = 0;

  leaveRequests.forEach(request => {
    const listItem = document.createElement('li');
    listItem.textContent = `${request.name} - ${request.status}`;
    leaveList.appendChild(listItem);

    if (request.status === "Leave") {
      totalLeaves++;
    } else if (request.status === "Present") {
      totalPresents++;
    } else {
      totalAbsents++;
    }
  });

  document.getElementById('totalLeaves').textContent = totalLeaves;
  document.getElementById('totalPresents').textContent = totalPresents;
  document.getElementById('totalAbsents').textContent = totalAbsents;
}

// Display leave requests and update counts on page load
window.onload = function() {
  displayLeaveRequests();
};

//                                             A,E,D 
// .................................... 

  // Fetch student records and populate the table
  let students = [];

  function addStudent() {
    const studentName = document.getElementById('studentName').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;
  
    students.push({ id: generateStudentID(), name: studentName, status: attendanceStatus });
    displayStudents();
  }
  
  function editStudent() {
    const studentName = document.getElementById('studentName').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;
  
    const index = students.findIndex(student => student.name === studentName);
    if (index !== -1) {
      students[index].status = attendanceStatus;
      displayStudents();
    }
  }
  
  function deleteStudent() {
    const studentName = document.getElementById('studentName').value;
  
    students = students.filter(student => student.name !== studentName);
    displayStudents();
  }
  
  function MarkedAttendance() {
    const studentName = document.getElementById('studentName').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;
  
    const index = students.findIndex(student => student.name === studentName);
    if (index !== -1) {
      students[index].status = attendanceStatus;
      displayStudents();
    }
  }
  
  function generateStudentID() {
    // Replace this with your own logic to generate a unique ID for students
    return Math.floor(Math.random() * 1000);
  }
  
  function displayStudents() {
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';
    
    students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.status}</td>
      `;
      studentsList.appendChild(row);
    });
  }
  
  // Initialize the table with some sample students
  students = [
    { id: 101, name: "Musa", status: "Present" },
    { id: 102, name: "Ali", status: "Absent" },
    // Add more sample students...
  ];
  
  // Display the initial set of students
  displayStudents();

  //                                       CG 
  function calculateGrade() {
    const attendanceDays = parseInt(document.getElementById('attendanceDays').value);
  
    let grade = '';
    if (attendanceDays >= 26) {
      grade = 'A';
    } else if (attendanceDays >= 20) {
      grade = 'B';
    } else if (attendanceDays >= 15) {
      grade = 'C';
    } else if (attendanceDays >= 10) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    document.getElementById('gradeResult').innerHTML = `<h3>Grade Result</h3><p>Grade: ${grade}</p>`;
  }
  // ..................... 
  window.addEventListener('DOMContentLoaded', function() {
    const studentRecords = [
      { name: 'M Musa', attendance: 'Present' },
      { name: 'M Taha', attendance: 'Absent' },
      { name: 'M Ali' , attendance: 'Present'},
      // Add more records here
    ];
  
    const studentRecordsTable = document.getElementById('studentRecords');
  
    studentRecords.forEach(function(record) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${record.name}</td>
        <td>${record.attendance}</td>
        <td><button>Edit</button><button>Delete</button></td>
      `;
      studentRecordsTable.appendChild(row);
    });
  
    // Simulated list of users for report generation
    const userList = ['User 1', 'User 2', 'User 3']; // Replace with actual user data
  
    const selectUserDropdown = document.getElementById('selectUser');
  
    userList.forEach(function(user) {
      const option = document.createElement('option');
      option.text = user;
      selectUserDropdown.add(option);
    });
  });