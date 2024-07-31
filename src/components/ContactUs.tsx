import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(-1);

  const phoneRegex = /^\d{10}$/;

  useEffect(() => {
    if (success === 0 || success === 1) {
      setTimeout(() => {
        setSuccess(-1);
      }, 3000);
    }
  }, [success]);

  return (
    <div className="  w-full py-8 px-5 md:py-16 ">
      <div
        className="mx-auto flex max-w-[60rem] flex-col   justify-center gap-4 rounded-xl bg-white p-4 md:flex-row md:gap-12 md:p-24"
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}
      >
        <div className="md:w-[50%]">
          <div className="flex items-center gap-2">
            <p className="text-[19px] text-black md:text-[24px]">
              connect with us for any questions or concerns
            </p>
          </div>
          <p className=" mt-4 text-[#747474]">
            For technical questions, please post your questions on our forum
            where you can get help from fellow students.
            <br className="" /> For course suggestions and career advice, check
            out our learning paths.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:w-[40%]  ">
          <input
            className="w-full rounded-md border-[#CCCCCC] bg-[#EBEBEB] p-2  text-[16px] text-black  outline-none"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
            minLength={10}
          ></input>
          <textarea
            className="w-full rounded-md border-[#CCCCCC] bg-[#EBEBEB] p-2 text-[16px]   text-black  outline-none"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            disabled={processing}
            className="mt-2 cursor-pointer rounded-md bg-[#004AAD] p-2 "
            onClick={async () => {
              if (message.length > 6 && phoneRegex.test(phone)) {
                setProcessing(true);
                await addDoc(collection(db, "contacts"), {
                  phone: phone,
                  message: message,
                });
                setSuccess(1);
                setMessage("");
                setPhone("");

                setProcessing(false);
              } else {
                setSuccess(0);
              }
            }}
          >
            {processing ? (
              <div className="flex justify-center p-2">
                <div className="mr-[3px] h-2 w-2 animate-ping rounded-full bg-white [animation-delay:-0.45s]"></div>
                <div className="mr-[3px] h-2 w-2 animate-ping rounded-full bg-white [animation-delay:-0.30s]"></div>
                <div className="mr-[3px] h-2 w-2 animate-ping rounded-full bg-white [animation-delay:-0.15s]"></div>
                <div className="mr-[3px] h-2 w-2 animate-ping rounded-full bg-white [animation-delay:-0s]"></div>
              </div>
            ) : (
              <div className="flex items-center   justify-center gap-2 text-[16px]">
                Send
              </div>
            )}
          </button>

          {success === 1 && (
            <p className="text-right text-green-600 ">
              Thanks for connecting 😊
            </p>
          )}
          {success === 0 && (
            <p className="text-right text-red-600 ">Please try Again 😔</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
