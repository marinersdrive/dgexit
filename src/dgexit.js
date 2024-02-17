import React from "react";
import { useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { FiArrowRightCircle } from "react-icons/fi"; // Import the arrow icon
import { FaChevronRight } from "react-icons/fa";

function DgExit() {

    const categories = [
        { id: 1, label: "Elementary First Aid", short_label: "EFA / Refresher"},
        { id: 11, label: "Advanced Fire Fighting", short_label: "AFF / Refresher"},
        { id: 5, label: "Security Training for Seafarers", short_label: "STSDSD"},
        { id: 2, label: "Fire Prevention & Fire Fighting", short_label: "FPFF / Refresher"},
        { id: 3, label: "Personal Survival Techniques", short_label: "PST / Refresher"},
        { id: 4, label: "Personal Safety & Social Responsibility", short_label: "PSSR" },
        { id: 7, label: "TASCO", short_label: "TASCO"},
        { id: 8, label: "CHEMCO", short_label: "CHEMCO"},
        { id: 9, label: "GASCO", short_label: "GASCO"},
        { id: 6, label: "OCTF / OCTCO", short_label: "OCTF / OCTCO" },
        { id: 10, label: "MEDICARE / Refresher", short_label: "MEDICARE / Refresher"},
        { id: 12, label: "PSCRB", short_label: "PSCRB"},
        { id: 13, label: "Medical First Aid", short_label: "MFA / Refresher"},
        { id: 14, label: "Passenger Ship Familiarization", short_label: "PSF"},
        
      ];

      const navigate = useNavigate();

      const handleCategoryClick = (categoryName) => {
        localStorage.setItem("selectedCategory", categoryName);
        navigate("/instructionspage");
      };
  
    return (
      <div className="min-h-screen sm:px-8 px-6 pt-6 mb-4 sm:mb-0 font-montserrat overflow-hidden">
      <div className="flex space-x-2 items-center mb-2">
      <img
            src="https://github.com/marinersdrive/images/blob/main/Main%20Logo.png?raw=true"
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 motion-safe:animate-spin"
          />
        <h1 className="flex text-lg sm:text-3xl font-bold text-dark-blue">
          My Tests <FaChevronRight className="p-1 m-1" /> DG Exit Exam
        </h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 sm:py-5 sm:mb-4 py-3 mb-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border border-gray-300 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg p-4 sm:p-6 bg-white hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-105 relative"
          >
            <div className="cursor-pointer">
              <h3 className="text-lg sm:text-2xl lg:text-xl font-semibold text-blue mb-2">
                {category.label}
              </h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                Get ready for {category.short_label} with our comprehensive exam preparation materials.
              </p>
              <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">30 questions &nbsp;|&nbsp; 30 mins &nbsp;|&nbsp; 30 marks</p>
              <div className="flex items-end mt-4 sm:mt-8">
                <span className="text-black font-medium mr-2 text-sm sm:text-base">
                  <a href={category.syllabusLink} className="text-gray-600 hover:text-dark-blue hover:font-semibold">
                    View Syllabus
                  </a>
                </span>
                <FiArrowRightCircle className="text-blue text-xl sm:text-2xl" />
                <button
                className="flex items-right absolute right-4 bottom-2.5 sm:bottom-4 text-sm sm:text-base bg-blue text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out"
                onClick={() => handleCategoryClick(category.short_label)} 
              >
                Start Now
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  }
  
  export default DgExit;
  