import back1 from './../images/back1.jpg'
import back2 from './../images/back2.jpg'
import back3 from './../images/back3.jpg'
import back4 from './../images/back4.jpg'
import dropImg from './../images/dropdown_icon.png';

const HomeData={
    crousal:[
        {id:0,image:back1,alt:"1st"},
        {id:1,image:back2,alt:"2nd"},
        {id:2,image:back3,alt:"3rd"},
        {id:3,image:back4,alt:"4th"},
    ],
    search_panel:[
        {id:0,name:"BUY"},
        {id:1,name:"RENT"},
        {id:2,name:"COMMERCIAL"},
        {id:3,name:"PG/CO-LIVING"},
    ],
    select_field:[
        {
            id:0,
            label:"Chandigarh"
        },
        {
            id:1,
            label:"Mohali"
        },
        {
            id:2,
            label:"Panchkula"
        },
        {
            id:3,
            label:"Zirakpur"
        },
        {
            id:4,
            label:"Ambala"
        },
    ],
    Chandigarh:[
        {id:0,label:"Ashirwad Hospital, 37D, Sector 37, Chandigarh"},
        {id:1,label:"Ashvani Sir's Tution Classes, 40B, Sector 40B, Chandigarh"},
        {id:2,label:"Ashoka Departmental Store, Sector 47 D, Sector 47, Chandigarh"},
        {id:3,label:"Aspire Life Sciences, NAC Manimajra, Manimajra, Chandigarh"},
        {id:4,label:"Ashok Kumar Dr Duggal, 22C, Sector 22, Chandigarh"},
    ],
    Panchkula:[
        {id:0,label:" Amravati Enclave, Panchkula"},
        {id:1,label:"Abhey Pur, Industrial Area Phase 1, Panchkula"},
        {id:2,label:"Abdullapur, Pinjore, Panchkula"},
        {id:3,label:"Azad Colony, Panchkula"},
        {id:4,label:"Abhepur, Haryana, Panchkula"},
        {id:5,label:"A Block, Pinjore, Panchkula"},
        {id:6,label:"Alliance Buildtech, Panchkula"},
    ],
    Zirakpur:[
        {id:0,label:"Nabha, Zirakpur"},
        {id:1,label:"Gazipur , Zirakpur"},
        {id:2,label:"Lohgarh , Zirakpur"},
        {id:3,label:"PR7 Airport Road , Zirakpur"},
        {id:4,label:"Sanauli, Zirakpur"},
        {id:5,label:"Nagla , Zirakpur"},
        {id:6,label:"Kishanpura , Zirakpur"},
        {id:7,label:"Daffarpur , Zirakpur"},
    ],
    Ambala:[
        {id:0,label:"Ambala District"},
        {id:1,label:"Ambala Cantt, Ambala"},
        {id:2,label:"Avinashpuri Colony, Ambala"},
        {id:3,label:"Ashok Nagar, Ambala Cantt, Ambala"},
        {id:4,label:"Arya Nagar, Ambala Cantt, Ambala"},
        {id:5,label:"Asa Singh Garden, Baldev Nagar, Ambala"},
        {id:6,label:"Ambala City Railway Station, Ambala"},
        {id:7,label:"Ambala Cantt Junction Railway Station, Ambala"},
    ],
    Mohali:[
        {id:0,label:"Sector 115, Mohali"},
        {id:1,label:"Khanpur, Mohali"},
        {id:2,label:"Ranai Majra, Mohali"},
        {id:3,label:"Bhago Majra, Mohali"},
        {id:4,label:"JLPL Industrial Area, Mohali"},
        {id:5,label:"Sunny Enclave, Mohali"},
    ],
    
    null:[
        {id:0,label:"Ambala District"},
        {id:1,label:"Ambala Cantt, Ambala"},
        {id:2,label:"Avinashpuri Colony, Ambala"},
        {id:3,label:"Ashok Nagar, Ambala Cantt, Ambala"},
        {id:4,label:"Arya Nagar, Ambala Cantt, Ambala"},
        {id:5,label:"Asa Singh Garden, Baldev Nagar, Ambala"},
        {id:6,label:"Ambala City Railway Station, Ambala"},
        {id:7,label:"Ambala Cantt Junction Railway Station, Ambala"},
        {id:8,label:"Nabha, Zirakpur"},
        {id:9,label:"Gazipur , Zirakpur"},
        {id:10,label:"Lohgarh , Zirakpur"},
        {id:11,label:"PR7 Airport Road , Zirakpur"},
        {id:12,label:"Sanauli, Zirakpur"},
        {id:13,label:"Nagla , Zirakpur"},
        {id:14,label:"Kishanpura , Zirakpur"},
        {id:15,label:"Daffarpur , Zirakpur"},
        {id:16,label:" Amravati Enclave, Panchkula"},
        {id:17,label:"Abhey Pur, Industrial Area Phase 1, Panchkula"},
        {id:18,label:"Abdullapur, Pinjore, Panchkula"},
        {id:19,label:"Azad Colony, Panchkula"},
        {id:20,label:"Abhepur, Haryana, Panchkula"},
        {id:21,label:"A Block, Pinjore, Panchkula"},
        {id:22,label:"Alliance Buildtech, Panchkula"},
        {id:23,label:"Sector 115, Mohali"},
        {id:24,label:"Khanpur, Mohali"},
        {id:25,label:"Ranai Majra, Mohali"},
        {id:26,label:"Bhago Majra, Mohali"},
        {id:27,label:"JLPL Industrial Area, Mohali"},
        {id:28,label:"Sunny Enclave, Mohali"},
        {id:29,label:"Ashirwad Hospital, 37D, Sector 37, Chandigarh"},
        {id:30,label:"Ashvani Sir's Tution Classes, 40B, Sector 40B, Chandigarh"},
        {id:31,label:"Ashoka Departmental Store, Sector 47 D, Sector 47, Chandigarh"},
        {id:32,label:"Aspire Life Sciences, NAC Manimajra, Manimajra, Chandigarh"},
        {id:33,label:"Ashok Kumar Dr Duggal, 22C, Sector 22, Chandigarh"},
    ],
    filter_panel:[
        {id:0,name:"Budget",img:dropImg},
        {id:1,name:"Bedroom",img:dropImg},
        {id:2,name:"Construction Status",img:dropImg},
        {id:3,name:"Type Of",img:dropImg},
    ],
    check_panel:[
        {id:0,name:"1BHK"},
        {id:1,name:"2BHK"},
        {id:2,name:"3BHK"},
        {id:3,name:"4BHK"},
        {id:4,name:"5BHK"},
    ],
    check_panel_construction:[
        {id:0,name:"Under Construction"},
        {id:1,name:"Ready to move"},
    ],
    check_panel_typeof:[
        {id:0,name:"Flat/Apartment"},
        {id:1,name:"Independent/Builder Floor"},
        {id:2,name:"Independent House/Villa"},
        {id:3,name:"Residential Land"},
        {id:4,name:"Farm House"},
        {id:5,name:"Serviced Apartments"},
    ],
}   

export default HomeData;