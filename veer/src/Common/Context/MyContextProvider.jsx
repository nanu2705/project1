import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const MyContextProvider = ({ children }) => {
  const Navigate = useNavigate()

  const location = useLocation()

  //for backend calling api start
const url ='http://localhost:3035' 

  // for login drawer open start
  const [isOpen, setIsOpen] = useState(false)
  // for login drawer open end

  // for register drawer open start
  const [ropen, setRopen] = useState(false)
  // forregisterdrawer open end

  // for loading start
  const [loading, setLoading] = useState(false)

  //for loading end


  // for sneck bar start
  const [sneck, setSneck] = useState(false)
  const [msg, setMsg] = useState('');

  // for sneck bar end


  const [isOpenModal, setIsOpenModal] = useState(false);
  const [cardName, setCardName] = useState("");

  //for detailsForm
  const [detailFormData, setDetailFormData] = useState({});

  // for stepper
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);


  // for dynamic coutrypage data start

  const [pageData, setPageData] = useState(null);
  const [countryName, setCountryName] = useState(null);

  const [idproof,setIdproof] =useState(false)
  // for dynamic coutrypage data end

  //for layoutpassport start

  const[preview,setPreview] =useState(false)
  
  const previewO=()=>{
    setPreview(true)
    document.querySelector('body').style.overflow='hidden'
    
  }

  const previewC=()=>{
    setPreview(false)
    document.querySelector('body').style.overflow='auto'
  }
    
  //for layoutpassport end


  const [bgColor, setBgColor] = useState('step1');


  const openModal = (name) => {

    setIsOpenModal(true);

    const modalElement = document.getElementById('smodal')
    const screenWidth = window.innerWidth;
    if (modalElement) {
      if (screenWidth <= 525) {
        modalElement.style.animation = "s-modalins 0.5s ease";
      } else {
        modalElement.style.animation = "s-modalin 0.5s ease"; 
      } 
     

      setCardName(name);
      document.querySelector('body').style.overflow = "hidden";
    }
  };

  const opendrop = () => {

    setLogopen(true);

    const modalElement = document.getElementById('sdrop')
    const screenWidth = window.innerWidth;
    if (modalElement) {
      if (screenWidth <= 525) {
        modalElement.style.animation = "slide-ups 0.5s ease";
      } else {
        modalElement.style.animation = "slide-up 0.5s ease"; 
      } 
     

      
      document.querySelector('body').style.overflow = "hidden";
    }
  };

  const closedrop = () => {

    setLogopen(false);

    const modalElement = document.getElementById('sdrop')
    const screenWidth = window.innerWidth;
    if (modalElement) {
      if (screenWidth <= 525) {
        modalElement.style.animation = "slide-ups 0.5s ease";
      } else {
        modalElement.style.animation = "slide-up 0.5s ease"; 
      } 
     

      
      document.querySelector('body').style.overflow = "auto";
    }
  };

  const closeModal = () => {

    const modalElement = document.getElementById('smodal');
    const screenWidth = window.innerWidth;
    if (modalElement) {
      if (screenWidth <= 525) {
        modalElement.style.animation = "s-modalouts 0.4s ease"; 
      } else {
        modalElement.style.animation = "s-modalout 0.4s ease"; 
      } 
      setTimeout(() => {
        document.querySelector('body').style.overflow = "unset";
        setIsOpenModal(false);
      }, 400); // Match the duration of the animation
    }

  };


  // for search bar start

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);

  // for search bar end

  // for service details store
  const [api, setApi] = useState([])

  // for dynamic coutrypage data start

  //for api calling start
  useEffect(() => {
    const fetchData = async () => {
      try {
      setLoading(true)
        const response = await axios.get(`${url}/api/service-details`);
        setApi(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [url]);
  // for api calling end


  // for review api start

  const [rapi, SetRapi] = useState([])
  // for review api end

 

  //for rapi calling start

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${url}/api/reviews`);
        SetRapi(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchReviews();
  }, [url]);
  //for rapi calling end


   //for faq api start

   const [fapi,setFapi] =useState([])

   // for faq api end


 //for fapi calling start

 useEffect(() => {
  const fetchFAQs = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${url}/api/faq`);
      setFapi(response.data);
    } catch (err) {
      console.error("Error fetching FAQs:", err);
      setError(err.message);
    } finally {
      setLoading(false); 
    }
  };

  fetchFAQs();
}, [url]);

