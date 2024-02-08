import { Checkbox } from "antd";
import React from "react"
import SendButton from '../../assets/SendButton.svg'
import { useRequestCallBack } from "../../hooks/api";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const Back = () => {
    navigate('/')
  }

  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    message: "",
    mode: "email",
    receive_communication: false
  });

  const onChange = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    if (e.target.name === "mode-phone" || e.target.name === "mode-email") {
      field = "mode";
      value = e.target.name === "mode-phone" ? "phone" : "email";
    }

    if (e.target.name === "receive_communication") {
      value = e.target.checked;
    }
    setFormData({ ...formData, [field]: value });
  }

  const {
    requestCallBack,
    isLoading
  } = useRequestCallBack({
    onError: () => { },
    callBack: (res) => {
      navigate("/contact-us-success")
      setFormData({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        message: "",
        mode: "email",
        receive_communication: false
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    requestCallBack(formData);
  }

  return (
    <main className="md:py-20">
      <div className="w-full md:w-[90%] mx-auto md:py-10">
        <button onClick={Back} className="px-4 text-[#E9682B] mt-20  bg-stone-100">
          Back
        </button>
        <h1 className="text-center text-zinc-800 flex mt-6 md:mt-0 justify-center mr-4 text-[15px] md:text-[45px] font-normal Inter uppercase md:leading-[50.40px]">
          send us your message and feedback
        </h1>

        <form onSubmit={handleSubmit} className="w-[80%] py-10 md:mt-10 mx-auto flex flex-col">
          <div className="flex flex-col md:flex-row gap-8 md:gap-28">
            <div className="flex flex-col w-full">
              <label className="text-zinc-800 text-opacity-60 text-sm md:text-xl font-light Inter uppercase leading-none">
                First name
              </label>
              <input
                onChange={onChange}
                type="text"
                name="first_name"
                className="border-b border-slate-900 focus:outline-none"
                placeholder=""
                value={formData.first_name}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-zinc-800 text-opacity-60 text-sm md:text-xl  font-light Inter uppercase leading-none">
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                className="border-b border-slate-900 focus:outline-none"
                onChange={onChange}
                placeholder=""
              />
            </div>
          </div>

          <div className="flex flex-col mt-5 md:mt-10 md:flex-row gap-8 md:gap-28">
            <div className="flex flex-col w-full">
              <label className="text-zinc-800 text-opacity-60 text-sm md:text-xl  font-light Inter uppercase leading-none">
                Mobile number
              </label>
              <input
                type="number"
                name="phone_number"
                value={formData.phone_number}
                className="border-b border-slate-900 focus:outline-none"
                onChange={onChange}
                placeholder=""
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-zinc-800 text-opacity-60 text-sm md:text-xl  font-light Inter uppercase leading-none">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className="border-b border-slate-900 focus:outline-none"
                onChange={onChange}
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-col py-10 md:py-10 w-full">
            <label className="text-zinc-800 text-opacity-60 text-sm md:text-xl  font-light Inter uppercase leading-none">
              Your message
            </label>
            <textarea
              rows="4"
              type="text"
              className="border-b border-slate-900 resize-none p-3 focus:outline-none"
              placeholder=""
              value={formData.message}
              onChange={onChange}
              name="message"
            />
          </div>
          <div>
            <h1 className=" text-zinc-800 text-[14px] md:text-[22px] mt-14 font-normal Inter leading-9">
              Please select a preferred mode of contact
            </h1>
            <div className="flex flex-col md:flex-row gap-4 justify-between mt-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <Checkbox
                  checked={formData.mode === "phone"}
                  name="mode-phone" onChange={onChange}><p className=" text-zinc-800 text-xs md:text-base font-normal Inter leading-7">Request a phone call back</p></Checkbox>
                <Checkbox
                  checked={formData.mode === "email"}
                  name="mode-email" onChange={onChange}><div className=" text-zinc-800 text-xs md:text-base font-normal Inter leading-7">Request email communications</div></Checkbox>
              </div>
              <Checkbox
                name="receive_communication"
                onChange={onChange}><div className=" text-zinc-800 text-xs md:text-base font-normal Inter leading-7">I would like to receive communications from Bezal Homes</div></Checkbox>
            </div>
          </div>
          <div
            onClick={handleSubmit}
            className=" cursor-pointer mt-6 md:mt-16"
          >
            <img
              src={SendButton}
              alt="Button"
              className={`${isLoading ? "opacity-60" : "animate-pulse transition-all"} w-[77.83px] h-[77.94px] lg:w-[160.72px] lg:h-[160.94px]`}
            />
          </div>
        </form>

      </div>
    </main>
  );
};

export default ContactForm;
