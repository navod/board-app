"use client";

import { useState } from "react";
import {
  Squares2X2Icon,
  RectangleStackIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  FolderIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
  ArrowLeftCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import ImageIcon from "@/components/icons/ImageIcon";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-600" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
        w-64 bg-white h-screen flex flex-col
        fixed lg:static z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
        style={{ marginTop: "7px" }}
      >
        <div className="p-6 border-b border-gray-200">
          <img
            src="/images/logo.png"
            alt="Boord App Logo"
            className="h-5 w-auto"
          />
        </div>

        <div className="p-4 border-b border-border border-r">
          <div className="flex items-center justify-between bg-card-bg rounded-lg p-3 shadow-sm border border-border">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-text-natural-3 rounded-full flex items-center justify-center mr-3">
                <ImageIcon className="w-4 h-4 text-white" />
              </div>

              <div>
                <div className="text-xs text-text-muted">workspace</div>
                <div className="text-sm font-medium text-text-natural-3">
                  Root folder
                </div>
              </div>
            </div>
            <ChevronDownIcon className="h-4 w-4 text-text-natural-3 text-bold stroke-[5]" />
          </div>
        </div>

        <nav className="flex-1 p-4 border-r border-gray-200">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Squares2X2Icon className="h-5 w-5 mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <div className="flex items-center px-3 py-2 text-sm text-blue-600 bg-blue-50 rounded-lg">
                <FolderIcon className="h-5 w-5 mr-3" />
                Dropdown
              </div>
              <ul className="ml-8 mt-2 space-y-1">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-xs text-gray-500 hover:text-gray-700"
                  >
                    Create routes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-xs text-gray-500 hover:text-gray-700"
                  >
                    Delepment React App
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-xs text-blue-600 font-medium"
                  >
                    Sport Xi Project
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-xs text-gray-500 hover:text-gray-700"
                  >
                    Wordpress theme
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 mr-3" />
                Messages
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <CalendarIcon className="h-5 w-5 mr-3" />
                Calendar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <UserIcon className="h-5 w-5 mr-3" />
                Team members
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg mb-2"
          >
            <QuestionMarkCircleIcon className="h-5 w-5 mr-3" />
            Support
          </a>
          <button className="flex items-center w-full px-3 py-2 text-sm text-white bg-gray-800 hover:bg-gray-900 rounded-lg">
            <ArrowLeftStartOnRectangleIcon className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
