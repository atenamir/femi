import { IStepProps } from "./types";


function SecondStep({setStep}:IStepProps) {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-xl">
        <span className="w-4 border-2 px-2 text-pink-400 rounded-full mx-2">
          2
        </span>
        My Info
      </h1>
      <form className="px-2 py-2 my-4 w-full bg-gray-50 rounded grid grid-cols-1 md:grid-cols-2 ">
        {/* === name ==== */}
        <div className="my-2 md:mx-3">
          <label htmlFor="name" className="block text-gray-700 mb-1">
            Name:
            <span className="text-pink-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full px-3 py-2 border border-pink-300 rounded outline-none "
            required
            placeholder="enter youre Name"
          />
        </div>
        {/* === phone === */}
        <div className="my-2 md:mx-3">
          <label htmlFor="phone" className="block text-gray-700 mb-1">
            Phone:
            <span className="text-pink-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-3 py-2 border border-pink-300 rounded outline-none "
            required
            placeholder="0016 111 1111"
          />
        </div>
        {/* === addresss ==== */}
        <div className="my-2 md:mx-3">
          <label htmlFor="address" className="block text-gray-700 mb-1">
            Address:
            <span className="text-pink-600">*</span>
          </label>
          <textarea
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-pink-300 rounded outline-none "
            required
            placeholder="City , street ..."
          />
        </div>
        {/* ===description==== */}
        <div className="my-2 md:mx-3">
          <label htmlFor="description" className="block text-gray-700 mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border border-pink-300 rounded outline-none "
            placeholder="Description"
          />
        </div>
        {/* === submit button === */}
        <div className="w-full md:col-span-2 flex items-center">
          <button
          onClick={()=>setStep(3)}
          className=" bg-pink-300 text-white p-2 my-3 w-[70%] mx-auto
          rounded-lg cursor-pointer active:scale-90 transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecondStep;
