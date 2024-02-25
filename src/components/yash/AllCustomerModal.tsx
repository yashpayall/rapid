import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ModalCrossIcons, PlusIcons } from "../common/Icons";

export default function AllCustomerModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={openModal}
          type="submit"
          className="flex gap-2 justify-center items-center bg-[#8C39FF] rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-white font-Manrope text-[16px] font-bold group border-[2px] border-[#8C39FF] hover:text-[#8C39FF] hover:bg-transparent duration-300 max-w-[194px] w-full h-[48px]">
          <PlusIcons />
          Add new client
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center relative">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="max-w-[1029px] w-full mx-auto p-8 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)] bg-white rounded-lg relative">
                  <div className="absolute top-[24px] right-[24px]">
                    <div className="cursor-pointer" onClick={closeModal}>
                      <ModalCrossIcons />
                    </div>
                  </div>
                  <p className="text-center text-[#4B465C] font-DMSans text-[32px] font-normal">
                    Add New Client{" "}
                  </p>
                  <form action="" className="w-full flex flex-col gap-4">
                    <div className="flex max-sm:flex-col gap-6 mt-[34px] w-full">
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="First Name"
                          className="text-[#353E5C] font-Manrope text-[14px] font-normal">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="rounded-lg h-[48px] sm:max-w-[470px] w-full border-[1px] border-[#B4B9C9] outline-none px-6 mt-1"
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="First Name"
                          className="text-[#353E5C] font-Manrope text-[14px] font-normal">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="rounded-lg h-[48px] sm:max-w-[470px] w-full border-[1px] border-[#B4B9C9] outline-none px-2 mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="Company">Company</label>
                      <input
                        type="text"
                        className="rounded-lg h-[48px] w-full border-[1px] border-[#B4B9C9] outline-none px-6 mt-1"
                      />
                    </div>
                    <div>
                      <label htmlFor="Company">Phone number</label>
                      <input
                        type="number"
                        className="rounded-lg h-[48px] w-full border-[1px] border-[#B4B9C9] outline-none px-6 mt-1"
                      />
                    </div>
                    <div>
                      {" "}
                      <label htmlFor="Company">Email</label>
                      <input
                        type="email"
                        className="rounded-lg h-[48px] w-full border-[1px] border-[#B4B9C9] outline-none px-6 mt-1"
                      />
                    </div>
                    <div>
                      {" "}
                      <label htmlFor="Company">Source</label>
                      <input
                        placeholder="English"
                        type="text"
                        className="rounded-lg h-[48px] w-full border-[1px] border-[#B4B9C9] outline-none px-6 mt-1 placeholder:text-[#B4B9C9] font-Manrope text-[16px] font-normal"
                      />
                    </div>
                  </form>
                  <div className="flex gap-6 my-6 justify-center">
                    <button
                      type="submit"
                      className="max-w-[105px] w-full h-[48px] rounded-lg bg-[#7367F0] text-white text-[16px] font-bold font-Manrope border-[2px] border-[#7367F0] hover:text-[#7367F0] hover:bg-transparent duration-300">
                      Update
                    </button>
                    <button
                      type="submit"
                      className="max-w-[102px] w-full h-[48px] rounded-lg border-[2px] bg-[#FDEDED] text-[#A565FF] text-[16px] font-bold font-Manrope border-[#FDEDED] hover:text-[#7367F0] hover:bg-transparent duration-300">
                      Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
