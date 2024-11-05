import React from "react";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";

const Client = () => {
  return (
    <section className="md:py-[117px] py-[30px] bg-white">
      <div className="max-w-container mx-auto">
        <div className="flex justify-between">
          <div className="md:flex justify-between md:w-1/2">
            <img src={client1} alt="client1" />
            <img src={client2} alt="client2" />
          </div>
          <div className="md:flex justify-between md:w-1/2">
            <img src={client3} alt="client3" />
            <img src={client4} alt="client4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
