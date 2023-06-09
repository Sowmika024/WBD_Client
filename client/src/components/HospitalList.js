import './Navbar'
import Navbar from './Navbar'

function HospitalList() {
    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[2];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }
    return(
        <div><br /><br />
 <Navbar></Navbar>
    <meta charset="UTF-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=100%, initial-scale=1.0"></meta>
    <title> LIST OF HOSP </title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" rel="stylesheet"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
    <link rel="stylesheet" href="style.css"></link>
    <link rel="icon" type="text/css" href="icon.png"></link>

<h2 style={{textAlign:'center'}}>Hospitals</h2>

<input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for names.." title="Type in a name" style={{width:'40cm',height:'1.5cm'}}></input>
<br /><br />
<table id="myTable">
  <tr class="header">
    <th>S.no</th>
    <th>Hospital Name</th>
    <th>City</th>
    <th>Contact</th>
    <th>Address</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Care Hospitals </td>
    <td>Hyderabad</td>
    <td>040 6725 6666</td>
    <td>Door NO 6-3-248 / 1/A, Road No 1, Opposite Taj Banjara Hills, Hyderabad - 500034</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Apollo Hospitals </td>
    <td>Hyderabad</td>
    <td>040 2360 7777</td>
    <td> Rd Number 72, opposite Bharatiya Vidya Bhavan School, Film Nagar, Hyderabad, Telangana 500033</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Prathima Hospitals</td>
    <td>Hyderabad</td>
    <td>040 4345 4345</td>
    <td> 3/4/3, Kachiguda Station Rd, Barkatpura, Kachiguda, Hyderabad, Telangana 500027</td>
</tr>
<tr>
    <td>4</td>
    <td>Kolors Health Care</td>
    <td>Chennai</td>
    <td>098847 96666</td>
    <td> 150, Trunk Rd, next to GK Cinemas, Lakshmi Nagar, Porur, Chennai, Tamil Nadu 600116</td>
</tr>
<tr>
    <td>5</td>
    <td>Appasamy Multispeciality Hospitals</td>
    <td>Chennai</td>
    <td>079042 99271</td>
    <td> 1 and 2, 1st St, near SBI Officers Colony, Vathalagundu Arumugam Nagar, Arumbakkam, Chennai, Tamil
        Nadu 600106</td>
</tr>
<tr>
    <td>6</td>
    <td>Sri Balaji Hospital</td>
    <td>Chennai</td>
    <td>044 2232 5500</td>
    <td> 1, Lawyer Jaganathan St, Guindy, Chennai, Tamil Nadu 600032</td>
</tr>
<tr>
    <td>7</td>
    <td>Wockhardt Hospitals, Mumbai Central</td>
    <td>Mumbai</td>
    <td>082911 01001</td>
    <td> Police Station, 1877, Dr Anandrao Nair Marg, Near Agripada, Mumbai Central, Mumbai, Maharashtra
        400011</td>
</tr>
<tr>
    <td>8</td>
    <td>Saint George Hospital</td>
    <td>Mumbai</td>
    <td> 022 2262 0245</td>
    <td> P D'Mello Rd, opposite GPO, beside CST station, Chhatrapati Shivaji Terminus Area, Fort, Mumbai,
        Maharashtra 400001</td>
</tr>
<tr>
    <td>9</td>
    <td>Gokuldas Tejpal Hospital</td>
    <td>Mumbai</td>
    <td>022 2262 1465</td>
    <td> G. P. O, Near Police Commissioners Office, Lokmanya Tilak Rd, Fort, Mumbai, Maharashtra 400001</td>
</tr>
<tr>
    <td>10</td>
    <td>Govind Ballabh Pant Hospital</td>
    <td>Delhi</td>
    <td>011 2323 4242</td>
    <td>1, Jawaharlal Nehru Marg, 64 Khamba, Raj Ghat, New Delhi, Delhi 110002</td>
</tr>
<tr>
    <td>11</td>
    <td>Kalra Hospital</td>
    <td>Delhi</td>
    <td>011 4500 5600</td>
    <td> Tulsi Dass Kalra Marg, Kirti Nagar, New Delhi, Delhi 110015
    </td>
</tr>
<tr>
    <td>12</td>
    <td>Holy Family Hospital</td>
    <td>Delhi</td>
    <td> 011 2684 5900</td>
    <td> Okhla Rd, Okhla, New Delhi, Delhi 110025</td>
</tr>
</table>
        </div>
    )
}

export default HospitalList