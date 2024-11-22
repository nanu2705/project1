import React, { useContext } from "react";
import "./ServiceCardModal.scss";
import MyContext from "../Common/Context/MyContext";
import { RxCross2 } from "react-icons/rx";

const ServiceCardModal = () => {
    const { isOpenModal, closeModal, cardName, api } =
        useContext(MyContext);

    const handleNavigation = (name, sname) => {
        window.open(`/service/${sname}/${name}`);
        closeModal();
    };

    return (

        <>
            <div
                className={isOpenModal ? "s-modal-overlay" : "s-modal-overlay-none "}
                onClick={closeModal}
            >
            </div>
            <div className={isOpenModal ? "s-modal" : "s-modal-overlay-none "} id="smodal">
                <div className="cancel-icon" onClick={closeModal}>
                    <RxCross2 size={"25px"} />
                </div>
                <div className="country-container">
                    {api.filter((o) => o.name === cardName).map((o) => {
                        return (
                            <>
                                {o.country?.map((i) => {
                                    return (
                                        <div className="country-card" onClick={() => handleNavigation(i.name, o.name)}>
                                            <img src={i.img} alt="" />
                                            <span>{i.title}</span>
                                        </div>
                                    );
                                })}
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );

};

export default ServiceCardModal;
