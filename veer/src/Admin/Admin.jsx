import React, { useContext } from "react";
import { Helmet } from 'react-helmet-async';
import "./Admin.scss";
import contactImg from "../Assets/flaticons/contactImg.png";
import inquiryImg from "../Assets/flaticons/inquiryImg.png";
import newsletter from "../Assets/flaticons/newsletter.png";
import formDetailsImg from "../Assets/flaticons/pass.png";
import MyContext from "../Common/Context/MyContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import vlogo from "../Assets/logo.png"
const Admin = () => {


    const {
         
        contacts,
        inquiries,
        newsletters,
        save,
        setSave,
        deleteContactById,
        deleteInquiryById,
        deleteNewsLetterById,
        deleteDetailsById,
        detailsData,
        // setUpdateTableData,

    } = useContext(MyContext);


    return (
        <div className="admin-page">
            <Helmet>
                <title>Admin</title>
                <meta name="description" content="Admin page" />
            </Helmet>
            <div className="admin-main">
                <div className="navigation">
                    <div className="navigation-container">
                        <div className="n-heading">
                            <img src={vlogo} alt="" /> <h3>Veer Consultancy</h3>
                        </div>
                        <div className="n-item" onClick={() => setSave("contact")}>
                            <img src={contactImg} alt="" />
                            <span>Contact Us</span>
                        </div>
                        <div className="n-item" onClick={() => setSave("inquiry")}>
                            <img src={inquiryImg} alt="" />
                            <span>Inquiries</span>
                        </div>
                        <div className="n-item" onClick={() => setSave("newsletter")}>
                            <img src={newsletter} alt="" />
                            <span>Newsletter</span>
                        </div>

                        <div className="n-item" onClick={() => setSave("details")}>
                            <img src={formDetailsImg} alt="" />
                            <span>Serviceform Details</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    {save === "contact" && (
                        <div className="table-container">
                            <h3>Contact</h3>
                            <table>
                                <tr>
                                    <th>Index</th>
                                    <th>Date&Time</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Actions</th>
                                </tr>

                                {contacts.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.message}</td>
                                            <td>
                                                <div className="actions-btn">
                                                    <div className="delete-btn">
                                                        <RiDeleteBin5Line
                                                            size={"25px"}
                                                            onClick={() => deleteContactById(item._id)}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    )}
                    {save === "inquiry" && (
                        <div className="table-container">
                            <h3>Inquiries</h3>
                            <table>
                                <tr>
                                    <th>Index</th>
                                    <th>Date&Time</th>
                                    <th>Name</th>
                                    <th>MobileNo</th>
                                    <th>VisaType</th>
                                    <th>Country</th>
                                    <th>Actions</th>
                                </tr>

                                {inquiries.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                                            <td>{item.name}</td>
                                            <td>{item.mobileNo}</td>
                                            <td>{item.visaType}</td>
                                            <td>{item.country}</td>

                                            <td>
                                                <div className="actions-btn">
                                                    <div className="delete-btn">
                                                        <RiDeleteBin5Line
                                                            size={"25px"}
                                                            onClick={() => deleteInquiryById(item._id)}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    )}

                    {save === "newsletter" && (
                        <div className="table-container">
                            <h3>Newsletters</h3>
                            <table>
                                <tr>
                                    <th>Index</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>

                                {newsletters.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                <div className="actions-btn">
                                                    <div className="delete-btn">
                                                        <RiDeleteBin5Line
                                                            size={"25px"}
                                                            onClick={() => deleteNewsLetterById(item._id)}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    )}



                    {save === "details" && (
                        <div className="table-container">
                            <h3>Serviceform Details</h3>
                            <table>
                                <tr>
                                    <th>Index</th>
                                    <th>Date&Time</th>
                                    <th>Date</th>
                                    <th>Service Name</th>
                                    <th>Country Name</th>
                                    <th>Email</th>
                                    <th>MobileNo</th>
                                    {/* <th>Photo</th>
                                    <th>Passport-front</th>
                                    <th>Passport-back</th> */}
                                    <th>Quantity</th>
                                    
                                </tr>

                                {detailsData?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                                            <td>{new Date(item.date).toLocaleDateString('en-GB')}</td>
                                            <td>{item.sname}</td>
                                            <td>{item.cname}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobileNo}</td>
                                              <td>{item.quantity}</td>

                                            {/* <td><a target="_blank" rel="noreferrer" download="identity.jpg" href={url + '/' + item.identityProof}>Photo</a></td>
                                            <td><a target="_blank" rel="noreferrer" href={url + '/' + item.birthProof}>Passport-front</a></td>
                                            <td><a target="_blank" rel="noreferrer" href={url + '/' + item.addressProof}>Passport-back</a></td> */}
                                            <td>
                                                <div className="actions-btn">
                                                    <div className="delete-btn">
                                                        <RiDeleteBin5Line
                                                            size={"25px"}
                                                            onClick={() => deleteDetailsById(item._id)}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </table>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Admin;