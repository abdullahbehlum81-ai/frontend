import { Fragment, ReactNode } from "react";
import {
  Dialog as HeadlessDialog,
  DialogPanel,
  DialogTitle,
  Description,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import clsx from "clsx";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
  title: string;
  description?: string;
  className?: string;
  description_className?: string;
  Title_className?: string;
  Content_ClassName?: string;
}

function Dialog({
  isOpen,
  onClose,
  title,
  description,
  content,
  className,
  description_className,
  Title_className,
  Content_ClassName,
}: DialogProps) {
  return (
    <Transition show={isOpen} as={Fragment} appear>
      <HeadlessDialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-100/80 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div
            className={clsx(
              "flex min-h-screen items-center justify-center !p-4 text-center sm:items-center sm:p-0",
              className
            )}
          >
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all !my-8 md:!my-0 w-full sm:max-w-lg md:max-w-xl">
                <div className="bg-white !p-5 sm:!p-8 relative">
                  <div className="!mb-3">
                    <div className="flex items-center justify-between">
                      <DialogTitle
                        className={clsx(
                          "text-slate-950 text-lg sm:text-2xl font-medium leading-loose",
                          Title_className
                        )}
                      >
                        {title}
                      </DialogTitle>

                      <div
                        className="w-9 h-9 bg-slate-100 rounded-[32px] flex justify-center items-center cursor-pointer"
                        onClick={onClose}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-6 h-6 text-slate-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>

                    {description && (
                      <Description
                        className={clsx(
                          "text-slate-950 text-lg font-normal leading-7 tracking-tight !mt-3",
                          description_className
                        )}
                      >
                        {description}
                      </Description>
                    )}
                  </div>

                  {content && (
                    <div className={clsx("mt-8", Content_ClassName)}>
                      {content}
                    </div>
                  )}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
}

export default Dialog;