//for fapi calling end

  // for pagination start

  const [currentPage, setCurrentPage] = useState(() => {
    const store = localStorage.getItem('step')
    return store ? parseInt(store) : 1
  })
  const [postsPerPage, setPostsPerPage] = useState(8)


  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage

  const currentPosts = api.slice(firstPostIndex, lastPostIndex)
  const totalPosts = api.length

  //for pagination end

  // for saving token state start
  const [token, setToken] = useState(() => {
    const storetoken = sessionStorage.getItem('token')
    return storetoken ? storetoken : ''
 
  })
  // for saving token state end



  // for account data save state start
  const [userdata, setUserdata] = useState(() => {
    const storeUser = sessionStorage.getItem('userdata')
    return storeUser ? JSON.parse(storeUser) : null
  });

  // handle login start
  const handleLogin = (data) => {
    sessionStorage.setItem('token', data.data);
    setToken(data.data);
    setMsg(data.message)
    setIsOpen(false)
    setSneck(true)
  };
  // handle login end

  // handle logout start
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setToken('');
    window.location.reload()
    setShowLogoutConfirm(false);
  }
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);



  const cancelLogout = () => {
    setShowLogoutConfirm(false); // Cancel logout and hide the prompt
  };

  // handle logout end

  // for droplist open start
  const [logopen, setLogopen] = useState(false)

  //for droplist open end

  

  //for payment page start

  const [paymentStatus, setPaymentStatus] = useState('Verifying payment...');
  const [errorMessage, setErrorMessage] = useState(null);

  const [amountpaid, setAmountpaid] = useState()

  const [serviceType, setServiceType] = useState('');
  const [amount, setAmount] = useState(1);
  // for payment page end

  // for admin table start

  const [contacts, setContacts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [newsletters, setNewsletters] = useState([])
  const [detailsData, setDetailsData] = useState([])
  const [passportData, setPassportData] = useState([])


  const [save, setSave] = useState("contact")

  // for get alldata
  const getContactData = async () => {
    setLoading(true)
    const { data } = await axios.get(`${url}/contacts`)
    // console.log(data);
    setContacts(data.contacts)
    setLoading(false)
  }
  const getInquiryData = async () => {
    setLoading(true)
    const { data } = await axios.get(`${url}/inquiries`)
    setInquiries(data.inquiries)
    setLoading(false)

  }
  const getNewsletterData = async () => {
    setLoading(true)
    const { data } = await axios.get(`${url}/allnewsletters`)
    setNewsletters(data.newsletters)
    setLoading(false)

  }

  const getDetailsData = async () => {
    setLoading(true)
    const { data } = await axios.get(`${url}/details`)
    setDetailsData(data.details)
    setLoading(false)

  }

  const getPassportData = async () => {
    setLoading(true)
    const { data } = await axios.get(`${url}/passport`)
    setPassportData(data.passport)
    setLoading(false)

  }

  // for delete data by id
  const deleteContactById = async (id) => {
    setLoading(true)
    const { data } = await axios.delete(`${url}/contact/${id}`)
    console.log(data);
    getContactData()
    setLoading(false)

  }
  const deleteInquiryById = async (id) => {
    setLoading(true)
    const { data } = await axios.delete(`${url}/inquiry/${id}`)
    console.log(data);
    getInquiryData()
    setLoading(false)


  }
  const deleteNewsLetterById = async (id) => {
    setLoading(true)
    const { data } = await axios.delete(`${url}/newsletter/${id}`)
    console.log(data);
    getNewsletterData()
    setLoading(false)

  }

  const deleteDetailsById = async (id) => {
    setLoading(true)
    const { data } = await axios.delete(`${url}/details/${id}`)
    console.log(data);
    getDetailsData()
    setLoading(false)

  }

  const deletePassportById = async (id) => {
    setLoading(true)
    const { data } = await axios.delete(`${url}/passport/${id}`)
    console.log(data);
    getPassportData()
    setLoading(false)

  }


  // for update data by id
  const updateById = async (id, obj) => {
    setLoading(true)
    const { data } = await axios.patch(`${url}/passport/${id}`, obj)
    console.log(data);
    setEditingId(null)
  }

  useEffect(() => {
    setLoading(true)
    getContactData()
    getInquiryData()
    getNewsletterData()
    getDetailsData()
    getPassportData()
    setLoading(false)
  }, []);

  const [editingId, setEditingId] = useState(null);
  // admin table end

  //for razorpay upi start


 
  const handlepay = async(email,mobileNo) => {

    const formData = new FormData();
    formData.append('photo', photofile);
    formData.append('passfront',passfornt);
    formData.append('passback',passback);
    formData.append('sname', sname);
    formData.append('cname', cname);
    formData.append('date', selectedDate);
    formData.append('quantity',quntity);
    formData.append('email', email);
    formData.append('mobileNo', mobileNo);

    try {
      setLoading(true)
      const { data } = await axios.post(`${url}/details`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
     } );
      
      if (data.success) {
        setMsg(data.message)
        setSneck(true);
      } else {
        setMsg(data.error);
        setSneck(true);
      }
    } catch (error) {
      console.error('Error during order submission:', error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleupi = async () => {
    setLoading(true);
   

    try {
      // Use axios to make the POST request
      const { data } = await axios.post(`${url}/razorpay`, {
        amount: totalprice
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (data.success !== true) {
        setSneck(true);
        setMsg(data.error);
      } else {
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY,
          amount: data.totalprice,
          currency: data.currency,
          image: "https://i.ibb.co/Dwt8gPV/logo.png",
          name: "Veer Consultancy",
          description: "Test Transaction",
          order_id: data.id,
          config: {
            display: {
              blocks: {
                utib: {
                  name: "most recommended using",
                  instruments: [
                    {
                      method: "card",
                      types: ["debit", "credit"]
                    },
                    {
                      method: "upi",
                      flows: ["collect"]
                    },

                    {
                      method: "wallet",

                    },

                    {
                      method: "paylater",

                    }
                  ]
                },

              },

              sequence: ["block.utib", "block.other"],
              preferences: {
                show_default_blocks: true
              }
            }
          },
          handler: async (response) => {
            
            await handlepay()
            Navigate('/confirm');
          },
          // modal: {
          //   ondismiss: function () {
          //     if (window.confirm("Are you sure you want to close the form?")) {
          //       console.log("Checkout form closed by the user");
          //     } else {
          //       console.log("Complete the Payment");
          //     }
          //   }
          // },
          theme: {
            color: "#F4ACBD",
            hide_topbar: false,
            shape: "rectangular",
            header: {
              color: "#fff",
              text: "Payment"
            }
          }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      }
    } catch (error) {
      alert(error.message);
      console.error("Error during payment process:", error);
    } finally {
      setLoading(false);
    }
  };

  // for razorpay upi end

  //for layout page start
  const [entryPrice, setEntryPrice] = useState(0); 
  const [totalprice,setTotalprice] =useState(1)
  const [quntity, setQuntity] = useState(1);
const [uploadedPhoto, setUploadedPhoto] = useState(null);


  const [saveemail,setSaveemail]=useState('')
  const [savemobile,setSavemobile] =useState('')
  const [saveform,setSaveform] = useState(
    {
     
      quantity:'', 
    }
  )
     //for country and service name
 const [sname,setSname]=useState('')
 const[cname,setCname] =useState('')
  
  const [start,setStart]=useState(
    {
        date:false,
        photo:false,
        passport:false,
        details:false
    }

)

const[cb,setCb]=useState('date')

const changephoto =()=>{
       setStart({...start,date:true})
        setCb('photo')
}



const changepassport =async()=>{
  setStart({...start,date:true,photo:true})
  setCb('passport')
  console.log("photofile1:",photofile)
}

const changedetails =()=>{
  setStart({...start,date:true,photo:true,passport:true})
  setCb('details')

}




const [selectedDate, setSelectedDate] = useState(null);
const [uploadedPassport,setUploadedPassport] =useState(null);
const [uploadedbackPassport,setUploadedbackPassport] =useState(null);

const[file,setFile] = useState(null)


const[photofile,setPhotofile]=useState(null)
const[passfornt,setPassfront]=useState(null)
const[passback,setPassback]=useState(null)

const onPassportUpload = (event) => {
  const file =event.currentTarget.files[0];
  if (file) {
    setPassfront(file)
    const imageUrl = URL.createObjectURL(file);
    setUploadedPassport(imageUrl);
  }
};

const onPassportbackUpload = (event) => {
  const file = event.currentTarget.files[0];
  if (file) {
    setPassback(file)
    const imageUrl = URL.createObjectURL(file);
    setUploadedbackPassport(imageUrl);
  }
};



const onPhotoUpload = (event) => {
  const file = event.currentTarget.files[0];
  if (file) {
   setPhotofile(file)
   console.log("photofile:",photofile)
    const imageUrl = URL.createObjectURL(file);
    setUploadedPhoto(imageUrl);

  }
};
  //for layout page end

  //for passport page start

  const[passmodel,setPassmodel] =useState(false)
  const[sockets,setSockets] =useState(false)
  const [title,setTitle]=useState('')
  const [opensearch,setOpensearch] =useState('')

  const handleO=()=>{
    setPassmodel(true)
    document.querySelector('body').style.overflow='hidden'
  }
  const handleC=()=>{
    setPassmodel(false)
    document.querySelector('body').style.overflow='auto'
  }

  const socketO=()=>{
    setSockets(true)
    document.querySelector('body').style.overflow='hidden'
  }

  const socketC=()=>{
    setSockets(false)
    document.querySelector('body').style.overflow='auto'
  }

  
  //for socket page start
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  //for socket page end
  //for passport page end

  //for admin panel start

  const [username, setUsername] = useState('');
    const [error, setError] = useState('');
  //for admin panel end

  

  return (
    <MyContext.Provider value={{
      title,setTitle,opensearch,setOpensearch,username, setUsername,error, setError,idproof,setIdproof,preview,setPreview,
      passmodel,setPassmodel,sockets,setSockets,messages, setMessages,message, setMessage,previewO,previewC,opendrop,closedrop,
      photofile,setPhotofile,file,setFile,sname,setSname,cname,setCname,handleO,handleC,socketO,socketC,
      onPassportUpload ,onPassportbackUpload,onPhotoUpload,quntity, setQuntity,saveform,setSaveform,
      selectedDate, setSelectedDate,uploadedPhoto, setUploadedPhoto,uploadedPassport,setUploadedPassport,uploadedbackPassport,setUploadedbackPassport,
      cb,setCb,changedetails,entryPrice, setEntryPrice,totalprice,setTotalprice,saveemail,setSaveemail,setSavemobile,savemobile,
      start,changepassport,changephoto,setStart,sneck, setSneck, ropen, msg, setMsg, loading, setLoading,
      setRopen, isOpen, setIsOpen, Navigate, location, isOpenModal, openModal,
      closeModal, cardName, setCardName, bgColor, setBgColor, currentStep, setCurrentStep,
      complete, setComplete, searchTerm, setSearchTerm, data, setData, api, setApi, currentPage, setCurrentPage,
      postsPerPage, setPostsPerPage, currentPosts, totalPosts, lastPostIndex, firstPostIndex,
      pageData, setPageData, countryName, setCountryName, rapi, SetRapi, serviceType, setServiceType, amount, setAmount,
      token, setToken, userdata, setUserdata, handleLogout, handleLogin,  handlepay, handleupi,
       logopen, setLogopen, cancelLogout, showLogoutConfirm, setShowLogoutConfirm,
      paymentStatus, setPaymentStatus, errorMessage, setErrorMessage, amountpaid, setAmountpaid, url,
      detailFormData, setDetailFormData,fapi,setFapi,
      // admin table
      contacts, setContacts, inquiries, newsletters, save, setSave, deleteContactById,
      deleteInquiryById, deleteNewsLetterById, updateById, deletePassportById,
      deleteDetailsById, detailsData, getDetailsData,passportData,
      editingId, setEditingId
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider