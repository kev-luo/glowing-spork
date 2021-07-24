import React from "react";
import { createPopper } from "@popperjs/core";

export default function Popover({ color }) {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "right",
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className={
              "bg-" +
              color +
              "-500 text-white active:bg-" +
              color +
              "-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
            right {color}
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-" +
              color +
              "-600 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className={
                  "bg-" +
                  color +
                  "-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
                }
              >
                {color} popover title
              </div>
              <div className="text-white p-3">
                And here is some amazing content. It is very engaging. Right?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
