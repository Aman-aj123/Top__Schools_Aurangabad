const fetchData = () => {

    const data = [{
        schoolName: "ST Joseph Public School Amba, Aurangabad",
        schoolDesc: "This School imparts education with a mission to create intelligent, enterprising and dynamic persons with immense vitality and passion to   explore and envolve..",
        schoolImg: "https://yt3.googleusercontent.com/HE49947B9wUhIrY22LSrPgzR9iVpmpDe4Lju8WwsABDa0AdS3PS40UzOlZX0XyoVtn0HcJE5=s900-c-k-c0x00ffffff-no-rj",
        schoolLink: "https://amanbro123922.github.io/school/#"

    },
    {
        schoolName: "Kendriya Vidyalay, Aurangabad ",
        schoolDesc: "Kendriya Vidyalaya, Aurangabad was established in 2010 under the patronage of Kendriya Vidyalaya Sangthan, New Delhi ,an autonomous body under the Ministry of Human Resource Development. Like all Kendriya Vidyalayas, KV Aurangabad too adheres to four fold Principles of KVS.",
        schoolImg: "https://static.toiimg.com/thumb/msid-80926851,width-1280,height-720,resizemode-4/80926851.jpg",
        schoolLink: "https://aurangabad.kvs.ac.in/",


    },
    {
        schoolName: "D.A.V. Public School, Aurangabad | Bihar",
        schoolDesc: "DAV Public School, Daudnagar was established in the year 1993 by untiring effort of the then S.D.O., C.O. And other local intelligentsia.",
        schoolImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPv8feQEjRt3k9Vqt1lLfpIeboOBc68_SbyA&s",
        schoolLink: "http://davdaudnagar.in/"

    },

    {
        schoolName: "ST Ignatius School | Aurangabad",
        schoolDesc: "Established in 1994, St. Ignatius School, Aurangabad is a co-educational Secondary School open to all, irrespective of religion, caste or community.",
        schoolImg: "https://www.joonsquare.com/usermanage/image/business/st-ignatius-school-aurangabad-bihar-10984/st-ignatius-school-aurangabad-bihar-st-ignatius-high-school-1.jpg",
        schoolLink: "https://stignatius.in/"

    },

    {
        schoolName: "G.D Goenka Public School Aurangabad",
        schoolDesc: "GD Goenka School, Aurangabad, is a premier educational institution that has been shaping the minds and futures of young learners since its inception.",
        schoolImg: "https://gdgoenkaaurangabad.com/sites/default/files/2.jpg",
        schoolLink: "https://gdgoenkaaurangabad.com/"

    },
    {
        schoolName: "Ambika Public School. aurangabad, bihar",
        schoolDesc: "Ambika Public School in Aurangabad-bihar is one of the leading businesses in the CBSE Schools. Also known for Schools, CBSE Schools, Public Schools and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Ambika Public School, Aurangabad-bihar",
        schoolImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRCbceKTgleRkJx8FFvdu9C0BNaT5btaJsA&s",
        schoolLink: "https://www.justdial.com/Aurangabad-Bihar/Ambika-Public-School-Police-Line-Aurangabad-Bihar-Ho/9999P6186-6186-140529120842-G1U8_BZDET"

    },

    {
        schoolName: "Narayana Mission School – Best School In Bihar",
        schoolDesc: "Narayana Mission School, Aurangabad(Bihar)is situated in the heart of town to cater the the need of education and to train the young minds of aurangabad district with great emphasis on sanskar, manner and behaviour.",
        schoolImg: "https://scontent.fixr1-1.fna.fbcdn.net/v/t39.30808-6/475135064_1153955180067657_1240976863171394497_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=O3wpRqpPLNEQ7kNvgFv6QDd&_nc_zt=23&_nc_ht=scontent.fixr1-1.fna&_nc_gid=AtnISuvkpXFTdrSTk6j53h_&oh=00_AYCKF8w15IhIOXHb9Jlc8KY8Sju9bohXR80tgFNWHkJgHw&oe=67A3E813",
        schoolLink: "https://narayanamissionschool.com/"
    },

    {
        schoolName: "Lord Buddha Public School Aurangabad",
        schoolDesc: "Lord Buddha Public School is one of the most prestigious schools in Bihar. Founded as a Public School in 1996 in Aurangbad, it is a private institution run by the Lord Buddha Educational Development Foundation Aurangabad .",
        schoolImg: "https://www.lbpsaurangabad.in/cntrl/sp/3992WhatsApp%20Image%202023-09-02%20at%207.47.50%20AM.jpeg",
        schoolLink: "https://www.lbpsaurangabad.in/"

    },

    {
        schoolName: "B.L. Indo Anglian Public School | Aurangabad",
        schoolDesc: "B L Indo Anglian Public School in Aurangabad Bihar HO, Aurangabad-Bihar is a leading name in the education sector, offering a wide range of programs to cater to the diverse needs of its students. The school is dedicated to academic excellence and operates on a schedule that accommodates students' varied commitments",
        schoolImg: "https://www.edustoke.com/assets/uploads-new/95dd0827-0109-4764-bd25-b5a9b22f67ce.jpg",
        schoolLink: "https://www.justdial.com/Aurangabad-Bihar/B-L-Indo-Anglian-Public-School-Rampur-Tola-Dhanhara-Aurangabad-Bihar-HO/9999P6186-6186-180408004512-J2Y4_BZDET"
    },

    {
        schoolName: "Sanskar Vidya in Daudnagar,Aurangabad-bihar",
        schoolDesc: "Sanskar Vidya in Daudnagar, Aurangabad-Bihar is a leading name in the education sector, offering a wide range of programs to cater to the diverse needs of its students.",
        schoolImg: "https://content.jdmagicbox.com/comp/aurangabad-bihar/q7/9999p6186.6186.191206152425.a4q7/catalogue/sanskar-vidya-daudnagar-aurangabad-bihar-cbse-schools-4is1x1jnj5.jpg?fit=around%7C550:350&crop=550:350;*,*",
        schoolLink: "https://www.justdial.com/Aurangabad-Bihar/Sanskar-Vidya-Near-Sanskar-Vidya-Daudnagar/9999P6186-6186-191206152425-A4Q7_BZDET"
    },
    
 
   



    ]

    const schoolCards = document.getElementById("school-cards");
    let content = ""
    data.forEach((e) => {
        content += `
         
      <div   data-aos="zoom-in-up"
            class="shadow-xl max-w-lg cursor-pointer h-[700px] w-[900px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a target="_blank" href=  ${e.schoolLink} >
                <img class="rounded-t-lg h-[400px] w-full"
                    src= ${e.schoolImg}
                    alt="" />
            </a>
            <div class="p-5">
                <a target="_blank" href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${e.schoolName} </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${e.schoolDesc.slice(0, 200)}... </p>

                <p class="2xl mb-4 font-bold text-green-500">AFFILIATED TO CBSE, DELHI</p>
                <a target="_blank" href=${e.schoolLink}"
                    class=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Visit us
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
     `
    })

    schoolCards.innerHTML = content
}



document.addEventListener("DOMContentLoaded", fetchData);
